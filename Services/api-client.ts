
import axiosInstance from "./axiosInstance";



// Generic API client class
class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // `getAll` method
  getAll = (): Promise<T> => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  // Updated `getById` method to handle nested data structure
  getById = <R = T>(id: string | undefined): Promise<R> => {
    return axiosInstance.get<{ data: R }>(`${this.endpoint}/${id}`)
      .then((res) => res.data.data); // Access the `data` property to get the project details
  };

  post = (data: T): Promise<T> => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T, id: string | null): Promise<T> => {
    return axiosInstance.put<T>(`${this.endpoint}/${id}`, data).then((res) => res.data);
  };

  delete = (id: string | undefined): Promise<void> => {
    return axiosInstance.delete<void>(`${this.endpoint}/${id}`).then((res) => res.data);
  };
}

export default ApiClient;
