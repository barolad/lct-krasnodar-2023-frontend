import * as z from "zod";

export const workerFormSchema = z.object({
  name: z.string().min(2).max(50),
  surname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  grade: z.enum(["0", "1", "2"]),
  location: z.object({
    location: z.string(),
    locationCoordinates: z.tuple([z.number(), z.number()]),
  }),
  email: z.string().email(),
  password: z.string(),
});
