import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MasterContext } from "../../context/MasterContext";
import { ADD_DEPARTMENT, GET_DEPARTMENT } from "../../constants";
import { AuthContext } from "../../context/AuthProvider";
import MasterContainer from "../MasterContainer";
import ModalContainer from "../ModalContainer";

const Roles = () => {
  const { auth } = useContext(AuthContext);
  const token = auth?.result?.token;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");

  const { setIsUpdate, setIsReadOnly, isReadOnly, setShow, handleShow } =
    useContext(MasterContext);

  //getting department from the api
  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data: response } = await axios.get(GET_DEPARTMENT, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHTOKEN}`,
          },
        });

        setData(response.result);
      } catch (error) {
        toast.error("Error fetching department");
        console.error(error);
      }
    };

    getDepartment();
  }, [token, data]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADD_DEPARTMENT,
        {
          departmentName,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHTOKEN}`,
          },
        }
      );
      setData([...data, response.data.result]);
      console.log("response...", response.data.result);
      toast.success("Department saved successfully");
      setShow(false);
    } catch (error) {
      console.error("Error in saving Department:", error);
      toast.error("Error im saving department");
    }
  };

  const handelUpdate = async () => {};

  const handleDelete = async (id, name) => {};

  const handleView = (id) => {
    const desc = data.find((item) => item.id === id);
    if (desc) {
      setId(id);
      setDepartmentName(desc.departmentName);
      setDescription(desc.description);
      setIsReadOnly(true);
      setIsUpdate(false);
      handleShow();
    }
  };

  const handleEdit = (id) => {
    const desc = data.find((item) => item.id === id);
    if (desc) {
      setId(id);
      setDepartmentName(desc.departmentName);
      setDescription(desc.description);
      setIsReadOnly(false);
      setIsUpdate(true);
      handleShow();
    }
  };

  return (
    <MasterContainer text={"Department"}>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered text-center">
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Department Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.departmentName} </td>
                    <td>{item.description} </td>

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
                        onClick={() => handleDelete(item.id, item.name)}
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
        <ModalContainer
          text={"Department"}
          handelUpdate={handelUpdate}
          handleSave={handleSave}
        >
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Department Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Enter Role name`}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  value={departmentName}
                  readOnly={isReadOnly}
                />
              </div>
              <div className="col">
                <label htmlFor="description" className="form-label">
                  Description<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Enter description`}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  readOnly={isReadOnly}
                />
              </div>
            </div>
          </form>
        </ModalContainer>
      </div>
    </MasterContainer>
  );
};

export default Roles;
