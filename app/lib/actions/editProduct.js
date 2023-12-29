"use server"
import Product from "@/app/models/Product";
import { connectMongoDB } from "../dbConnection";
import { revalidatePath } from "next/cache";

export async function getProductById(id) {
  try {
    connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return product;
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}

export async function updateProduct(formData) {
  const { id, title, price, sizes, colors, SKU, category, stock, description } = Object.fromEntries(formData);
  console.log(id)
  try {
    connectMongoDB();

    const updateFields = {
      title,
      price,
      sizes,
      colors,
      SKU,
      category,
      stock,
      description,
    };

    // verifica si uno de los campos está vacío o es indefinido para eliminarlo, y así, evitar errores.
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])

    // procede a actualizar la data
    await Product.findByIdAndUpdate({_id: id}, updateFields);
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong"
    }
  }

  // revalidatePath sirve para mostrar los datos de una pagina en tiempo real, 
  // si no se llama a esta función, la página de "/products" mostraría datos viejos o "cacheados"
  // y daría la sensación de que hubo algún error al actualizar la data
  revalidatePath("/products");
}