import React, { useState } from "react";
// import MasterContainer from "../MasterContainer";
// import ModalContainer from "../ModalContainer";
import { Link } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Table,
  Dropdown,
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const Receive = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(["item1", "item2", "item3", "item4"]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container fluid className="mt-4 p-4">
      <Row>
        <Col>
          <Form>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              value={startDate}
            />
            <Form.Control
              type="search"
              placeholder="Search Item..."
              className="my-2"
              value={searchTerm}
              onChange={(e) => e.target.value}
            />
          </Form>
        </Col>
        <Col className="text-center">
          <h3>Receive</h3>
        </Col>
        <Col className="text-end">
          <Button variant="primary">Add New Receive</Button>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Table responsive className="w-100">
          <thead>
            <tr>
              <th>Receive Date</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Received from</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light">Active</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Active</Dropdown.Item>
                      <Dropdown.Item>Pending</Dropdown.Item>
                      <Dropdown.Item>Fulfilled</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>
                  <Link
                    to="#"
                    className="view pe-2 "
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                    // onClick={() => handleView(item.id)}
                  >
                    <i className="material-icons">&#xE417;</i>
                  </Link>
                  <Link
                    to="#"
                    className="edit  pe-2 "
                    title="Edit"
                    data-toggle="tooltip"
                    // onClick={() => handleEdit(item.id)}
                  >
                    <i className="material-icons">&#xE254;</i>
                  </Link>
                  <Link
                    to="#"
                    className="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    // onClick={() => handleDelete(item.id, item.name)}
                    style={{ color: "red" }}
                  >
                    <i className="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Receive;
