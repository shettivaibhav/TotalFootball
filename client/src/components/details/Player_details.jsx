import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

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
  const [token, setToken] = useState(sessionStorage.getItem('token'));  // Assuming the token is stored in sessionStorage

  useEffect(() => {
    if (!token) {
      console.error("No token found. Please log in.");
      return;  // Exit early if no token is found
    }

    console.log("Received Token:", token);  // ✅ Check if the token exists

    const fetchPlayerDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/playerdetails", {
          headers: { Authorization: `Bearer ${token}` }  // Send token in headers
        });

        const playerDetails = response.data;
        
        // Update form data with the fetched player details
        setFormData({
          ...formData,
          userType: playerDetails.userType || '',
          position: playerDetails.position || '',
          preferredFoot: playerDetails.preferredFoot || '',
          height: playerDetails.height || '',
          weight: playerDetails.weight || '',
          nationality: playerDetails.nationality || '',
          dateOfBirth: playerDetails.dateOfBirth || '',
          yearsExperience: playerDetails.yearsExperience || '',
          teamName: playerDetails.teamName || '',
          tacticalFlexibility: playerDetails.tacticalFlexibility || '',
          notableAchievements: playerDetails.notableAchievements || '',
          currentClub: playerDetails.currentClub || '',
          contractEndDate: playerDetails.contractEndDate || '',
          appearances: playerDetails.appearances || '',
          goalsScored: playerDetails.goalsScored || '',
          assists: playerDetails.assists || '',
          cleanSheets: playerDetails.cleanSheets || '',
          matchesWon: playerDetails.matchesWon || '',
          injuries: playerDetails.injuries || '',
          certifications: playerDetails.certifications || '',
          trainingPhilosophy: playerDetails.trainingPhilosophy || '',
          playerVideoLinks: playerDetails.playerVideoLinks || '',
          fitnessLevel: playerDetails.fitnessLevel || '',
          agentContact: playerDetails.agentContact || '',
          socialMediaLinks: playerDetails.socialMediaLinks || ''
        });
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };

    fetchPlayerDetails();
  }, [token]);  // Re-run the effect when the token changes

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
      navigate("/main");
    } catch (error) {
      alert('Failed to save player details. Please try again.');
      console.error('Axios Error:', error.response?.data || error.message);
    }
  };

  const navigate = useNavigate(); // Hook to handle navigation



  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-start mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Player Details</h2>
      </div>
    <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="userType" className="block text-sm font-semibold text-gray-700">User Type</label>
      <select id="userType" name="userType" value={formData.userType} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Select</option>
        <option value="Player">Player</option>
        <option value="Coach">Coach</option>
      </select>
    </div>

    <div>
      <label htmlFor="position" className="block text-sm font-semibold text-gray-700">Position or Role</label>
      <select id="position" name="position" value={formData.position} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Select</option>
        <option value="Attacker">Attacker</option>
        <option value="Midfield">Midfield</option>
        <option value="Defender">Defender</option>
        <option value="Goalkeeper">Goalkeeper</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="preferredFoot" className="block text-sm font-semibold text-gray-700">Preferred Foot</label>
      <select id="preferredFoot" name="preferredFoot" value={formData.preferredFoot} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Select</option>
        <option value="Left">Left</option>
        <option value="Right">Right</option>
        <option value="Both">Both</option>
      </select>
    </div>

    <div>
      <label htmlFor="height" className="block text-sm font-semibold text-gray-700">Height (in cm)</label>
      <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="weight" className="block text-sm font-semibold text-gray-700">Weight (in kg)</label>
      <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700">Nationality</label>
      <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700">Date of Birth</label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="yearsExperience" className="block text-sm font-semibold text-gray-700">Years of Experience</label>
      <input type="number" id="yearsExperience" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>
  </div>

  <div>
    <label htmlFor="teamName" className="block text-sm font-semibold text-gray-700">Team Name</label>
    <input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
  </div>

  <div className="space-y-6">
    <div>
      <label htmlFor="tacticalFlexibility" className="block text-sm font-semibold text-gray-700">Tactical Flexibility</label>
      <input type="text" id="tacticalFlexibility" name="tacticalFlexibility" value={formData.tacticalFlexibility} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="notableAchievements" className="block text-sm font-semibold text-gray-700">Notable Achievements</label>
      <textarea id="notableAchievements" name="notableAchievements" value={formData.notableAchievements} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="currentClub" className="block text-sm font-semibold text-gray-700">Current Club</label>
      <input type="text" id="currentClub" name="currentClub" value={formData.currentClub} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="contractEndDate" className="block text-sm font-semibold text-gray-700">Contract End Date</label>
      <input type="date" id="contractEndDate" name="contractEndDate" value={formData.contractEndDate} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="appearances" className="block text-sm font-semibold text-gray-700">Appearances</label>
      <input type="number" id="appearances" name="appearances" value={formData.appearances} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>

    <div>
      <label htmlFor="goalsScored" className="block text-sm font-semibold text-gray-700">Goals Scored</label>
      <input type="number" id="goalsScored" name="goalsScored" value={formData.goalsScored} onChange={handleChange} className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-center">
      <Button type="submit">
        Save Details
      </Button>
    </div>
  </form>
</div>
  );
};

export default Player_details;
