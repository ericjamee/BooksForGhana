import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

/**
 * Toast notification component with auto-dismiss
 */
export const Toast = ({ message, type, onClose, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4">
      <div
        className={`${bgColors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 min-w-[300px]`}
        role="alert"
      >
        <span className="text-xl">
          {type === 'success' && '✅'}
          {type === 'error' && '❌'}
          {type === 'info' && 'ℹ️'}
        </span>
        <span className="flex-1">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

