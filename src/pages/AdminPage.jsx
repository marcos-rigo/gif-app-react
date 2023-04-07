import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import { toast } from "react-toastify";
import {axiosBack} from "../config/axios";
import { useEffect, useState } from "react";
import useGet from '../hooks/useGet';
import { BsPersonPlusFill } from 'react-icons/bs';
import GeneralModal from "../components/GeneralModal/GeneralModal";
import AddUserForm from "../components/AddUserForm/AddUserForm";

const AdminPage = () => {
  
    const [users, loading, getUsers] = useGet('/users',axiosBack);
    return ( 
        <Container>
        <h1>Página de administración</h1>
        <Row>
            <Col className="d-flex justify-content-end">
                <GeneralModal buttonText='Añadir' modalTitle='Añadir usuario' modalBody={<AddUserForm getUsers={getUsers}/>}/>
            </Col>
        </Row>
        <Row>
            <Col>
            {loading?
            <Spinner/>
            :
            <GeneralTable headings={['id','Name','Role']} items={users}/>
            }    
            </Col>
        </Row>
        </Container>
     );
}
 
export default AdminPage;