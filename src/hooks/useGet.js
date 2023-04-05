import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import axiosInstance from "../config/axios";

const useGet = (url) => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async()=>{
        try {
            const {data} = await axiosInstance.get(url);
            setState(data.data);
            setLoading(false);
        } catch (error) {
            toast.error("Error en la conexión");
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return [state, loading]
}

export default useGet;