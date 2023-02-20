
import Product from "../model/product_schema.js";

export const getProducts=async(req,res)=>{
    try {
        console.log("getproduct called")
        const products=await Product.find({});
        res.status(200).json(products);        
    } catch (error) {
        res.status(500).json({message:error.massage})
    }
}

