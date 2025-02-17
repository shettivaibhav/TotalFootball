import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState(""); // Search query from URL
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Extract search query from URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');

  useEffect(() => {
    if (query) {
      setSearch(query); // Update search state with query from URL
    }
    fetchPlayers();
  }, [query, role, age, position, club, sortBy]);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/playersRoutes", {
        params: { search, role, age, position, club, sortBy }
      });
      setPlayers(response.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  return (
    <div>
      <h2>Search & Sort Players</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Role Selection */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        <option value="Player">Player</option>
        <option value="Coach">Coach</option>
      </select>

      {/* Age Filter */}
      <input
        type="text"
        placeholder="Filter by Age (e.g., 20-30)"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {/* Position Filter (Only for players) */}
      {role === "Player" && (
        <input
          type="text"
          placeholder="Filter by Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      )}

      {/* Club Filter */}
      <input
        type="text"
        placeholder="Filter by Club"
        value={club}
        onChange={(e) => setClub(e.target.value)}
      />

      {/* Sorting */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="age">Age (Asc)</option>
        <option value="-age">Age (Desc)</option>
        <option value="name">Name (A-Z)</option>
        <option value="-name">Name (Z-A)</option>
      </select>

      {/* Display Players */}
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} - {player.userType} - Age: {player.age} - {player.currentClub}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlayers;
