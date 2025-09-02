//cloudinary.js file is a configuration helper 
// that stores and sets up Cloudinary’s API credentials 
// so your app can upload, store, and manage media (images, videos, etc.) in the Cloudinary cloud.

//we will import it through cloudinary.com

import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
const uploadOnCloudinary =async (filePath)=>{
     cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    try {
        const uploadResult = await cloudinary.uploader
       .upload(filePath)
       fs.unlinkSync(filePath)
       return uploadResult.secure_url
    } catch (error) {
    fs.unlinkSync(filePath)
    return res.status(500).json({message:"cloudinary error"})
    }
}


export default uploadOnCloudinary