import React, { useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { useSelector , useDispatch } from 'react-redux'
import ContactCard from './ContactCard'
import { getContacts } from '../JS/actions/contact'


const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state.contactReducer.contacts);
    const loadContacts = useSelector((state)=>state.contactReducer.loadContacts);

    useEffect(()=>{
        dispatch(getContacts())
    },[])
    
  return (
    
    <Card.Content>
      <div style={{display:'flex' , justifyContent : "center" , flexWrap:"wrap"}}>
    {loadContacts ? (<h1>loading......</h1>) : contacts.length === 0? (
        <h1>There is no Data.</h1>
    ) : (
        contacts.map((el)=> <ContactCard key={el._id} contact={el} />)
    )}
    </div>
    </Card.Content>
  )
}

export default ContactsList