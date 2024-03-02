import * as yup from "yup";

const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default loginSchema;
