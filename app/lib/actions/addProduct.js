"use server"
import Product from "@/app/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectMongoDB } from "../dbConnection";

export async function addProduct(formData) {
  const { title, price, sizes, colors, SKU, category, stock, description } = Object.fromEntries(formData);

  try {
    connectMongoDB();
    const newProduct = new Product({
      title,
      price,
      sizes,
      colors,
      SKU,
      category,
      stock,
      description,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong"
    }
  }

  revalidatePath("/products")
  // redirect("/products")
}