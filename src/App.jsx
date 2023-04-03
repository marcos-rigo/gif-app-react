
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from './components/SideBar/SideBar'
import Results from './components/Results/Results'

function App() {

  return (
    
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} className='bg-success layout'>
          <SideBar/>
        </Col>
        <Col xs={12}sm={8} className='bg-warning layout'>
          <Results/>
        </Col>
      </Row>
    </Container>
    
  )
}

export default App
