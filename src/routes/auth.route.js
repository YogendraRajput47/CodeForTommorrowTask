const express=require("express");
const { getRefreshToken, loginUser, registerUser } = require("../controllers/auth.controller");
const router=express.Router();


router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/refresh-token",getRefreshToken);

module.exports=router