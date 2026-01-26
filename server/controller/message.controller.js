import MessageModel from "../models/message.model.js";

const SaveMessage = async (req, res, next) => {
  try {
    const { fullName, email, message } = req.body;

    const newMessage = new MessageModel({
      fullName,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export { SaveMessage };
