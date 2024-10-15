import React from "react";
import LoadindPosts from "../Loading/loadingPost";
interface Props {
  onClose: () => void;
  loadingPost: boolean;
}
const ActionButton = ({ onClose, loadingPost }: Props) => {
  return (
    <div className="flex  w-full items-center justify-around px-16 my-3 ">
      <button
        type="submit"
        className="btn-border px-8 py-1 rounded-3xl bg-blue-600 font-medium text-white text-md flex items-center gap-2"
      >
        {loadingPost ? <LoadindPosts /> : "تأكيد"}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="btn-border px-8 py-1 rounded-3xl bg-red-500  font-medium text-white text-md flex items-center gap-2"
      >
        إلغاء
      </button>
    </div>
  );
};

export default ActionButton;
