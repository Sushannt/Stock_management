import MasterContainer from "../MasterContainer";
import { Link } from "react-router-dom";

const Department = () => {
  const data = [
    {
      name: "department1",
    },
    {
      name: "department2",
    },
    {
      name: "department3",
    },
    {
      name: "department4",
    },
    {
      name: "department5",
    },
  ];

  return (
    <MasterContainer
      text={"Department"}
      //   handelUpdate={handelUpdate}
      //   handleSave={handleSave}
      //   state={roleName}
      //   setState={setRoleName}
    >
      <table className="table table-striped table-hover table-bordered text-center">
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Role Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name} </td>
                <td>{item.description}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <Link
                    to="#"
                    className="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                    // onClick={() => handleView(item.id)}
                  >
                    <i className="material-icons">&#xE417;</i>
                  </Link>
                  <Link
                    to="#"
                    className="edit"
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
                    // onClick={() => handelDelete(item.id, item.name)}
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

export default Department;
