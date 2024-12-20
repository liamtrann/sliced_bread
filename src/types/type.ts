import { z } from "zod";

export interface Beverage {
  name: string;
  description: string;
  imageUrl: string;
}

export const orderFormSchema = z.object({
  name: z.string().optional(),
  quantity: z.number().min(1, "Quantity must be at least 1").optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  country: z.string().min(1, "Country is required"),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
