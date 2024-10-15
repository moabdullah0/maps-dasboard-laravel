import React from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<Props> = ({ children, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-blue-950 bg-opacity-15 flex justify-center items-center z-50">
      <div className="rounded-2xl shadow-lg relative w-full max-w-lg bg-gray-50 border border-blue-950 p-6">
        {/* زر الإغلاق في الزاوية العلوية اليمنى */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        
        {/* محتوى النافذة المنبثقة */}
        {children}
      </div>
    </div>
  );
};

export default Popup;
