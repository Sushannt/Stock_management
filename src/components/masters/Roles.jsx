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

const Roles = () => {
  const { userInfo } = useContext(AuthContext);
  const token = userInfo?.result?.token;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [roleName, setRoleName] = useState("");

  const { setIsUpdate, setIsReadOnly, setShow, handleShow } =
    useContext(MasterContext);
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [isReadOnly, setIsReadOnly] = useState(false);
  // const [roleName, setRoleName] = useState("");
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
        { roleId: id, roleName },
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
  );
};

export default Roles;
