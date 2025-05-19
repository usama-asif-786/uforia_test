import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FixedSizeList as List } from 'react-window';
// i am Using react-window's FixedSizeList for optimized rendering of large lists by only rendering visible items.
import { useToastContext } from './context/ToastContext.js';

const Row = ({ index, style, data }) => {
  const submission = data[index];
  return (
    <div style={style}>
      <Card sx={{ my: 1, mx: 1 }}>
        <CardContent>
          <Typography>
            {submission.data.firstName} {submission.data.lastName} ({submission.data.email})
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default function Content() {
  const { likedSubmissions, loading, error } = useToastContext();
   const listHeight = Math.floor(window.innerHeight * 0.8);
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        Liked Form Submissions
      </Typography>

      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && likedSubmissions.length > 0 && (
        <List
          height={listHeight}
          itemCount={likedSubmissions.length}
          itemSize={100}
          width="100%"
          itemData={likedSubmissions}
        >
          {Row}
        </List>
      )}
    </Box>
  );
}
