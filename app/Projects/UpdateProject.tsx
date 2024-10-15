"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ActionButton from "@/components/shared/Button/ActionButton";
import TemplateForm from "@/components/shared/Forms/TemplateForm";
import { ProjectSchema } from "./schema";
import TextInput from "@/components/ui/TextInput";
import { GetProjectsById, UpdateProjects } from "@/hooks/useProjects";


type ProjectFormData = z.infer<typeof ProjectSchema>;

const UpdateProject = ({ id, onClose }: { id: string; onClose: () => void }) => {
  console.log(id)
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  // Fetch project data by ID
  const { data, isLoading, isError } = GetProjectsById(id);
  const { mutateAsync: updateProject } = UpdateProjects();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectSchema),
  });

 
  useEffect(() => {
    if (data) {
      console.log("Project data fetched:", data); 
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("location", data.location);
      setValue("code", data.code);
      setValue("type", data.type);
      setValue("status", data.status);
      setValue("duration", data.duration);
    }
  }, [data, setValue]); // Ensure `setValue` and `data` are included in the dependency array

  const onSubmit = async (formData: ProjectFormData) => {
    setIsLoadingPost(true);
    try {
      const updatedData = { ...formData, id };
      await updateProject(updatedData);
      setIsLoadingPost(false);
      onClose(); // Close the form after a successful update
    } catch (error) {
      console.error("Error updating project:", error);
      setIsLoadingPost(false);
    }
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

  if (isLoading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (isError) {
    return <p>Error loading project data.</p>; // Display error state
  }

  return (
    <TemplateForm title="تحديث المشروع" >
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-5 items-center">
          {formDetailsCenter.map((form, i) => (
            <div key={i} className="w-full px-3 mb-5">
              <TextInput
                register={form.register}
                title={form.title}
                id={form.id}
                type="text"
              />
              {errors[form.id as keyof FieldErrors<ProjectFormData>] && (
                <p className="text-red-500">
                  {errors[form.id as keyof FieldErrors<ProjectFormData>]?.message}
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

export default UpdateProject;
