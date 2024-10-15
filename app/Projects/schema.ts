import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  type: z.string(),
  description: z.string(),
  location: z.string(),
  status: z.string(),
  duration: z.string(),

});


export type Project = z.infer<typeof ProjectSchema>;
