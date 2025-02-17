import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const token = sessionStorage.getItem("token"); // Retrieve token from local storage
  console.log("Token:",token)
  const handleOk = () => {
    navigate('/main'); // Navigate to the playerdetails page
  };

  useEffect(() => {
    if (!token) {
      console.error("No token found. Please log in.");
      
    }
    else {
      console.log("Received Token:", token);  // ✅ Check if the token exists
    }

    axios
      .get("http://localhost:3001/resume", {
        headers: { Authorization: `Bearer ${token}` }, // Send token in headers
      })
      .then((response) => {
        setPlayer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, [token]);

  if (!player) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading player details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Player Resume</h2>

      {/* Profile Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold">{player.name}</h3>
        <p className="text-lg">{player.userType}</p>
      </div>

      {/* Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Email:</strong> {player.email}</p>
          <p><strong>Position:</strong> {player.position}</p>
          <p><strong>Preferred Foot:</strong> {player.preferredFoot}</p>
          <p><strong>Height:</strong> {player.height} cm</p>
          <p><strong>Weight:</strong> {player.weight} kg</p>
          <p><strong>Nationality:</strong> {player.nationality}</p>
          <p><strong>Date of Birth:</strong> {new Date(player.dateOfBirth).toLocaleDateString()}</p>
          <p><strong>Years of Experience:</strong> {player.yearsExperience}</p>
          <p><strong>Team Name:</strong> {player.teamName}</p>
          <p><strong>Current Club:</strong> {player.currentClub}</p>
          <p><strong>Contract End Date:</strong> {new Date(player.contractEndDate).toLocaleDateString()}</p>
          <p><strong>Tactical Flexibility:</strong> {player.tacticalFlexibility}</p>
        </div>

        <hr className="my-4" />

        {/* Statistics Section */}
        <h3 className="text-xl font-semibold text-gray-800">Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mt-2">
          <p><strong>Appearances:</strong> {player.appearances}</p>
          <p><strong>Goals Scored:</strong> {player.goalsScored}</p>
          <p><strong>Assists:</strong> {player.assists}</p>
          <p><strong>Clean Sheets:</strong> {player.cleanSheets}</p>
          <p><strong>Matches Won:</strong> {player.matchesWon}</p>
        </div>

        <hr className="my-4" />

        {/* Additional Info Section */}
        <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
        <div className="text-gray-700">
          <p><strong>Injuries:</strong> {player.injuries || "None"}</p>
          <p><strong>Certifications:</strong> {player.certifications || "None"}</p>
          <p><strong>Training Philosophy:</strong> {player.trainingPhilosophy || "N/A"}</p>
          <p><strong>Fitness Level:</strong> {player.fitnessLevel}</p>
          <p><strong>Agent Contact:</strong> {player.agentContact}</p>
          <p><strong>Social Media Links:</strong> {player.socialMediaLinks}</p>
        </div>

        {/* Video Link */}
        {player.playerVideoLinks && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Player Videos</h3>
            <a
              href={player.playerVideoLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Watch Videos
            </a>
          </div>
        )}
        
        {/* OK Button to Navigate to Main Page */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleOk}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            OK
          </button>
        </div>

      </div>
    </div>
  );
};

export default Resume;
