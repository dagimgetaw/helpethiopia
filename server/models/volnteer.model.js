import mongoose from "mongoose";

const nameRules = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ethiopianPhoneRegex = /^\+251[79]\d{8}$/;

const VolunteerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      match: [nameRules, "Only letters are allowed"],
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      match: [nameRules, "Only letters are allowed"],
    },

    gender: {
      type: String,
      required: true,
      enum: ["female", "male"],
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [emailRegex, "Invalid email address"],
    },

    birthYear: {
      type: Number,
      required: true,
      min: [1950, "Birth year must be 1950 or later"],
      max: [2015, "Birth year must be 2015 or earlier"],
    },

    phoneNumber: {
      type: String,
      required: true,
      match: [ethiopianPhoneRegex, "Please enter a valid 8-digit phone number"],
    },

    region: {
      type: String,
      required: true,
      enum: [
        "Addis Ababa",
        "Afar",
        "Amhara",
        "Benishangul-Gumuz",
        "Dire Dawa",
        "Gambela",
        "Harari",
        "Oromia",
        "Sidama",
        "Somali",
        "South West Ethiopia",
        "Southern Nations, Nationalities, and Peoples' Region (SNNPR)",
        "Tigray",
      ],
    },

    employmentStatus: {
      type: String,
      required: true,
      enum: ["Student", "Unemployed", "Employed", "Self-employed", "Retired"],
    },

    fieldOfWork: {
      type: String,
      trim: true,
      required: function () {
        return (
          this.employmentStatus === "Employed" ||
          this.employmentStatus === "Self-employed"
        );
      },
    },

    organization: {
      type: String,
      trim: true,
      required: function () {
        return (
          this.employmentStatus === "Employed" ||
          this.employmentStatus === "Self-employed"
        );
      },
    },

    interests: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one interest is required",
      },
    },

    agreement: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "You must agree to the terms",
      },
    },
  },
  { timestamps: true },
);

const VolunteerModel = mongoose.model("Volunteer", VolunteerSchema);

export default VolunteerModel;
