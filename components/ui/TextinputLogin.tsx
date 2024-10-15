import React from "react";
import { UseFormRegister } from "react-hook-form";

interface LoginProps {
  type?: string;
  register: UseFormRegister<{ email: string; password: string; rememberme?: boolean }>;
  title: string;
  id: "email" | "password" | "rememberme";
  readOnly?: boolean;
  value?: string;
}

const TextInputLogin = ({
  type = "text",
  register,
  id,
  title,
  readOnly,
  value,
}: LoginProps) => {
  return (
    <div className="relative w-full min-w-[200px] h-10">
      <input
        {...register(id, {
          required: `${title} مطلوب`,
        })}
        type={type}
        value={value}
        readOnly={readOnly}
        className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border border-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-md px-3 py-2.5 rounded-[7px] focus:border-second-blue-color"
      />
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[13px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:ml-1 peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-2 before:border-l-0 peer-focus:before:border-l-0 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:mr-1 peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-2 after:border-r-0 peer-focus:after:border-r-0 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-700 peer-focus:text-second-blue-color before:border-blue-200 peer-focus:before:border-second-blue-color after:border-blue-gray-200 peer-focus:after:border-second-blue-color">
        {title}
      </label>
    </div>
  );
};

export default TextInputLogin;
