import * as yup from "yup";

const nameRules = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const stripe_schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(nameRules, "Only letters are allowed")
    .required("First name is required"),
  lastName: yup
    .string()
    .trim()
    .matches(nameRules, "Only letters are allowed")
    .required("Last name is required"),
  email: yup
    .string()
    .matches(
      emailRegex,
      "Please enter a valid email address (e.g., example@domain.com)"
    )
    .required("Email is required"),
  country: yup.string().required("country is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than zero")
    .integer("Amount must be a whole number")
    .min(2, "Amount must be at least $2")
    .max(10000, "Amount cannot exceed $10,000")
    .required("Amount is required"),
});
