import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/iNews";

const NewsCard = ({ imageUrl, title, newsSite, id }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{newsSite}</Card.Text>
        <Button onClick={() => navigate(`/detail/${id}`)} variant="outline-secondary">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
