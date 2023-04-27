import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import {useDispatch} from "react-redux"
import { deleteContact , getContact } from "../JS/actions/contact";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS/actions/edit";



const ContactCard = ({contact}) => {
  const dispatch = useDispatch()

  const delContact =(id)=> {
    dispatch(deleteContact(id))
  }

  const oneContact =(id)=>{
    dispatch(getContact(id))
  }

  const editTrue = ()=>{
    dispatch(toggleTrue())
  }

  return (
    
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://t3.ftcdn.net/jpg/05/17/79/88/240_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
        />
        <Card.Header> Name : {contact.name}  </Card.Header>
        <Card.Meta>Email : {contact.email}   </Card.Meta>
        <Card.Description>
          Phone : <strong>216</strong> {contact.phone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to="/edit">
          <Button basic color="green" onClick={()=>{oneContact(contact._id) ; editTrue()} }>
            Edit
          </Button>
          </Link>
          <Button basic color="red" onClick={()=>delContact(contact._id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
