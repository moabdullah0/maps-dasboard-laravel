import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2, { message: 'يرجى إدخال البريد الإلكتروني الصحيح بطول 8 أحرف على الأقل' }),
  password: z.string().min(8, { message: 'قم بإدخال كلمة مرور بطول 8 أحرف وأرقام على الأقل' }),
  rememberme: z.boolean().optional(),
});
