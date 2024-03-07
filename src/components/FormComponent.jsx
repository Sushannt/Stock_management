import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

//form validation
import loginSchema from "../helper/formValidation";

import axios from "axios";
import { LOGIN_URL } from "../constants";

const FormComponent = () => {
  const { setUserInfo } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // const setTokenInLocalStorage = (token) => {
  //   localStorage.setItem("token", token);
  // };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setIsLoading(true);
      const { data: userData } = await axios.post(LOGIN_URL, data);
      // console.log(userData);
      // const token = userData.result.token;
      // setTokenInLocalStorage(token); // Call the function to set the token in localStorage
      // console.log("Login successful. Token saved in localStorage:", token);

      if (userData?.isSuccess) {
        setUserInfo(userData);
        navigate("/dashboard");
      } else {
        toast.error(userData?.errorMessage);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form as={Col} className="col-xs-12 col-md-8">
      <Form.Group className="my-3 w-100" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Username</Form.Label>
        <Form.Control
          {...register("username")}
          type="text"
          size="lg"
          placeholder="username"
          className="border border-dark-subtle"
        />
      </Form.Group>
      <Form.Group className="my-3 w-100" controlId="exampleForm.ControlInput2">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          {...register("password")}
          type="password"
          size="lg"
          placeholder="password"
          className="border border-dark-subtle"
        />
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        className="w-100 mt-4 py-2"
        size="lg"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? <Spinner animation="border" /> : "Log In"}
      </Button>
    </Form>
  );
};

export default FormComponent;
