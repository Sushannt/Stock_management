import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MasterContext } from "../../context/MasterContext";
import { EDIT_DEPARTMENT, DELETE_DEPARTMENT } from "../../constants";
import { AuthContext } from "../../context/AuthProvider";
import MasterContainer from "../../components/MasterContainer";
import ModalContainer from "../../components/ModalContainer";
import {
  addNewDepartment,
  fetchDepartments,
} from "../../services/department.api";

const Department = () => {
  const { auth } = useContext(AuthContext);
  const { token, userName } = auth?.result;

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
        const departments = await fetchDepartments(token);
        setData(departments);
      } catch (error) {
        toast.error(error?.message || "Something went wrong, please try again");
      }
    };

    getDepartment();
  }, [token]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await addNewDepartment(token, userName, departmentName, description);
      const departments = await fetchDepartments(token);
      setData(departments);
      setShow(false);
      toast.success("Successfully created new department");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong, please try again");
    }
  };

  const handelUpdate = async () => {
    try {
      const { data: response } = await axios.post(
        EDIT_DEPARTMENT,
        {
          deparmentId: id,
          departmentName,
          description,
          updatedBy: userName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.isSuccess) {
        toast.success(response?.result?.message);
        const departments = await fetchDepartments(token);
        setData(departments);
        setShow(false);
      } else {
        console.error(response);
        toast.error(response?.result?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || error?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        DELETE_DEPARTMENT,
        {
          deparmentId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.isSuccess) {
        toast.success(response.result.message);
      }
    } catch (error) {
      toast.error(error.message || error.data.message);
      console.error(error);
    }
  };

  const handleView = (id) => {
    const desc = data.find((item) => item.deparmentId === id);
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
    const desc = data.find((item) => item.deparmentId === id);
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
                        onClick={() => handleView(item.deparmentId)}
                      >
                        <i className="material-icons">&#xE417;</i>
                      </Link>
                      <Link
                        to="#"
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => handleEdit(item.deparmentId)}
                      >
                        <i className="material-icons">&#xE254;</i>
                      </Link>
                      <Link
                        to="#"
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                        onClick={() => handleDelete(item.deparmentId)}
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
                  placeholder={`Enter Department name`}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  name="departmentName"
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
                  name="description"
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

export default Department;
