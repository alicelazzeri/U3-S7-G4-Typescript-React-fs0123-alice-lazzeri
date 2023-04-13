import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../interfaces/iNews";

const Detail = () => {
  const params = useParams();
  const [news, setNews] = useState<News | null>(null);
  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="my-5 d-flex flex-column justify-content-center align-items-center text-center">
      {news && (
        <>
          <img src={news.imageUrl} width={800} className="img-fluid mt-5 rounded-3" alt="Article pic" />
          <h1 className="fw-normal mt-5">{news.title}</h1>
          <h4 className="fw-light">{news.newsSite}</h4>

          <p className="fw-light fs-6">
            <em>{news.summary}</em>
          </p>
          <p className="fw-light">
            <small>Available at: {news.url}</small>
          </p>
        </>
      )}
    </Container>
  );
};

export default Detail;
