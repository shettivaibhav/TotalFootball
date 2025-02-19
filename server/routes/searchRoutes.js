const express = require("express");
const PlayersModel = require("../models/players");
const app = express();
app.use(express.json());
app.use(cors());

// GET players with search, filter, and sort
app.get("/search", async (req, res) => {
    try {
        let query = {}; // Dynamic search query
        let { search, role, age, position, club, sortBy } = req.query;

        // 🔍 Search by Name (Case-Insensitive)
        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // 🎭 Filter by Role (Player or Coach)
        if (role) {
            query.userType = role;
        }

        // 📅 Corrected Age Range Filtering using DOB
        if (age) {
            const [minAge, maxAge] = age.split("-").map(Number);
            if (minAge && maxAge) {
                const currentDate = new Date();
                const minDOB = new Date(currentDate.setFullYear(currentDate.getFullYear() - maxAge));
                const maxDOB = new Date(currentDate.setFullYear(currentDate.getFullYear() - minAge));

                query.dateOfBirth = { $gte: minDOB, $lte: maxDOB };
            }
        }

        // ⚽ Filter by Position (Only for Players)
        if (position) {
            query.position = { $regex: position, $options: "i" };
        }

        // 🏟️ Filter by Club (Case-Insensitive)
        if (club) {
            query.currentClub = { $regex: club, $options: "i" };
        }

        // 🔀 Sorting Logic
        let sortQuery = {};
        if (sortBy) {
            if (sortBy === "age") sortQuery.dateOfBirth = 1; // Oldest to youngest
            if (sortBy === "-age") sortQuery.dateOfBirth = -1; // Youngest to oldest
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
