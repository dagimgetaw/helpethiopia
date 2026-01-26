import * as yup from "yup";

const fullNameRules = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const messageRules = /^[a-zA-Z0-9\s\-&,'".?]+$/;

export const contact_schema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .matches(fullNameRules, "Please enter your full name (e.g., Abebe Kebede)")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(
      emailRegex,
      "Please enter a valid email address (e.g., example@domain.com)"
    )
    .required("Email is required"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(2, "Message must be at least 2 characters")
    .max(200, "Message must be less than 200 characters")
    .matches(
      messageRules,
      "Only letters, numbers, spaces, and basic punctuation are allowed"
    ),
});
