"use server";
import Image from "@/models/images";
import DB from "@/utils/db";

export async function ImageCreate(formData: FormData) {
  const formJson = Object.fromEntries(formData);
  const images = (formJson.images as string).split(",");

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
    return true;
  } catch (err) {
    return false;
  }
}
