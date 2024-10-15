import { User } from "@/entites/Users";
import ApiClient from "@/Services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const apiClient =new ApiClient<User>('/api/v1/register')

export const PostUser = () => {
    const queryClient = useQueryClient();
    return useMutation<User, Error, User>({
      mutationFn: (user: User) => apiClient.post(user),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["User"] });
      },
      onError: (error: Error) => {
        console.error("Error posting data:", error); 
      },
    });
  };