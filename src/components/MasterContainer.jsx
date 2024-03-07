import { Button, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { MasterContext } from "../context/MasterContext";

const MasterContainer = ({
  children,
  text,
  //   handleView,
  //   handleEdit,
  //   handelDelete,

  //modal needs this
  state,
  setState,
  //modal methods
  handleSave,
  handelUpdate,
}) => {
  const {
    //state variables
    // data,
    isUpdate,
    isReadOnly,
    show,
    // methods for edit, view, delete
    handleShow,
    handleClose,
  } = useContext(MasterContext);

  const handleOnChange = (e) => {
    setState(e.target.value);
  };
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
              <b>{text} Details</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred pl">
            <Button variant="primary" onClick={handleShow}>
              Add New {text}
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">{children}</div>
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
                <Modal.Title>Edit {text}</Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="row">
                  <div className="col">
                    <label htmlFor={text} className="form-label">
                      {text} Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Enter ${text} name`}
                      onChange={handleOnChange}
                      value={state}
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
                    <Button variant="success" onClick={handleSave}>
                      Save {text}
                    </Button>
                  ) : (
                    <Button variant="success" onClick={handelUpdate}>
                      Update {text}
                    </Button>
                  )}
                </>
              )}
            </Modal.Footer>
          </Modal>

          {/* Model Box Finish */}
        </div>
      </div>
    </div>
  );
};

export default MasterContainer;
