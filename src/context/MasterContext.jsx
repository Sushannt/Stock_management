import { createContext, useState } from "react";

export const MasterContext = createContext();

export const MasterContextProvider = ({ children }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MasterContext.Provider
      value={{
        //state variables
        isUpdate,
        setIsUpdate,
        isReadOnly,
        setIsReadOnly,
        show,
        setShow,

        // methods for edit, view, delete
        handleShow,
        handleClose,
      }}
    >
      {children}
    </MasterContext.Provider>
  );
};
