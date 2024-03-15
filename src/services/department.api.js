import axios from "axios";
import { GET_DEPARTMENT, CREATE_DEPARTMENT } from "../constants";

const errMessage = {
  401: "Not authorized to access the resource",
  403: "Forbidden access",
  404: "Resource not found",
};

export const fetchDepartments = async (token) => {
  try {
    const { data: response } = await axios.get(GET_DEPARTMENT, {
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
        errMessage[error.response.status] || "Failed to get department"
      );
    } else {
      throw error;
    }
  }
};

export const addNewDepartment = async (
  token,
  userName,
  departmentName,
  description
) => {
  try {
    const response = await axios.post(
      CREATE_DEPARTMENT,
      {
        departmentName,
        description,
        createdBy: userName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === "400") {
      return {
        message: response["Department Name"] || response.errorMessage,
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
