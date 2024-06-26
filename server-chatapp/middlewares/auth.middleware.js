import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../../server/models/User.model.js";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    // install the cookieParser to parse cookies!
    const token =req.cookies.accessToken
    if (!token) {
      throw new ApiError(300, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(decodedToken);

    // ------------------------------ Fix the Bug
    // const user = await User.findById(decodedToken?._id).select("-password");
    // console.log(user);
    // if (!user) {
    //   throw new ApiError(401, "Invalid Access Token");
    // }
    // -------------------------------------------

    req.user = decodedToken;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
