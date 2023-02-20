
import axios from 'axios';
import * as actionType from "../constant/productConstants";

const URL='http://localhost:8000'
export const getProduct=()=>async(dispatch)=>{
    try {
        console.log('getProduct called')
        const {data}=await axios.get(`${URL}/products`);
        console.log("after getproduct called data is:->",data);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_FAIL,value:error.message})
    }
}