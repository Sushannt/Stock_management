import { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ADD_ROLE, GET_ROLES, UPDATE_ROLE } from "../../constants";
import axios from "axios";
import { FormContext } from "../../context/FormContext";

const Role = () => {
  const { userInfo } = useContext(FormContext);

  // const token = localStorage.getItem("token");
  const token = userInfo?.result?.token;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //getting roles from the api
  useEffect(() => {
    const getRoles = async () => {
      try {
        const { data: response } = await axios.get(GET_ROLES, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlRlc3RfVXNlcjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0ZXN0MkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxMDEzNjc3NywiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.9Wy45JEuXHYlvF7dThp5uhIJGcrspcP27103x5H_ubk`,
          },
        });

        setData(response.result);
      } catch (error) {
        toast.error("Error fetching roles");
        console.log(error);
      }
    };

    getRoles();
  }, [token, data]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADD_ROLE,
        {
          roleName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData([...data, response.data]);
      console.log(response);
      toast.success("Role saved successfully");
      setShow(false);
    } catch (error) {
      console.error("Error saving role:", error);
      toast.error("Error saving role");
    }
  };

  const handleView = (id) => {
    const role = data.find((item) => item.id === id);
    if (role) {
      setId(id);
      setRoleName(role.name);
      setIsReadOnly(true);
      setIsUpdate(false);
      handleShow();
    }
  };

  const handleEdit = (id) => {
    const role = data.find((item) => item.id === id);
    if (role) {
      setId(id);
      setRoleName(role.name);
      setIsReadOnly(false);
      setIsUpdate(true);
      handleShow();
    }
  };

  const handelUpdate = async (id) => {
    try {
      const { data } = await axios.post({ id, roleName }, UPDATE_ROLE, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlRlc3RfVXNlcjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0ZXN0MkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxMDEzNjc3NywiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.9Wy45JEuXHYlvF7dThp5uhIJGcrspcP27103x5H_ubk`,
        },
      });
      console.log(data);
    } catch (error) {
      toast.error("Error Updating Role");
      console.log(error);
    }
  };

  const handelDelete = async (id) => {};

  return (
    <div className="container" style={{ zIndex: 0 }}>
      <div className="crud shadow-lg border mb-5 mt-3 p-4 rounded ">
        <div className="row">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Role.."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Role Details</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred pl">
            <Button variant="primary" onClick={handleShow}>
              Add New Role
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th>Sl.</th>
                  <th>Role Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name} </td>
                      <td className="d-flex justify-content-around align-items-center">
                        <Link
                          to="#"
                          className="view"
                          title="View"
                          data-toggle="tooltip"
                          style={{ color: "#10ab80" }}
                          onClick={() => handleView(item.id)}
                        >
                          <i className="material-icons">&#xE417;</i>
                        </Link>
                        {/* &nbsp; */}
                        <Link
                          to="#"
                          className="edit"
                          title="Edit"
                          data-toggle="tooltip"
                          onClick={() => handleEdit(item.id)}
                        >
                          <i className="material-icons">&#xE254;</i>
                        </Link>
                        {/* &nbsp; */}
                        <Link
                          to="#"
                          className="delete"
                          title="Delete"
                          data-toggle="tooltip"
                          onClick={() => handelDelete(item.id)}
                          style={{ color: "red" }}
                        >
                          <i className="material-icons">&#xE872;</i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              {!isUpdate ? (
                <Modal.Title>
                  {isReadOnly ? "Role Details" : "Create Role"}
                </Modal.Title>
              ) : (
                <Modal.Title>Edit Role</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="row">
                  <div className="col">
                    <label htmlFor="role" className="form-label">
                      Role Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Role Name"
                      onChange={(e) => setRoleName(e.target.value)}
                      value={roleName}
                      readOnly={isReadOnly}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              {!isReadOnly && (
                <>
                  {!isUpdate ? (
                    <Button variant="success" onClick={(e) => handleSave(e)}>
                      Save Role
                    </Button>
                  ) : (
                    <Button variant="success" onClick={() => handelUpdate(id)}>
                      Update Role
                    </Button>
                  )}
                </>
              )}
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
};

export default Role;
