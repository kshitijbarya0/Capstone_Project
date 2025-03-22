const User = require('../models/User');
const { isEmpty } = require('../utils/object_isEmpty');
const AppError = require('../utils/error');
const bcrypt = require('bcryptjs');
const { USER_MODEL, USER_LOGIN_MODEL, FORGOT_PASSWORD_MODEL, RESET_PASSWORD_MODEL } = require('../validation_models/user');
const JWT = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

exports.user_login = async (req, res, next) => {
    if (isEmpty(req.body)) return next(new AppError('Form data not found', 400));

    try {
        const { error } = USER_LOGIN_MODEL.validate(req.body);
        if (error) return next(new AppError(error.details[0].message, 400));

        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(new AppError("Invalid credentials", 400));

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return next(new AppError("Invalid credentials", 400));

        const token = JWT.sign({ id: user._id, email: user.email }, secretKey, { expiresIn: "1d" });

        res.json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
                username: user.username,
            },
            token:token,
        });

    } catch (err) {
        return next(new AppError(err.message, 500));
    }
};

exports.user_register = async (req, res, next) => {
    try {
        const { error } = USER_MODEL.validate(req.body);
        if (error) return next(new AppError(error.details[0].message, 400));

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return next(new AppError("Email is already used! Please login", 400));

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({ username:req.body.username, email: req.body.email, password: hashedPassword });
        await newUser.save();
        const token = JWT.sign({email: newUser.email }, secretKey, { expiresIn: "1d" });
        res.json({
            success: true,
            message: "Registration successful",
            user: {
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username
            },
            token:token,
        });

    } catch (err) {
        return next(new AppError(err.message, 500));
    }
};

exports.user_forgotPassword = async (req, res, next) => {
    if (isEmpty(req.body)) return next(new AppError('Form data not found', 400));

    try {
        const { error } = FORGOT_PASSWORD_MODEL.validate(req.body);
        if (error) return next(new AppError(error.details[0].message, 400));

        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(new AppError("User does not exist", 400));

        const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
        const otpExpire = new Date();
        otpExpire.setMinutes(otpExpire.getMinutes() + 5);

        await User.findOneAndUpdate({ email: req.body.email }, { otp: parseInt(otp), otpExpire });

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'Secure OTP for Password Reset – Do Not Share',
            html: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <!-- Logo placeholder - replace with your actual logo -->
                        <img src="https://via.placeholder.com/150x50" alt="Company Logo" style="max-width: 150px;">
                    </div>
                    
                    <div style="background-color: white; border-radius: 12px; padding: 40px 30px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);">
                        <h1 style="font-size: 24px; font-weight: 600; color: #111; margin-top: 0; margin-bottom: 30px; text-align: center;">Password Reset Code</h1>
                        
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                            We received a request to reset your password. Use the verification code below to continue:
                        </p>
                        
                        <div style="background-color: #f7f9fc; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
                            <div style="font-family: 'Courier New', monospace; font-size: 32px; font-weight: 700; letter-spacing: 5px; color: #2563eb;">
                                ${otp}
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin: 25px 0; padding: 15px; background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 6px;">
                            <div style="margin-right: 15px;">⚠️</div>
                            <div>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5;">
                                    This code will expire in <strong>5 minutes</strong>. Don't share it with anyone.
                                </p>
                            </div>
                        </div>
                        
                        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 25px;">
                            If you didn't request this password reset, please ignore this email or contact our support team if you have concerns.
                        </p>
                        
                        <hr style="border: none; height: 1px; background-color: #e5e7eb; margin: 30px 0;">
                        
                        <p style="font-size: 14px; color: #64748b; text-align: center; margin-bottom: 0;">
                            Sent by <span style="color: #334155; font-weight: 500;">[Your Company Name]</span>
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; font-size: 13px; color: #64748b;">
                        <p style="margin-bottom: 15px;">
                            © ${new Date().getFullYear()} [Your Company Name]. All rights reserved.
                        </p>
                        <p>
                            <a href="#" style="color: #64748b; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                            <a href="#" style="color: #64748b; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                            <a href="#" style="color: #64748b; text-decoration: none; margin: 0 10px;">Contact Us</a>
                        </p>
                    </div>
                </div>
            `,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) return next(new AppError(error.message, 500));
            res.json({
                success: true,
                message: "OTP sent to your email",
            });
        });

    } catch (err) {
        return next(new AppError(err.message, 500));
    }
};

exports.user_resetPassword = async (req, res, next) => {
    if (isEmpty(req.body)) return next(new AppError('Form data not found', 400));

    try {
        const { error } = RESET_PASSWORD_MODEL.validate(req.body);
        if (error) return next(new AppError(error.details[0].message, 400));

        if (req.body.password !== req.body.confirmPassword) {
            return next(new AppError("Passwords do not match", 400));
        }

        const user = await User.findOne({ otp: req.body.otp, otpExpire: { $gt: new Date() } });
        if (!user) return next(new AppError("Invalid or expired OTP", 400));

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await User.findOneAndUpdate(
            { otp: req.body.otp },
            { password: hashedPassword, otp: null, otpExpire: null }
        );

        res.json({ message: "Password reset successful" });

    } catch (err) {
        return next(new AppError(err.message, 500));
    }
};
exports.logout = async (req, res) => {
    res.clearCookie("token"); // Clear authentication cookie if using JWT
    res.json({ success: true, message: "Logged out successfully!" });
};