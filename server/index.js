const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const PlayersModel = require("./models/players"); // Signup model
// const searchRoutes = require("./routes/searchRoutes");
const app = express();
app.use(express.json());
app.use(cors());


const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/players');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connectToDatabase();

// Use the models with the default connection
const Players = mongoose.model('players', PlayersModel.schema);


// Secret key for JWT
const SECRET_KEY = "your-secret-key";

// Middleware to check and decode the token
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token after "Bearer"
  
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify token
    req.user = decoded; // Attach decoded token info (like id) to the request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Route for login
app.post("/login", (req, res) => {
  console.log("Login Request Received");
  const { email, password } = req.body;

  // Find the user in the database
  Players.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          // Generate JWT token
          const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
          console.log("Generated Token:", token);

          res.json({ success: true, token });
        } else {
          res.status(401).json({ success: false, message: "The password is incorrect" });
        }
      } else {
        res.status(404).json({ success: false, message: "No record existed" });
      }
    })
    .catch((err) => {
      console.error("Error during login:", err);
      res.status(500).json({ success: false, error: err.message });
    });
});

// Route for registering a new player
app.post("/register", async (req, res) => {
  try {
    const { email, ...otherData } = req.body;
    
    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const existingPlayer = await Players.findOne({ email: normalizedEmail });
    if (existingPlayer) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create new player
    const newPlayer = await Players.create({ email: normalizedEmail, ...otherData });
    
    console.log("Player created:", newPlayer);
    res.json("Success");
  } catch (err) {
    console.error("Error during player creation:", err);

    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already in use" });
    }

    res.status(500).json({ message: "An error occurred while creating the player. Please try again later." });
  }
});

app.get('/playerdetails', authenticate, async (req, res) => {
  try {
    // Fetch player details using the authenticated user's ID
    const playerDetails = await Players.findById(req.user.id);

    // If player not found, return 404 error
    if (!playerDetails) {
      return res.status(404).json({ message: 'Player details not found' });
    }

    // Return the player details
    res.json(playerDetails);
  } catch (error) {
    console.error('Error fetching player details:', error);
    res.status(500).json({ message: 'Error fetching player details', error: error.message });
  }
});



// Route for updating detailed player information
app.post("/playerdetails", authenticate, (req, res) => {
  const playerId = req.user.id; // Extract player ID from the decoded token
  
  Players.findByIdAndUpdate(playerId, req.body, { new: true })
    .then((updatedDetails) => {
      if (!updatedDetails) {
        return res.status(404).json({ message: "Player not found" });
      }
      res.json(updatedDetails);
    })
    .catch((err) => {
      console.error("Error updating details:", err);
      res.status(500).json(err);
    });
});

// ✅ Route for fetching player details based on token
app.get("/resume", authenticate, async (req, res) => {
  try {
    const player = await Players.findById(req.user.id).select("-password"); // Exclude password from response

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json(player);
  } catch (error) {
    console.error("Error fetching player details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/players', async (req, res) => {
  try {
    const players = await PlayersModel.find();
    res.json(players);
  } catch (err) {
    console.error('Error fetching players:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/cardresume/:id', async (req, res) => {
  try {
    const player = await PlayersModel.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching player details', error });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
