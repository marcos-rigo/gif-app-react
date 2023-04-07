import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import SideBar from "../components/SideBar/SideBar";
import Results from "../components/Results/Results";
import {axiosInstance} from "../config/axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const GifPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


    const doSearch = async () => {
        try {
            const { data } = await axiosInstance.get(`/gifs/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}`);
            setResults(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        doSearch()
    }, [search])

    return (
        
        <Container fluid>
            <Row>
                <Col xs={12} sm={4} className='bg-success layout'>
                    <SideBar search={search} setSearch={setSearch} />
                </Col>
                <Col xs={12} sm={8} className='bg-warning layout'>
                    <Results results={results} loading={loading} setLoading={setLoading} />
                </Col>
            </Row>
            <ToastContainer />
        </Container>
        
    );
}

export default GifPage;