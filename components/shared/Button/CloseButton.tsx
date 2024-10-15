import React from "react";
interface Props {
  onClose: () => void;
}
const CloseButton = ({ onClose }: Props) => {
  return (
    <div>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  );
};

export default CloseButton;
