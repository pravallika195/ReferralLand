import axios from 'axios';
const BASE_URL =
  "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api";

export const LoginUser=async(form)=>{
    const response= await axios.post(`${BASE_URL}/auth/signin`, form);
    return response.data;
}