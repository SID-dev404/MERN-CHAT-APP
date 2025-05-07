import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API,
  api_secret: CLOUD_SECRET,
});

export default cloudinary;
