import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";
import LoadindDelete from "../Loading/loadindDelete";

interface OriginalData {
  id?: string | undefined;
}

interface ActionsComponentProps {
  original: OriginalData;
  handleEdit: (id: string | undefined) => void;
  handleDelete: (id: string) => void;
  isLoadingDelete: boolean;
}

const ActionsComponent = ({
  original,
  handleEdit,
  handleDelete,
  isLoadingDelete,
}: ActionsComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        className="text-green-500 text-xl hover:text-green-700"
        onClick={() => handleEdit(original.id)}
      >
        <FaEdit />
      </Button>
      <Button
        variant="ghost"
        className="text-red-500 text-xl hover:text-red-700"
        onClick={() => setIsOpen(true)}
      >
        {isLoadingDelete ? <LoadindDelete /> : <FaTrash />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-second-blue-color bg-opacity-15">
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center border-b border-secondary-color p-4">
              <h3 className="text-lg font-semibold text-second-blue-color w-full">
                تأكيد الحذف
              </h3>
            </div>
            <div className="p-4 text-lg">
              <p>هل انت متاكد من انك تريد حذف هذا العنصر ؟</p>
            </div>
            <div className="flex justify-around items-center px-20 p-4">
              <Button
                className="btn-border bg-second-blue-color hover:bg-second-blue-color rounded-full px-8 text-white"
                onClick={() => {
                  if (original.id) {
                    handleDelete(original.id);
                    onClose();
                  }
                }}
              >
                {isLoadingDelete ? <LoadindDelete /> : "حذف"}
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-500 btn-border rounded-full px-8 text-white mr-2"
                onClick={onClose}
              >
                إلغاء
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionsComponent;
