import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import { toast } from "react-toastify";
import {axiosBack} from "../config/axios";
import { useEffect, useState } from "react";
import useGet from '../hooks/useGet';
import { BsPersonPlusFill } from 'react-icons/bs';
import GeneralModal from "../components/GeneralModal/GeneralModal";
import AddUserForm from "../components/AddUserForm/AddUserForm";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";
import { ERROR_MESSAGE } from "../components/constants";
import EditUserForm from "../components/EditUserForm/EditUserForm";

const AdminPage = () => {
  
    const [users, loading, getUsers] = useGet('/users',axiosBack);
    const [selected, setSelected] = useState(null);

    const deleteFuntion = async() => {
        try {
            await axiosBack.delete('/users/'+selected);
            getUsers();
        } catch (error) {
            toast.error(ERROR_MESSAGE);
        }
    }

    return ( 
        <Container className="text-center">
        <h1>Página de administración</h1>
        <Row className="my-3">
            <Col className="d-flex justify-content-end">
                <GeneralModal buttonText='Añadir' variant="success" modalTitle='Añadir usuario' modalBody={<AddUserForm getUsers={getUsers}/>}/>
                <GeneralModal buttonText='Eliminar' variant="danger" modalTitle='Eliminar usuario' modalBody={<DeleteConfirmation deleteFuntion={deleteFuntion}/>}/>
                <GeneralModal buttonText='Editar' variant="warning" modalTitle='Editar usuario' modalBody={<EditUserForm selected={selected} getUsers={getUsers}/>}/>
            </Col>
        </Row>
        <Row>
            <Col>
            {loading?
            <Spinner/>
            :
            <GeneralTable headings={['id','Name','Role']} items={users} selected={selected} setSelected={setSelected}/>
            }    
            </Col>
        </Row>
        </Container>
     );
}
 
export default AdminPage;