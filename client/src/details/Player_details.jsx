import React, { useState } from 'react';
import axios from 'axios';

const Player_details = () => {
  const [formData, setFormData] = useState({
    userType: '',
    position: '',
    preferredFoot: '',
    height: '',
    weight: '',
    nationality: '',
    dateOfBirth: '',
    yearsExperience: '',
    teamName: '',
    tacticalFlexibility: '',
    notableAchievements: '',
    currentClub: '',
    contractEndDate: '',
    appearances: '',
    goalsScored: '',
    assists: '',
    cleanSheets: '',
    matchesWon: '',
    injuries: '',
    certifications: '',
    trainingPhilosophy: '',
    playerVideoLinks: '',
    fitnessLevel: '',
    agentContact: '',
    socialMediaLinks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('You must log in first!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/playerdetails', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Player details saved successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Failed to save player details. Please try again.');
      console.error('Axios Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Player Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="userType" className="block text-sm font-semibold text-gray-700">User Type</label>
            <select id="userType" name="userType" value={formData.userType} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="Player">Player</option>
              <option value="Coach">Coach</option>
            </select>
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-semibold text-gray-700">Position or Role</label>
            <select id="position" name="position" value={formData.position} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="Attacker">Attacker</option>
              <option value="Midfield">Midfield</option>
              <option value="Defender">Defender</option>
              <option value="Goalkeeper">Goalkeeper</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredFoot" className="block text-sm font-semibold text-gray-700">Preferred Foot</label>
            <select id="preferredFoot" name="preferredFoot" value={formData.preferredFoot} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-semibold text-gray-700">Height (in cm)</label>
            <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-semibold text-gray-700">Weight (in kg)</label>
            <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>

          <div>
            <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700">Nationality</label>
            <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>

          <div>
            <label htmlFor="yearsExperience" className="block text-sm font-semibold text-gray-700">Years of Experience</label>
            <input type="number" id="yearsExperience" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        <div>
          <label htmlFor="teamName" className="block text-sm font-semibold text-gray-700">Team Name</label>
          <input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="tacticalFlexibility" className="block text-sm font-semibold text-gray-700">Tactical Flexibility</label>
            <input type="text" id="tacticalFlexibility" name="tacticalFlexibility" value={formData.tacticalFlexibility} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>

          <div>
            <label htmlFor="notableAchievements" className="block text-sm font-semibold text-gray-700">Notable Achievements</label>
            <textarea id="notableAchievements" name="notableAchievements" value={formData.notableAchievements} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>

          <div>
            <label htmlFor="currentClub" className="block text-sm font-semibold text-gray-700">Current Club</label>
            <input type="text" id="currentClub" name="currentClub" value={formData.currentClub} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>

          <div>
            <label htmlFor="contractEndDate" className="block text-sm font-semibold text-gray-700">Contract End Date</label>
            <input type="date" id="contractEndDate" name="contractEndDate" value={formData.contractEndDate} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* More form fields go here... */}

        <div className="mt-6 text-center">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Player_details;
