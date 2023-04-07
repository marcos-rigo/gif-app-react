import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ADD_USER_VALUES } from "../constants";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";

const EditUserForm = ({handleClose, getUsers, selected}) => {
    const [values, setValues] = useState(ADD_USER_VALUES);
    const handleChange = (e) => {
        setValues(
            {...values,
            [e.target.name] : e.target.value}
        )
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const userCreated = await axiosBack.put('/users/'+selected,values);
            getUsers();
            if(userCreated){
                toast.done("Usuario editado con exito");
            }
        } catch (error) {
            toast.error("No pudimos enviar los datos a la base.")
        }
    }

    const getUserInfo = async() => {
        try {
            const {data} = await axiosBack.get('/users/'+selected);
            setValues(data);
        } catch (error) {
            toast.error(ERROR_MESSAGE);
        }
    }

    useEffect(()=>{
        getUserInfo();
    },[])

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
                Editar
            </Button>
        </Form>
     );
}
 
export default EditUserForm;