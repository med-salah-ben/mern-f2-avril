import { EDIT_CONTACT } from "../constant/actionsTypes";
import { GET_CONTACTS_FAIL , GET_CONTACTS_LOAD ,GET_CONTACTS_SUCCESS ,GET_CONTACT } from "../constant/actionsTypes";
import axios from "axios";

export const getContacts = () =>async(dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result = await axios.get("/api/contact");
        dispatch({
            type:GET_CONTACTS_SUCCESS,
            payload:result.data.response
        })
        console.log(result.data.response)
    } catch (error) {
        console.log(error)
        dispatch({type:GET_CONTACTS_FAIL , payload:error})
    }
}

export const deleteContact = (id)=>async(dispatch)=>{
    try {
        console.log("id : " , id)
        await axios.delete(`/api/contact/${id}`);
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}

export const getContact =(id)=>(dispatch)=>{
    axios
    .get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_CONTACT , payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postContact = (user)=>async(dispatch)=>{
    try {
        await axios.post("/api/contact",user)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }   
}

export const editContact = (id,user)=>async(dispatch)=>{
    try {
        const result = axios.put(`/api/contact/${id}`,user)
        dispatch({type:EDIT_CONTACT , payload : result.data.msg} , getContacts())

    } catch (error) {
        console.log(error)
    }
}