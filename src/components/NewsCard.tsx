import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/iNews";

const NewsCard = ({ imageUrl, title, newsSite, id }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card id="card">
      <Card.Img id="cardImg" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-truncate fs-6">{title}</Card.Title>
        <Card.Text className="fw-light">
          <small>{newsSite}</small>
        </Card.Text>
        <Button onClick={() => navigate(`/detail/${id}`)} variant="outline-secondary">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
