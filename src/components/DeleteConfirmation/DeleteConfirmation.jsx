import { Button } from "react-bootstrap";

const DeleteConfirmation = ({handleClose, deleteFuntion}) => {

    const handleDelete = () => {
        deleteFuntion();
        handleClose();
    }

    return ( 
        <>
        <h5>¿Estás seguro que deseas eliminar este elemento?</h5>
        <div className="text-center">
        <Button variant="danger" className="me-3" onClick={handleDelete}>Aceptar</Button>
        <Button onClick={handleClose}>Cancelar</Button>
        </div>
        </>
     );
}
 
export default DeleteConfirmation;