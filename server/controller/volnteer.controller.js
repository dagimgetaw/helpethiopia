import Volunteer from "../models/volnteer.model.js";

const RegisterVolunteer = async (req, res, next) => {
  try {
    const data = req.body;

    data.agreement = data.agreement === "yes";

    const exists = await Volunteer.findOne({ email: data.email });
    if (exists) {
      return res.status(409).json({
        success: false,
        alreadyRegistered: true,
        message: "Email already registered",
      });
    }

    const volunteer = await Volunteer.create(data);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: volunteer,
    });
  } catch (error) {
    next(error);
  }
};

export { RegisterVolunteer };
