import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useToastContext } from '../context/ToastContext.js';

function ToastOverlay() {
  const { toasts, removeToast } = useToastContext();

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
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => removeToast(toast.id)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
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

export default ToastOverlay;
