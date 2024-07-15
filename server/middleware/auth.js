const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");
const User = require("../model/user");
const Shop = require("../model/shop");

// Middleware to authenticate regular users
exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(new ErrorHandler("User not found", 404));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
});

// Middleware to authenticate sellers
exports.isSeller = catchAsyncError(async (req, res, next) => {
  const { seller_token } = req.cookies;

  if (!seller_token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  try {
    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);
    req.seller = await Shop.findById(decoded.id);

    if (!req.seller) {
      return next(new ErrorHandler("Seller not found", 404));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid seller token", 401));
  }
});
