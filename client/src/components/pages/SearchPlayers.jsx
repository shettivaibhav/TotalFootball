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
        <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-700 font-semibold">Name</th>
                <th className="p-3 text-left text-gray-700 font-semibold">User Type</th>
                <th className="p-3 text-left text-gray-700 font-semibold">Date of Birth</th>
                <th className="p-3 text-left text-gray-700 font-semibold">Position</th>
                <th className="p-3 text-left text-gray-700 font-semibold">Club</th>
                <th className="p-3 text-left text-gray-700 font-semibold">View Profile</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player) => (
                <tr key={player._id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 text-gray-900">{player.name}</td>
                  <td className="p-3 text-gray-700">{player.userType}</td>
                  <td className="p-3 text-gray-700">{new Date(player.dateOfBirth).toLocaleDateString()}</td>
                  <td className="p-3 text-gray-700">{player.position}</td>
                  <td className="p-3 text-gray-700">{player.teamName}</td>
                  <td className="p-3">
                    <Link to={`/cardresume/${player._id}`} className="text-blue-600 hover:underline font-medium">
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default SearchPlayers;
