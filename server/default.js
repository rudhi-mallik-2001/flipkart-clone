
import { products } from "./constants/data.js";
import Product from "./model/product_schema.js";
const Defaultdata=async()=>{
    try {
        await Product.insertMany(products);
        console.log("data uploaded");
    } catch (error) {
        console.log('Error while installing defaultdata',error.message)
    }
}

export default Defaultdata;