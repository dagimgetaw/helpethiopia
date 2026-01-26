import SubscribeModel from "../models/subscribe.model.js";

const Subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingSubscriber = await SubscribeModel.findOne({ email });
    if (existingSubscriber) {
      return res.status(200).json({
        success: true,
        message: "You are already subscribed!",
        subscribedBefore: true,
      });
    }

    const newSubscriber = new SubscribeModel({ email });
    await newSubscriber.save();

    res.status(201).json({
      success: true,
      message: "Subscription successful!",
      newSubscriber: true,
    });
  } catch (error) {
    next(error);
  }
};

export { Subscribe };
