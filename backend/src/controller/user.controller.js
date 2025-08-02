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
const generateaccessandrefreshtoken = async function (userId) {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    this.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    console.log(
      "there is an error to generation of access and refresh token",
      error
    );
  }
};
export const register = asynchandler(async (req, res) => {
  const { username, email, fullname, password } = req.body;
  if (
    [username, email, fullname, password].some((fields) => fields.trim() == "")
  ) {
    throw new ApiErrors(403, "All fields are required");
  }
  if (!email.toLowercase().endsWith("@gmail.com")) {
    throw new ApiErrors(401, "email should be end with @gamil.com");
  }
  const AlreadyExist = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (AlreadyExist) {
    throw new ApiErrors(403, "User already exsist");
  }
  const mainuser = await User.create({
    username: username.toLowercase(),
    email: email.toLowercase(),
    fullname,
    password,
  });

  const user = await User.findById(mainuser._id).select(
    "-password refreshtoken"
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
  const user = await User.finOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiErrors(402, "no exsisted username or email");
  }

  const isValidate = await user.isPasswordCorrect(passoword);
  if (!isValidate) {
    throw new ApiErrors(402, "not correct password");
  }
  const { accessToken, refreshToken } = await generateaccessandrefreshtoken(
    user._id
  );
  const loggedinuser = await User.findById(user._id).select("-password");
  const options = {
    httpOnly: true,
    Secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedinuser,
          accessToken,
          refreshToken,
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
    Secure: true,
  };
  req
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, {}, "User logout success"));
});

export const passwordchange = asynchandler(async(req,res)=>{

})
export const refreshaccesstoken = asynchandler(async(req,res)=>{
  
}) 