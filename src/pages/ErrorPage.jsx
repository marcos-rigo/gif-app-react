import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
    const location = useLocation();
    console.log(location);
    return ( 
        <div>
            <h1>Esta es la página de Error</h1>
            
            <Link to="/gifs">Volver al Inicio</Link>
        </div>
     );
}
 
export default ErrorPage;