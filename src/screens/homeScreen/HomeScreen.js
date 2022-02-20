import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import { Col, Container, Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
