const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    roadmapId: {
        type: String,
        required: true
    },
    completedLectures: {
        type: Map,
        of: mongoose.Schema.Types.Mixed, // This allows for storing both boolean and objects
        default: {}
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

// Create a compound index for faster lookups
UserProgressSchema.index({ userId: 1, roadmapId: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', UserProgressSchema);