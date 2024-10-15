'use client'
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Unauthorized = () => {
  useEffect(() => {
    toast.error("Error 404: Unauthorized Access", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      <div className="text-center">
        <h1 className="text-3xl font-bold">Error 404</h1>
        <p className="mt-4">You do not have permission to access this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized;
