export interface Projects {
    id?: string;
    name: string;
    code: string;
    type: string;
    description: string;
    location: string;
    status: string;
    duration: string;
    updated_at?: Date;
    created_at?: Date;
  }
  
  
  export interface ProjectsResponse {
    data: Projects[]; 
    message?: string;
    status?: string;
  }
  