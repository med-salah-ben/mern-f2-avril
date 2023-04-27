import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./FormComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { editContact, postContact } from "../../JS/actions/contact";
import { Link } from "react-router-dom";

const FormComponent = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const userReducer = useSelector((state) => state.contactReducer.user);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  console.log("user : ", user);
  useEffect(() => {
    edit ? setUser(userReducer) : setUser({ name: "", email: "", phone: "" });
  }, [userReducer, edit]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleContact = (e) => {
    // e.preventDefault()
    if (!edit) {
      dispatch(postContact(user))
    }else{
      dispatch(editContact(userReducer._id , user))
    }
  };

  return (
    <Form className="form-component">
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Enter Name"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Enter Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input
          placeholder="Enter Phone Number"
          value={user.phone}
          name="phone"
          onChange={handleChange}
        />
      </Form.Field>
      <Link to="/">
        <Button onClick={handleContact}>
           {edit ? "Edit Contact" : "Add Contact"} 
        </Button>
      </Link>
    </Form>
  );
};

export default FormComponent;
