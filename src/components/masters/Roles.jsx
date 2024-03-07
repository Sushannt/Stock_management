import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
// import MasterContainer from "../MasterContainer";
import toast from "react-hot-toast";
import axios from "axios";
import { MasterContext } from "../../context/MasterContext";
// import { Modal, Button } from "react-bootstrap";
import { GET_ROLES, ADD_ROLE, UPDATE_ROLE } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import MasterContainer from "../MasterContainer";

<<<<<<< HEAD
const Roles = () => {
  const { userInfo } = useContext(AuthContext);
  const token = userInfo?.result?.token;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [roleName, setRoleName] = useState("");

<<<<<<< HEAD
  const { setIsUpdate, setIsReadOnly, setShow, handleShow } =
    useContext(MasterContext);
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [isReadOnly, setIsReadOnly] = useState(false);
  // const [roleName, setRoleName] = useState("");
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
=======
  const [roleName, setRoleName] = useState(""); //specific to role
=======
const Role = () => {
  const { userInfo } = useContext(FormContext);
  const token = userInfo?.result?.token;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
>>>>>>> 57fc5b30f859822234b8adc0badd3e43d1f26416
>>>>>>> 346aea38eafef1832b2ddf3f44236fd25fd1f1c9

  //getting roles from the api
  useEffect(() => {
    const getRoles = async () => {
      try {
        const { data: response } = await axios.get(GET_ROLES, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.result);
      } catch (error) {
        toast.error("Error fetching roles");
        console.error(error);
      }
    };

    getRoles();
  }, [token, data, setData]);

<<<<<<< HEAD
=======

>>>>>>> 346aea38eafef1832b2ddf3f44236fd25fd1f1c9
  //create role
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
            Authorization: `Bearer ${process.env.REACT_APP_AUTHTOKEN}`,
          },
        }
      );
      setData([...data, response.data.result.roleName]);
      console.log("response...", response.data.result.roleName);
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

  //update role

  const handelUpdate = async () => {
    try {
      const response = await axios.post(
        UPDATE_ROLE,
<<<<<<< HEAD
        { roleId: id, roleName },
=======
        { roleId:id, roleName },
>>>>>>> 346aea38eafef1832b2ddf3f44236fd25fd1f1c9
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHTOKEN}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Role updated successfully");
      setShow(false);
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Error updating role");
    }
  };

  const handelDelete = async (id) => {};

  return (
<<<<<<< HEAD
    <MasterContainer
      text={"Role"}
      handelUpdate={handelUpdate}
      handleSave={handleSave}
      state={roleName}
      setState={setRoleName}
    >
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
                <td className="d-flex justify-content-center align-items-center">
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
                  <Link
                    to="#"
                    className="edit"
                    title="Edit"
                    data-toggle="tooltip"
                    onClick={() => handleEdit(item.id)}
                  >
                    <i className="material-icons">&#xE254;</i>
                  </Link>
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
    </MasterContainer>
=======
    <div className="container-sm" style={{ zIndex: 0 }}>
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
            style={{ color: "green"}}
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
                      <td className="d-flex justify-content-center align-items-center">
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
                        <Link
                          to="#"
                          className="edit"
                          title="Edit"
                          data-toggle="tooltip"
                          onClick={() => handleEdit(item.id)}
                        >
                          <i className="material-icons">&#xE254;</i>
                        </Link>
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
>>>>>>> 57fc5b30f859822234b8adc0badd3e43d1f26416
  );
};

export default Roles;
