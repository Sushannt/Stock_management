import { Row, Col, Container, Image } from "react-bootstrap";
import warehouseImg from "../image/vecteezy_flat-isometric-illustration-concept-warehouse-and-delivery_7885573.jpg";
import keyImg from "../image/key-minimalistic-square-2-svgrepo-com.svg";
import nagarNigam from "../image/nagarpalika.png";
// components
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section>
      <Container fluid>
        <Row style={{ minHeight: "100vh" }}>
          <Col xs={12} md={7} className="d-none d-md-flex align-items-center">
            <Image src={warehouseImg} fluid className="h-100" rounded />
          </Col>
          <Col
            xs={12}
            md={5}
            className="d-flex flex-column  align-items-center align-items-md-start justify-content-center"
          >
            <div className="shadow-lg px-4 px-md-3  pt-2 pb-5  border border-subtle-dark rounded-2 d-flex flex-column w-75">
              <Image
                src={keyImg}
                width={30}
                style={{
                  marginBottom: "4rem",
                  color: "black",
                  alignSelf: "flex-start",
                }}
              />
              <Image
                src={nagarNigam}
                fluid
                className="w-75 align-self-center "
              />
              <h1 className="mb-xs-3 mb-md-3 mt-2 text-center">Login</h1>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
