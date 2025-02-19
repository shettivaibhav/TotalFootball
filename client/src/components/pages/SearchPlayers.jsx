import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
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
    if (query) setSearch(query);
    fetchPlayers();
  }, [query, role, age, position, club, sortBy]);

  const fetchPlayers = async () => {
    try {
      const params = { search, role, age, position, club, sortBy };
      // Remove empty parameters
      Object.keys(params).forEach(key => {
        if (!params[key]) {
          delete params[key];
        }
      });
  
      const response = await axios.get("http://localhost:3001/search", { params });
      setPlayers(response.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-700">Search & Sort Players</h2>

      <div className="flex flex-col gap-3 mt-4">
        <input 
          className="border p-2 rounded" 
          type="text" 
          placeholder="Search by name..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border p-2 rounded" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">All Roles</option>
          <option value="Player">Player</option>
          <option value="Coach">Coach</option>
        </select>

        <input 
          className="border p-2 rounded" 
          type="text" 
          placeholder="Filter by Age (e.g., 20-30)" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
        />

        {role === "Player" && (
          <input 
            className="border p-2 rounded" 
            type="text" 
            placeholder="Filter by Position" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)}
          />
        )}

        <input 
          className="border p-2 rounded" 
          type="text" 
          placeholder="Filter by Club" 
          value={club} 
          onChange={(e) => setClub(e.target.value)}
        />

        <select className="border p-2 rounded" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="age">Age (Asc)</option>
          <option value="-age">Age (Desc)</option>
          <option value="name">Name (A-Z)</option>
          <option value="-name">Name (Z-A)</option>
        </select>
      </div>

      <ul className="mt-4 border p-4 rounded">
        {players.map((player) => (
          <li key={player._id} className="p-2 border-b">{player.name} - {player.userType} - Age: {player.age} - {player.currentClub}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlayers;
