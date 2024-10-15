import React from "react";
import { UseFormRegister } from "react-hook-form";

// تحديد واجهة تمثل البيانات التي يتم استخدامها مع register
interface FormData {
  [key: string]: string | number; // تحديد شكل البيانات، مما يتيح مرونة مع الحقول المختلفة
}

interface Props {
  type: string;
  register: UseFormRegister<FormData>; // استخدام النوع المحدد بدلاً من any
  title: string;
  id: string; // تعديل id ليكون من نوع string فقط
  readOnly?: boolean;
  value?: string | number;
}

const InputField = ({ type, register, id, title, readOnly, value }: Props) => {
  return (
    <div>
      <input
        {...register(id, {
          required: `${title} مطلوب`,
        })}
        type={type}
        placeholder={title}
        readOnly={readOnly}
        value={value}
        className="w-full rounded-md mb-5 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};

export default InputField;
