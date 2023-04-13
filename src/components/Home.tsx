import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { News } from "../interfaces/iNews";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setNews(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <Container>
      <Row xs={2} md={4} lg={5} className="mt-5 gap-5">
        {news.map(n => (
          <Col key={n.id}>
            <NewsCard imageUrl={n.imageUrl} title={n.title} newsSite={n.newsSite} id={n.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
