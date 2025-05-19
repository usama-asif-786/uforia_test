import React, { createContext, useContext, useEffect, useState } from 'react';
import { onMessage, fetchLikedFormSubmissions } from '../service/mockServer';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [likedSubmissions, setLikedSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLikedFormSubmissions()
      .then((res) => {
        setLikedSubmissions(res.formSubmissions);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    onMessage((submission) => {
      setToasts((prev) => [...prev, submission]);
    });
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        likedSubmissions,
        loading,
        error,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
