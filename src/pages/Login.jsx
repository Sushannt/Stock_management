import { Row, Col, Container, Image } from "react-bootstrap";
// import warehouseImg from "../image/vecteezy_flat-isometric-illustration-concept-warehouse-and-delivery_7885573.jpg";
import nagarPalika from "../image/nagar-nigam.jpg";
import keyImg from "../image/key-minimalistic-square-2-svgrepo-com.svg";
import nagarNigamtext from "../image/nagarpalika.png";
// import bgm from "../image/map-nagar-palika.jpg";
// components
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section>
      <Container fluid>
        <Row
          style={{
            minHeight: "100vh",
          }}
        >
          <Col
            xs={12}
            md={7}
            className="d-none d-md-flex flex-column  align-items-center justify-content-center"
            // style={{
            //   backgroundImage: `url(${bgm})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "bottom",
            //   backgroundSize: "contain",
            // }}
          >
            <Image src={nagarPalika} fluid className="h-50" rounded />
            {/* <Row>
              <Col className="py-4">
                <h1>By UP Government</h1>
              </Col>
            </Row> */}
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
                src={nagarNigamtext}
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
