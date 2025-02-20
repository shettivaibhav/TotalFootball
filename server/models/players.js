const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PlayersSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true }, // ✅ Index for faster searching
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    password: String,
    userType: { type: String, enum: ['Player', 'Coach'], index: true }, // ✅ Index added for filtering
    position: { type: String, enum: ['Attacker', 'Midfield', 'Defender', 'Goalkeeper'], index: true }, // ✅ Index for quick lookup
    preferredFoot: { type: String, enum: ['Left', 'Right', 'Both'] },
    height: Number,
    weight: Number,
    nationality: String,
    dateOfBirth: Date,
    yearsExperience: Number,
    teamName: String,
    tacticalFlexibility: String,
    notableAchievements: String,
    contractEndDate: Date,
    appearances: Number,
    goalsScored: Number,
    assists: Number,
    cleanSheets: Number,
    matchesWon: Number,
    injuries: String,
    certifications: String,
    trainingPhilosophy: String,
    playerVideoLinks: String,
    fitnessLevel: String,
    agentContact: String,
    socialMediaLinks: String
});

// ✅ Add a virtual field to calculate age dynamically
PlayersSchema.virtual('age').get(function () {
    if (!this.dateOfBirth) return null;
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});

// ✅ Ensure virtuals are included when converting the document to JSON
PlayersSchema.set('toJSON', { virtuals: true });

// ✅ Apply the uniqueValidator plugin to handle duplicate key errors gracefully.
PlayersSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const PlayersModel = mongoose.model("players", PlayersSchema);
module.exports = PlayersModel;
