import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ADD_USER_VALUES } from "../constants";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import useForm from "../../hooks/useForm";

const AddUserForm = ({handleClose, getUsers}) => {

    const addUser = async() => {
        try {
            const userCreated = await axiosBack.post('/users',values);
            getUsers();
            if(userCreated){
                toast.done("Usuario creado con exito");
            }
        } catch (error) {
            toast.error("No pudimos enviar los datos a la base.")
        }
    }
    
    const {values, handleChange, handleSubmit} = useForm(ADD_USER_VALUES, addUser)
  
    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="idUser">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Id de usuario" onChange={handleChange} value={values.id} name="id"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nameUser">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Nombre del usuario" onChange={handleChange} value={values.name} name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="roleUser">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="Rol del usuario" onChange={handleChange} value={values.role} name="role"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
                Aceptar
            </Button>
        </Form>
    );
}

export default AddUserForm;