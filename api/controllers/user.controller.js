import User from "../modules/user.model";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";


export const test = (req, res) => {
  res.json({ message: "Hello world user controller" });
};

// export const updateUser = async (req, res, next) => {
//   if (req.user.id != req.params.id) return next(errorHandler(401, "you can't"));
//   try {
//     if (req.body.password) {
//       req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           avatar: req.body.avatar,
//         },
//       },
//       { new: true }
//     );

//     const { password, ...rest } = updateUser._doc;

//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };