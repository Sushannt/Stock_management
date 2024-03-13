import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

//form validation
import loginSchema from "../helper/formValidation";

import axios from "axios";
import { LOGIN_URL } from "../constants";

const LoginForm = () => {
  let { auth, login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // if userInfo is there in context, user will get redirected to dashboard
  useEffect(() => {
    console.log("auth after login", auth);
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: userData } = await axios.post(LOGIN_URL, data);
      if (userData?.isSuccess) {
        login({ ...userData });
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
    <Form>
      <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Username</Form.Label>
        <Form.Control
          {...register("username")}
          type="text"
          size="md"
          placeholder="username"
          className="border border-dark-subtle"
        />
      </Form.Group>
      <Form.Group className="my-4" controlId="exampleForm.ControlInput2">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          {...register("password")}
          type="password"
          size="md"
          placeholder="password"
          className="border border-dark-subtle"
        />
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        className="w-100 mt-3 pb-2"
        size="md"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? <Spinner animation="border" /> : "Log In"}
      </Button>
    </Form>
  );
};

export default LoginForm;
