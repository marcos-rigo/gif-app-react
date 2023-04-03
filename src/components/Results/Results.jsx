import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GifCard from "../GifCard/GifCard";
import { Spinner } from "react-bootstrap";


const Results = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const getGif = async()=>{
        try {
            const {data} = await axiosInstance.get('/trending?api_key='+import.meta.env.VITE_APP_GIPHY_API_KEY);
            setResults(data.data);
            setLoading(false);
        } catch (error) {
            toast.error("Error en la conexión");
        }
    }

    useEffect(()=>{
        getGif();
    },[]);

    console.log(results);
    return ( 
        <>
        {loading?
        <div className="centered-object">
        <Spinner animation="border" variant="primary" />
        </div>
        :
        <div className="d-flex flex-wrap">
        {results.map((result,index)=><GifCard key={index} image={result.images.original.url} title={result.title}/>)}
        </div>
        }
        <ToastContainer/>
        </>
     );
}
 
export default Results;