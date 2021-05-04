import axios from 'axios';
import { GET_ERRORS, GET_PRODUCTS,GET_PRODUCT,DELETE_PRODUCT } from './type';
/**
 * In this EmployeeAction, we are going to make us HTTP Request to External Resources.
 * In this , It is used to create the Employee and also implemented Exception Handling.
 * @param merchant 
 * @param history 
 */
// export const createProduct=(merchant,history)=>async dispatch=> {
//     try {
//         await axios.post ("http://localhost:5000/api/projects",merchant)
//         history.push("/dashboard");
//         console.log(merchant)
//     } 
//     catch (error) {
//         dispatch({ 
//             type:GET_ERRORS,
//             payload:error.response.data
//         })
//     }
// }
/**
 * In this updateProduct variable, It is used to update the details of Product
 */
export const updateProduct=(merchant,history)=>async dispatch=> {
    try {
        await axios.post ("http://localhost:5000/api/projects/update",merchant)
        history.push("/dashboard");
    } 
    catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
/**
 * By using this variable, it is used to get all the details of Emplyees.
 */
export const getProducts=()=>async dispatch=>{
    const res=await axios.get("http://localhost:5000/api/projects/all");
    dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    })
}
/**
 * In this getProduct variable, we are going to get the details of Product By Product Id.
 */
export const getProduct=(productId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:5000/api/projects/${productId}`);
    dispatch({
        type:GET_PRODUCT,
        payload:res.data
    })
}
/**
 * In this variable, we are going to delete the details of Product.
 */
export const deleteProduct=(productId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the Product and the data related to it")) {
        await axios.delete(`http://localhost:5000/api/projects/${productId}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:productId
        })
    }
}