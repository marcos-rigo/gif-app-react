import { Spinner } from "react-bootstrap";
import useGet from "../hooks/useGet";
import GifCard from "../components/GifCard/GifCard";
import { axiosInstance } from "../config/axios";

const StickerPage = () => {
    const [stickers, loading] = useGet('/stickers/trending?api_key='+import.meta.env.VITE_APP_GIPHY_API_KEY,axiosInstance);
    return ( 
        <>
        {
        loading?
        <div className="centered-object">
        <Spinner animation="border" variant="primary" />
        </div>
        :
        stickers.map((sticker,index)=><GifCard key={index} image={sticker.images.original.url} title={sticker.title}/>)
        }
        </> 
     );
}
 
export default StickerPage;