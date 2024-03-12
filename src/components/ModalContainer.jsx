import { useContext } from "react";
import { MasterContext } from "../context/MasterContext";
import { Modal, Button } from "react-bootstrap";

const ModalContainer = ({ text, children, handelUpdate, handleSave }) => {
  const { isUpdate, isReadOnly, handleClose, show } = useContext(MasterContext);

  return (
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
              {isReadOnly ? `${text} details` : `Create ${text}`}
            </Modal.Title>
          ) : (
            <Modal.Title>Edit {text}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>

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
    </div>
  );
};

export default ModalContainer;
