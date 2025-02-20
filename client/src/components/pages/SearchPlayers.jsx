import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/players');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  // Filter players based on search query, selected userType, and selected position
  const filteredPlayers = players.filter(player => {
    const name = player.name ? player.name.toLowerCase() : '';
    const userType = player.userType ? player.userType.toLowerCase() : '';
    const position = player.position ? player.position.toLowerCase() : '';
    const teamName = player.teamName ? player.teamName.toLowerCase() : '';
    const query = searchQuery.toLowerCase();

    const matchesSearchQuery =
      name.includes(query) || userType.includes(query) || teamName.includes(query);

    const matchesUserType = selectedUserType ? userType === selectedUserType.toLowerCase() : true;
    const matchesPosition = selectedPosition ? position === selectedPosition.toLowerCase() : true;

    return matchesSearchQuery && matchesUserType && matchesPosition;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Players List</h2>

      {/* Filters */}
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, userType, or club..."
          className="p-2 border border-gray-300 rounded"
        />

        {/* userType Dropdown */}
        <select
          value={selectedUserType}
          onChange={(e) => setSelectedUserType(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All User Types</option>
          <option value="Player">Player</option>
          <option value="Coach">Coach</option>
        </select>

        {/* Position Dropdown */}
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Positions</option>
          <option value="Attacker">Attacker</option>
          <option value="Midfield">Midfield</option>
          <option value="Defender">Defender</option>
          <option value="Goalkeeper">Goalkeeper</option>
        </select>
      </div>

      <div className="container mx-auto my-4 overflow-y-auto h-[calc(100vh-100px)]">
        {/* Player Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPlayers.map((player) => (
            <Link to={`/cardresume/${player._id}`} key={player._id} className="block">
              <div key={player._id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{player.name}</h3>
                <p className="text-sm text-gray-600 mb-1">User Type: <span className="font-medium">{player.userType}</span></p>
                <p className="text-sm text-gray-600 mb-1">Date of Birth: <span className="font-medium">{new Date(player.dateOfBirth).toLocaleDateString()}</span></p>
                <p className="text-sm text-gray-600 mb-1">Position: <span className="font-medium">{player.position}</span></p>
                <p className="text-sm text-gray-600">Club: <span className="font-medium">{player.teamName}</span></p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SearchPlayers;
