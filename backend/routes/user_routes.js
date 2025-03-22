const express = require('express');
const { user_register, user_login, user_forgotPassword, user_resetPassword, logout } = require('../controller/user_controller');
const { getVideos, getNotes, getRoadmaps,getMcq } = require("../controller/matrialData");
const { saveVideoProgress} = require("../controller/progress_controller");

const router = express.Router();
// Auth routes
router.route("/register").post(user_register);
router.route("/login").post(user_login);
router.route("/forgotPassword").post(user_forgotPassword);
router.route("/resetPassword").post(user_resetPassword);
router.route("/logout").post(logout);

//Data routes
router.get("/videos", getVideos);
router.get("/notes", getNotes);
router.get("/roadmaps", getRoadmaps);
router.get("/mcq",getMcq);

// Analysis
router.post("/progress/video", saveVideoProgress);


module.exports = router;