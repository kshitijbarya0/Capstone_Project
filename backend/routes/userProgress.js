const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const UserProgress = require('../models/User_Progress'); // MongoDB model for user progress
const authMiddleware = require('../middleWare/authMiddleware');

// Get user progress for a specific roadmap
router.get('/users/:userId/progress/:roadmapId', authMiddleware,async (req, res) => {
    try {
        const { userId, roadmapId } = req.params;

        // Verify user is requesting their own data or is admi
        if (req.user.id !== userId && !req.user.isAdmin) {
            return res.status(403).json({ message: "Not authorized to access this data" });
        }

        // Find user progress for the specified roadmap
        const userProgress = await UserProgress.findOne({
            userId,
            roadmapId
        });

        if (!userProgress) {
            return res.json({
                userId,
                roadmapId,
                completedLectures: {}
            });
        }

        return res.json(userProgress);

    } catch (error) {
        console.error('Error fetching user progress:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update user progress
router.post('/users/progress/update', async (req, res) => {
    try {
        const { userId, roadmapId, lectureId, stepId, isCompleted } = req.body;

        if (!userId || !roadmapId || !lectureId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        let userProgress = await UserProgress.findOne({ 
            userId: mongoose.Types.ObjectId.isValid(userId) ? new mongoose.Types.ObjectId(userId) : userId,
            roadmapId: roadmapId.toString()
        });

        if (!userProgress) {
            userProgress = new UserProgress({
                userId,
                roadmapId: roadmapId.toString(),
                completedLectures: new Map()
            });
        }

        // ✅ Convert lectureId to string before storing it in Map
        const lectureIdStr = lectureId.toString();

        if (isCompleted) {
            userProgress.completedLectures.set(lectureIdStr, true);
        } else {
            userProgress.completedLectures.delete(lectureIdStr);
        }

        userProgress.lastUpdated = new Date();

        await userProgress.save();

        return res.json({
            message: 'Progress updated successfully',
            progress: userProgress
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports = router;
