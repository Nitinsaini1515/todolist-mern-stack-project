import ApiResponse from "../utils/ApiResponse.js";
import ApiErrors from "../utils/ApiErrors.js";
import asynchandler from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
// register
// login
// logout
// generateaccesstoken
// generaterefreshtoken
// refreshaccesstoken
const generateaccessandrefreshtoken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accesstoken = user.generateAccessToken();
    const refreshtoken = user.generateRefreshToken();
    console.log(accesstoken)
    console.log(refreshtoken)
    user.refreshtoken = refreshtoken;
    await user.save({ validateBeforeSave: false });
    return { accesstoken, refreshtoken };
  } catch (error) {
    throw new ApiErrors(
      500,
      "Something went wrong while generating the access and refresh token"
    );
  }
};

export const register = asynchandler(async (req, res) => {
  console.log("bodyfile",req.body)
  const { username, email, fullname, password } = req.body;
  if (
    [username, email, fullname, password].some((fields) => fields.trim() == "")
  ) {
    throw new ApiErrors(403, "All fields are required");
  }
  // if (!email.toLowercase().endsWith("@gmail.com")) {
  //   throw new ApiErrors(401, "email should be end with @gamil.com");
  // }
  const AlreadyExist = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (AlreadyExist) {
    throw new ApiErrors(403, "User already exsist");
  }
  const mainuser = await User.create({
    username,
    email,
    fullname,
    password,
  });

  const user = await User.findById(mainuser._id).select(
    "-password"
  );
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User registerd successfully"));
});
export const login = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username || password)) {
    throw new ApiErrors(403, "username and email field are required ");
  }
const user = await User.findOne({
  $or: [{ username }, { email }],
})


  if (!user) {
    throw new ApiErrors(402, "no exsisted username or email");
  }

  const isValidate = await user.isPasswordCorrect(password);
  if (!isValidate) {
    throw new ApiErrors(402, "not correct password");
  }
  const { accesstoken, refreshtoken } = await generateaccessandrefreshtoken(
    user._id
  );
  const loggedinuser = await User.findById(user._id).select("-password");
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accesstoken, {
  httpOnly: true,
  secure: false, // true in production (HTTPS)
  sameSite: "Lax", // Or "None" if frontend/backend on different domains
  maxAge: 24 * 60 * 60 * 1000
})  .cookie("refreshToken", refreshtoken, {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: "Lax", // Or 'None' if frontend/backend are on different domains
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days or more
  })
    .json(
      new ApiResponse(
        200,
        {
          user: loggedinuser,
          accesstoken,
          refreshtoken,
        },
        "user logged in successfully"
      )
    );
});
export const logout = asynchandler(async (req, res) => {
  User.findByIdAndUpdate(
    await req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, {}, "User logout success"));
});

export const passwordchange = asynchandler(async(req,res)=>{
 const { oldpassword, newpassword, confirmpassword } = req.body;

  if (!(newpassword == confirmpassword)) {
    throw new ApiErrors(401, "Your new and confirm password didn't match");
  }
  if (
    [oldpassword, newpassword, confirmpassword].some(
      (fields) => fields.trim() == ""
    )
  ) {
    throw new ApiErrors(401, "No any password field should not be empty");
  }
  const user = await User.findById(req.user?._id);

  const ispasswordcorrect = await user.isPasswordCorrect(oldpassword);
  if (!ispasswordcorrect) {
    throw new ApiErrors(401, "Enter an correct password");
  }
  user.password = newpassword;
  await user.save({ validateBeforeSave: false });
  return res.status(200).json(200, {}, "password change successfully");
});

export const refreshaccesstoken = asynchandler(async(req,res)=>{
   const incommingrefreshtoken =
    req.cookies.refreshtoken || req.body.refreshtoken;
  if (!incommingrefreshtoken) {
    throw new ApiErrors(401, "Unauthorized request");
  }
  try {
    const decodedtoken = jwt.verify(
      incommingrefreshtoken,
      process.env.REFRESH_TOKEN_SECRET
    );
    // if(!decodedtoken){
    //   throw new erro
    // }
    const user = await User.findById(decodedtoken?._id);
    if (!usertoken) {
      throw new ApiErrors(401, "Cannot get the usertoken");
    }
    if (incommingrefreshtoken !== user?.refreshtoken) {
      throw new ApiErrors(401, "Refresh token is expired to use");
    }

    const options = {
      httpOnly: true,
      Secure: true,
    };
    const { accesstoken, newrefreshtoken } =
      await generateAccessaAndRefreshToken(user._id);
    return res
      .status(200)
      .cookie("accesstoken", accesstoken, options)
      .cookie("refreshtoken", newrefreshtoken, options)
      .json(
        new ApiRsponse(
          200,
          { accesstoken, refreshtoken: newrefreshtoken },
          "Access token refresheed successfully"
        )
      );
  } catch (error) {
    throw new ApiErrors(401, error?.message || "Invalid response");
  }
}) 