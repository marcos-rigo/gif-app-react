import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h1>Esta es la página de Error</h1>
            
            <Link to="/gifs">Volver al Inicio</Link>
        </div>
     );
}
 
export default ErrorPage;