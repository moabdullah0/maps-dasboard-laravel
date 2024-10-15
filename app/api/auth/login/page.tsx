"use client";
import { Button } from "@/components/ui/button";
import {  signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { loginSchema } from "./loginSchema";
import Navbar from "@/components/Dashboard/Layout/Navbar";
import TextInputLogin from "@/components/ui/TextinputLogin";

type FormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setError(null);
  
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
  
    if (res?.error) {
      setError("خطأ في البريد الإلكتروني أو كلمة المرور.");
      setLoading(false);
      return;
    }
  
    // const session = await getSession();
  

    router.replace("/");
  };
  return (
    <div dir="rtl">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-blue-400 pt-[70px]">
        <div className="w-full flex flex-col items-center justify-center max-w-md rounded-lg shadow-lg p-4">
          <div className="w-full bg-white p-8 rounded-xl border my-4 relative">
            {loading && (
              <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
              </div>
            )}
            <h2 className="text-center text-2xl font-bold mb-8 text-blue-color">
              تسجيل الدخول!
            </h2>

            {error && (
              <div className="mb-4 text-center text-red-500">{error}</div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <div className="mt-8 relative">
                <TextInputLogin
                  id="email"
                  title="الايميل"
                  type="email"
                  register={register}
                />
              </div>

              {/* Password Field */}
              <div className="mt-8 relative">
                <TextInputLogin
                  id="password"
                  title="كلمة المرور"
                  type="password"
                  register={register}
                />
              </div>

              {/* Remember Me */}
              <div className="mb-4 mt-8">
                <label className="inline-flex gap-2 items-center text-sm text-gray-700">
                  <input
                    {...register("rememberme")}
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="ml-2">تذكرني</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mb-8">
                <Button
                  className="bg-blue-600 border-2 hover:border-border duration-200 border-secondary-color text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading}
                >
                  تسجيل الدخول
                </Button>
              </div>

    
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
