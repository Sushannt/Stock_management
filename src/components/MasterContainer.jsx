import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { MasterContext } from "../context/MasterContext";

// import ModalContainer from "./ModalContainer";

const MasterContainer = ({ children, text }) => {
  const {
    // methods for edit, view, delete
    handleShow,
  } = useContext(MasterContext);

  return (
    <div className="container">
      <div className="crud shadow-lg border mb-5 mt-3 p-4 rounded ">
        <div className="row">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder={`Search ${text}...`}
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h5>
              <b>{text} Details</b>
            </h5>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred pl">
            <Button variant="primary" onClick={handleShow}>
              Add New {text}
            </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MasterContainer;
