const express = require("express");
const router = express.Router();
const PlayersModel = require("../models/players");

// GET players with search, filter, and sort
router.get("/", async (req, res) => {
    try {
        let query = {}; // Dynamic search query
        let { search, role, age, position, club, sortBy } = req.query;

        // 🔍 Search by Name
        if (search) {
            query.name = { $regex: search, $options: "i" }; // Case-insensitive search
        }

        // 🎭 Filter by Role (Player or Coach)
        if (role) {
            query.userType = role;
        }

        // 📅 Filter by Age Range
        if (age) {
            const [minAge, maxAge] = age.split("-").map(Number);
            const currentYear = new Date().getFullYear();
            query.dateOfBirth = { 
                $gte: new Date(`${currentYear - maxAge}-01-01`), 
                $lte: new Date(`${currentYear - minAge}-12-31`)
            };
        }

        // ⚽ Filter by Position (Only for Players)
        if (position) {
            query.position = position;
        }

        // 🏟️ Filter by Club
        if (club) {
            query.currentClub = { $regex: club, $options: "i" };
        }

        // 🔀 Sorting Logic
        let sortQuery = {};
        if (sortBy) {
            if (sortBy === "age") sortQuery.dateOfBirth = 1; // Oldest to Youngest
            if (sortBy === "-age") sortQuery.dateOfBirth = -1; // Youngest to Oldest
            if (sortBy === "name") sortQuery.name = 1; // A-Z
            if (sortBy === "-name") sortQuery.name = -1; // Z-A
        }

        // 📜 Fetch Players from DB
        const players = await PlayersModel.find(query).sort(sortQuery);
        res.json(players);
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
