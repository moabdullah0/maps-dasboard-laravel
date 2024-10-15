"use client";

import React, { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project, ProjectSchema } from "./schema";
import ActionButton from "../../components/shared/Button/ActionButton";
import TemplateForm from "../../components/shared/Forms/TemplateForm";
import TextInput from "../../components/ui/TextInput";
import { PostProjects } from "@/hooks/useProjects";
import { z } from "zod";

type ProjectFormData = z.infer<typeof ProjectSchema>;

const PostsProject = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({
    resolver: zodResolver(ProjectSchema),
  });

  const { mutate: postProjectMutation } = PostProjects();
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const onSubmit = (data: Project) => {
    setIsLoadingPost(true);
    postProjectMutation(data, {
      onSuccess: () => {
        setIsLoadingPost(false);
        onClose();
      },
      onError: (error) => {
        console.error("Error posting data:", error);
        setIsLoadingPost(false);
      },
    });
  };

  const formDetailsCenter = [
    { title: "اسم المشروع", id: "name" as keyof ProjectFormData, register },
    { title: "الوصف", id: "description" as keyof ProjectFormData, register },
    { title: "الموقع", id: "location" as keyof ProjectFormData, register },
    { title: "كود المشروع", id: "code" as keyof ProjectFormData, register },
    { title: "نوع المشروع", id: "type" as keyof ProjectFormData, register },
    { title: "حالة المشروع", id: "status" as keyof ProjectFormData, register },
    { title: "مدة المشروع", id: "duration" as keyof ProjectFormData, register },
  ];

  return (
    <TemplateForm title="إضافة مشروع جديد" >
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-5 items-center">
          {formDetailsCenter.map((form, i) => (
            <div key={i} className="w-full px-3 mt-2 mb-5">
              <TextInput
                register={form.register}
                title={form.title}
                id={form.id}
                type="text"
              />
              {errors[form.id as keyof FieldErrors<Project>] && (
                <p className="text-red-500">
                  {errors[form.id as keyof FieldErrors<Project>]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <ActionButton loadingPost={isLoadingPost} onClose={onClose} />
      </form>
    </TemplateForm>
  );
};

export default PostsProject;
