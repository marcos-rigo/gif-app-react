import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const items = [
        { key: 1, path: '/gifs', name: 'Gifs' },
        { key: 2, path: '/admin', name: 'Administración' },
        { key: 3, path: '/stickers', name: 'Stickers' },
        { key: 4, path: 'details', name: 'Detalles' },
    ]
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Gif-App-React</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            user.role == "admin" ?
                                items.map(item => <Link key={item.key} className="nav-link" to={item.path}>{item.name}</Link>)
                                :
                                items.map(item => {
                                    if (item.path != '/admin') {
                                        return <Link key={item.key} className="nav-link" to={item.path}>{item.name}</Link>
                                    }
                                })
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;