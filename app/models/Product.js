import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
  title: String,
  price: Number,
  sizes: [String],
  colors: [String],
  SKU: String,
  category: String,
  stock: Number,
  description: String,
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
