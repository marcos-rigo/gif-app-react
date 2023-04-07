import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
    const {detailid} = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/gifs");
    }

    return ( 
        <>
        <h1>{detailid}</h1>
        <button onClick={handleClick}>Ir a la pagina de Gifs</button>
        </>
     );
}
 
export default DetailsPage;