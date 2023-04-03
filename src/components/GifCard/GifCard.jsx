import {Card} from "react-bootstrap";

const GifCard = ({image, title}) => {
    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
     );
}
 
export default GifCard;