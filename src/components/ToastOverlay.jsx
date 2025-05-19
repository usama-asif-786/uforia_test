import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useToastContext } from '../context/ToastContext.js';

function ToastOverlay() {
  const { toasts, removeToast, likeSubmission } = useToastContext();

  return (
    <>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={5000}
          onClose={() => removeToast(toast.id)}
        >
          <Alert
            severity="info"
            variant="filled"
            sx={{ backgroundColor: '#202229' }}
            action={
              <>
                <LikeButton submission={toast} onLike={likeSubmission} />
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => removeToast(toast.id)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            }
            onClose={() => removeToast(toast.id)}
          >
            <div>
              {toast.data.firstName} {toast.data.lastName}
            </div>
            <div style={{ fontSize: '12px' }}>
              {toast.data.email}
            </div>
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

function LikeButton({ submission, onLike }) {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onLike(submission);
    setLoading(false);
  };

  return (
    <IconButton
      color="inherit"
      onClick={handleClick}
      disabled={loading}
      size="small"
      sx={{ color: loading ? 'inherit' : '#7ccccd' }}
    >
      {loading ? <CircularProgress size={20} /> : 'LIKE'}
    </IconButton>
  );
}

export default ToastOverlay;
