import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Stats = () => {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      const token = sessionStorage.getItem('token'); // Get the token from sessionStorage
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/stats', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request headers
          },
        });
        setPlayerStats(response.data); // Set player stats from the response
      } catch (error) {
        console.error('Error fetching player stats:', error);
      }
    };

    fetchPlayerStats();
  }, []);

  if (!playerStats) {
    return <div>Loading stats...</div>;
  }

  // Extracting stats from the playerStats object
  const {
    name,
    appearances,
    goalsScored,
    assists,
    cleanSheets,
    matchesWon,
  } = playerStats;

  // Calculating derived stats
  const matchesLost = appearances - matchesWon; // Matches lost = total appearances - matches won
  const goalsPerMatch = goalsScored / appearances;
  const assistsPerMatch = assists / appearances;
  const goalContributionPerMatch = (goalsScored + assists) / appearances;
  const cleanSheetsPerMatch = cleanSheets / appearances;
  const winRatio = (matchesWon / appearances) * 100;
  const lossRatio = (matchesLost / appearances) * 100;

  return (
    <div className="p-6">
  <h1 className="text-2xl font-bold mb-4">Your Stats</h1>
  <div className="border p-4 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      {/* Pie chart for Win/Loss Ratio */}
      <div className="mb-4 lg:w-1/2 flex justify-center items-center flex-col">
        <div className="w-48 h-48">
          <Pie
            data={{
              labels: ['Wins', 'Losses'],
              datasets: [
                {
                  data: [winRatio, lossRatio],
                  backgroundColor: ['#4caf50', '#f44336'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <p className="mt-4 text-center text-lg">
          <strong>Win/Loss Ratio:</strong> {winRatio.toFixed(2)}% / {lossRatio.toFixed(2)}%
        </p>
      </div>

      {/* Stats Summary */}
      <div className="lg:w-1/2">
        <div className="space-y-4">
          <p className="text-xl"><strong>Goals per Match:</strong> {goalsPerMatch.toFixed(2)}</p>
          <p className="text-xl"><strong>Assists per Match:</strong> {assistsPerMatch.toFixed(2)}</p>
          <p className="text-xl"><strong>Goal Contribution per Match:</strong> {goalContributionPerMatch.toFixed(2)}</p>
          <p className="text-xl"><strong>Clean Sheets per Match:</strong> {cleanSheetsPerMatch.toFixed(2)}</p>
          <p className="text-xl"><strong>Player Efficiency:</strong> {((goalsScored + assists) / appearances * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Stats;
