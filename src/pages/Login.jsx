import { Row, Col, Container, Image } from "react-bootstrap";
import warehouseImg from "../image/vecteezy_flat-isometric-illustration-concept-warehouse-and-delivery_7885573.jpg";
import keyImg from "../image/key-minimalistic-square-2-svgrepo-com.svg";
import nagarNigam from "../image/nagar-nigam.jpg";

// components
import FormComponent from "../components/FormComponent";

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
            className="d-flex flex-column  align-items-center align-items-md-start my-auto"
          >
            <div className="shadow-lg px-4 px-md-3  py-5  border border-subtle-dark rounded-2 d-flex flex-column align-items-center">
              <Image
                src={keyImg}
                width={40}
                style={{
                  marginBottom: "3rem",
                  color: "black",
                  alignSelf: "flex-start",
                }}
              />
              <Image src={nagarNigam} fluid className="w-25" />
              <h1 className="mb-xs-3 mb-md-5 mt-2">Login</h1>
              <FormComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
