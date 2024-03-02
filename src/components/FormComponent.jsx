import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

//form validation
import loginSchema from "../helper/formValidation";

import axios from "axios";
import { LOGIN_URL } from "../constants";
import { useState } from "react";

const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(LOGIN_URL, data);
      console.log(response);
      navigate("/dashboard");
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
