import { createContext, useState } from "react";

export const MasterContext = createContext();

export const MasterContextProvider = ({ children }) => {
  //   const [roleName, setRoleName] = useState(""); //specific to role master
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MasterContext.Provider
      value={{
        //state variables
        data,
        setData,
        id,
        setId,
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
