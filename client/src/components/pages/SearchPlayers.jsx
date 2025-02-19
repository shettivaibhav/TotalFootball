import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPlayers();
  }, [search]);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/search', {
        params: { search },
      });
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-700">Search Players</h2>
      <div className="flex flex-col gap-3 mt-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="mt-4 border p-4 rounded">
        {players.map((player) => (
          <li key={player._id} className="p-2 border-b">
            {player.name} - {player.userType} - Age: {player.age} - {player.currentClub}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlayers;
