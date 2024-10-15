import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import ApiClient from "@/Services/api-client";
import { Projects, ProjectsResponse } from "@/entites/Projects";

const apiClientGet = new ApiClient<ProjectsResponse>("/api/v1/projects");
const apiClient = new ApiClient<Projects>("/api/v1/projects");
// const apiClientAllUsers = new ApiClient<UserResponse>("api/auth/users");
// const apiClientREgister = new ApiClient<User>("api/auth/register");
// const apiClientAll = new ApiClient<User>("api/Grade/AllGrade/");

export const FetchProjects = () =>
  useQuery<ProjectsResponse, Error>({
    queryKey: ["AllUsers"],
    queryFn: () => apiClientGet.getAll.bind(apiClientGet)(), // Return the array directly
    staleTime: 1 * 60 * 1000,
  });



 
  
  export const PostProjects = () => {
    const queryClient = useQueryClient();
    return useMutation<Projects, Error, Projects>({
      mutationFn: (project: Projects) => apiClient.post(project),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["Projects"] });
      },
      onError: (error: Error) => {
        console.error("Error posting data:", error);
      },
    });
  };
  

export const GetProjectsById = (id: string) => 
  useQuery<Projects | null, Error>({
    queryKey: ["Project", id],
    queryFn: () => apiClientGet.getById(id),
    staleTime: 5 * 60 * 1000,
  });

export const UpdateProjects = () => {
  const queryClient = useQueryClient();
  return useMutation<Projects, Error, Projects>({
    mutationFn: (Projects: Projects): Promise<Projects> => {
      const id = Projects.id ?? null;
      return apiClient.update(Projects, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
    },
  });
};

export const useDeleteProjects = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id: string|undefined): Promise<void> => {
      await apiClient.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
    },
  });
};
