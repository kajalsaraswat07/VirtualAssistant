//a multer.js file is usually a middleware configuration file 
// for handling file uploads from the client to the server.

// Multer Does

//  Receives files sent from the frontend (via form submissions or APIs like fetch/axios).
//  Parses multipart/form-data requests (which browsers use to send files).
//  Stores the files either:
//  in local storage (e.g., /uploads folder), or
// temporarily in memory (before sending them to Cloudinary, AWS S3, etc.).

import multer from "multer"

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage})
export default upload

//now image will get set in the backend
