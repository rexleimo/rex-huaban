"use server";
import Image from "@/models/images";
import DB from "@/utils/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().refine((v) => v.length > 0, {
    message: "name is required",
  }),
  desc: z.string(),
  images: z
    .string()
    .array()
    .refine((v) => v.length > 0, {
      message: "images is required",
    }),
});

export async function ImageCreate(
  formData: FormData
): Promise<{ errors?: z.ZodIssue[]; state?: boolean }> {
  const formJson = Object.fromEntries(formData);
  const images = (formJson.images as string).split(",");

  const paread = schema.safeParse(formJson);
  if (paread.success === false) {
    return {
      errors: paread.error.errors,
    };
  }

  const cover = images[0];

  const imageModel = new Image({
    name: formJson.name,
    desc: formJson.desc,
    cover: cover,
    images,
  });

  try {
    await DB();
    await imageModel.save();
    return { state: true };
  } catch (err) {
    return { state: false };
  }
}
