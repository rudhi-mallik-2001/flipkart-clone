import axios from "axios";
const Url='http://localhost:8000';
export const fatchDatafromApi = async(data) => {
  try{
    return await axios.post(`${Url}/signup`,data)
  }
  catch(error ){
    console.log('error',error);
  }
}

//export default fatchDatafromApi;



export const CheckLoginDatafromApi = async(data) => {
  try{
    return await axios.post(`${Url}/login`,data)
  }
  catch(error ){
    return error;
  }
}