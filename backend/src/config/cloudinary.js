import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config(); // Ensure variables are loaded

cloudinary.config({
  cloud_name: "dcvkwbc01",
  api_key:"617873552861316",
  api_secret: "r2IZcvaybfAVd4n3pdUkR3xs0Hc",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'college-olx-products',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

export const upload = multer({ storage });