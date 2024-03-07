import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import MasterContainer from "../MasterContainer";
import toast from "react-hot-toast";
import axios from "axios";
import { MasterContext } from "../../context/MasterContext";
import { GET_ROLES, ADD_ROLE, UPDATE_ROLE } from "../../constants";

const Roles = () => {
  const {
    //state variables
    data,
    setData,
    setId,
    setIsUpdate,
    setIsReadOnly,
    setShow,

    // methods for edit, view, delete
    handleShow,
  } = useContext(MasterContext);
  const token = process.env.REACT_APP_AUTHTOKEN;

  const [roleName, setRoleName] = useState(""); //specific to role

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
          Authorization: `Bearer ${process.env.REACT_APP_AUTHTOKEN}`,
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
    <MasterContainer
      text={"Role"}
      state={roleName}
      setState={setRoleName}
      handelUpdate={handelUpdate}
      handleSave={handleSave}
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
    </MasterContainer>
  );
};

export default Roles;
