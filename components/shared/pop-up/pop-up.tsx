import React from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 bg-blue-950 bg-opacity-15 flex justify-center items-center z-50">
      <div className="">
        {/* زر الإغلاق في الزاوية العلوية اليمنى */}
     
        
      
        {children}
      </div>
    </div>
  );
};

export default Popup;
