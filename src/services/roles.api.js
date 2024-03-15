import axios from "axios";

import { GET_ROLES, ADD_ROLE, UPDATE_ROLE, DELETE_ROLE } from "../constants";

const errMessage = {
  401: "Not authorized to access the resource",
  403: "Forbidden access",
  404: "Resource not found",
};

export const fetchRoles = async (token) => {
  try {
    const { data: response } = await axios.get(GET_ROLES, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.isSuccess) {
      return response.result;
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status &&
      errMessage[error.response.status]
    ) {
      throw new Error(
        errMessage[error.response.status] || "Failed to get roles"
      );
    } else {
      throw error;
    }
  }
};

export const addNewRole = async (token, roleName) => {
  try {
    const { data: response } = await axios.post(
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

    if (response.status === "400") {
      return {
        message: response["role"] || response.errorMessage,
      };
    }

    if (response.isSuccess) {
      return response.result;
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status &&
      errMessage[error.response.status]
    ) {
      throw new Error(
        errMessage[error.response.status] || "Failed to add new role"
      );
    } else {
      throw error;
    }
  }
};

export const updateRole = async (token, id, roleName) => {
  try {
    const { data: response } = await axios.post(
      UPDATE_ROLE,
      { roleId: id, roleName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === "400") {
      return {
        message: response["role"] || response.errorMessage,
      };
    }

    if (response.isSuccess) {
      return response.result;
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status &&
      errMessage[error.response.status]
    ) {
      throw new Error(
        errMessage[error.response.status] || "Failed to update selected role"
      );
    } else {
      throw error;
    }
  }
};

export const deleteRole = async (token, id, name) => {
  try {
    const { data: response } = await axios.post(
      DELETE_ROLE,
      {
        roleId: id,
        roleName: name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.isSuccess) {
      return response.result;
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status &&
      errMessage[error.response.status]
    ) {
      throw new Error(
        errMessage[error.response.status] || "Failed to delete selected role"
      );
    } else {
      throw error;
    }
  }
};
