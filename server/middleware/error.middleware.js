const errorMiddleware = (err, req, res, next) => {
  try {
    console.error(err);

    let statusCode = err.statusCode || 500;
    let message = err.message || "Server Error";

    // Mongoose: invalid ObjectId
    if (err.name === "CastError") {
      statusCode = 404;
      message = "Resource not found";
    }

    // Mongoose: duplicate key
    if (err.code === 11000) {
      statusCode = 400;
      message = "Duplicate field value entered";
    }

    // Mongoose: validation error
    if (err.name === "ValidationError") {
      statusCode = 400;
      message = Object.values(err.errors)
        .map((val) => val.message)
        .join(", ");
    }

    // Stripe: card declined / payment error
    if (err.type === "StripeCardError") {
      statusCode = 400;
      message = err.message;
    }

    // Stripe: invalid request
    if (err.type === "StripeInvalidRequestError") {
      statusCode = 400;
      message = "Invalid Stripe request";
    }

    res.status(statusCode).json({
      success: false,
      message,
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
