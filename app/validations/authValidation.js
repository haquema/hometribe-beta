import * as yup from "yup";

export const userSignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(), 
})

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
})