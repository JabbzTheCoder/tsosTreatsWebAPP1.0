import express from "express";
import { addProduct, listProduct, removeProduct } from "../controllers/productConroller.js";
import multer  from "multer";

const productRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})
productRouter.post("/add",upload.single("image"),addProduct)
productRouter.get("/list", listProduct)
productRouter.post("/remove",upload.single("image"),removeProduct)


export default productRouter;