import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div
      className="d-flex align-items-center bg-tertiary"
      style={{ height: "100vh" }}
    >
      <Container fluid>
        <Row className="text-center h-100">
          <Col lg={12}>
            <h1 style={{ fontSize: "15rem" }}>404 </h1>
          </Col>
          <Col lg={12}>
            <h1 className="display-3">Page Not Found</h1>
          </Col>
          <Col lg={12}>
            <Link to={"/dashboard"}>
              <Button variant="secondary" size="lg">
                Back to Dashboard
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
