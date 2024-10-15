import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const TemplateForm = ({  children, title }: Props) => {
  return (
    <div className="fixed inset-0 bg-second-blue-color bg-opacity-15 flex justify-center items-center">
      <div className="bg-white p-5 rounded-2xl shadow-lg relative w-full max-w-md max-h-full overflow-y-auto">
        {/* <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-900 hover:text-gray-700 text-2xl"
        >
          &times;
        </button> */}

        <h1 className="text-blue-color mb-5 text-center text-xl font-bold border-b border-b-secondary-color pb-2">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default TemplateForm;
