import Image from "../models/image.models.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

export const getImages = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteImage = async (req, res) => {
  const { id } = req.params;
  const paramsToSign = {
    preset_name: process.env.REACT_APP_YOUR_PRESET_NAME,
  };
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.REACT_APP_YOUR_API_SECRET
  );
  const now = Date.now();
  //   console.log({
  //     public_id: id,
  //     api_key: process.env.REACT_APP_YOUR_API_KEY,
  //     api_secret: process.env.REACT_APP_YOUR_API_SECRET,
  //     signature: signature,
  //     timestamp: now,
  //   });

  try {
    // await cloudinary.v2.uploader.destroy(id, options).then(callback);
    await cloudinary.uploader.destroy(id, function (error, result) {
      if (error) {
        console.log("Failed to delete image: ", error);
      } else {
        console.log("Successfully deleted image: ", result);
      }
    });
    // await Axios.post(
    //   `https://api.cloudinary.com/v1_1/dqmorrdhr/image/destroy`,
    //   {
    //     public_id: id,
    //     api_key: process.env.REACT_APP_YOUR_API_KEY,
    //     api_secret: process.env.REACT_APP_YOUR_API_SECRET,
    //     signature: signature,
    //     timestamp: now,
    //   }
    // );
    const response = res.status(200).json({
      status: "success",
      message: "image in cloudinary successfuly deleted",
    });

    return response;
  } catch (error) {
    const response = res.status(500).json({
      status: "fail",
      message: error.message,
    });
    return response;
  }
};

export const insertImage = async (req, res) => {
  try {
  } catch (error) {}
};
