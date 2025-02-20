import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardResume = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  console.log("id:",{id})
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cardresume/${id}`);
        setPlayer(response.data);
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{player.name}</h2>
        <p className="text-lg text-gray-600">{player.userType}</p>
      </div>

      {/* Personal Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
        <ul className="text-gray-600 mt-2">
          {player.dateOfBirth && <li><strong>Date of Birth:</strong> {new Date(player.dateOfBirth).toLocaleDateString()}</li>}
          {player.nationality && <li><strong>Nationality:</strong> {player.nationality}</li>}
          {player.height && <li><strong>Height:</strong> {player.height} cm</li>}
          {player.weight && <li><strong>Weight:</strong> {player.weight} kg</li>}
          {player.preferredFoot && <li><strong>Preferred Foot:</strong> {player.preferredFoot}</li>}
        </ul>
      </div>

      {/* Career Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Career Details</h3>
        <ul className="text-gray-600 mt-2">
          {player.position && <li><strong>Position:</strong> {player.position}</li>}
          {player.currentClub && <li><strong>Current Club:</strong> {player.currentClub}</li>}
          {player.teamName && <li><strong>Team Name:</strong> {player.teamName}</li>}
          {player.yearsExperience && <li><strong>Years of Experience:</strong> {player.yearsExperience}</li>}
          {player.tacticalFlexibility && <li><strong>Tactical Flexibility:</strong> {player.tacticalFlexibility}</li>}
          {player.contractEndDate && <li><strong>Contract End Date:</strong> {new Date(player.contractEndDate).toLocaleDateString()}</li>}
        </ul>
      </div>

      {/* Performance Stats */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Performance Stats</h3>
        <ul className="text-gray-600 mt-2">
          {player.appearances && <li><strong>Appearances:</strong> {player.appearances}</li>}
          {player.goalsScored && <li><strong>Goals Scored:</strong> {player.goalsScored}</li>}
          {player.assists && <li><strong>Assists:</strong> {player.assists}</li>}
          {player.cleanSheets && <li><strong>Clean Sheets:</strong> {player.cleanSheets}</li>}
          {player.matchesWon && <li><strong>Matches Won:</strong> {player.matchesWon}</li>}
        </ul>
      </div>

      {/* Achievements */}
      {player.notableAchievements && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Notable Achievements</h3>
          <p className="text-gray-600 mt-2">{player.notableAchievements}</p>
        </div>
      )}

      {/* Additional Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Additional Information</h3>
        <ul className="text-gray-600 mt-2">
          {player.certifications && <li><strong>Certifications:</strong> {player.certifications}</li>}
          {player.trainingPhilosophy && <li><strong>Training Philosophy:</strong> {player.trainingPhilosophy}</li>}
          {player.fitnessLevel && <li><strong>Fitness Level:</strong> {player.fitnessLevel}</li>}
          {player.injuries && <li><strong>Injuries History:</strong> {player.injuries}</li>}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Contact</h3>
        <ul className="text-gray-600 mt-2">
          {player.agentContact && <li><strong>Agent Contact:</strong> {player.agentContact}</li>}
          {player.socialMediaLinks && <li><strong>Social Media:</strong> {player.socialMediaLinks}</li>}
        </ul>
      </div>

      {/* Player Videos */}
      {player.playerVideoLinks && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">Highlight Videos</h3>
          <a
            href={player.playerVideoLinks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Watch Player Highlights
          </a>
        </div>
      )}
    </div>
  );
};

export default CardResume;
