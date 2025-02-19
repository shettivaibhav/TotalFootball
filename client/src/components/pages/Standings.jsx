import { useEffect, useState } from "react";
import axios from "axios";

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://football-highlights-api.p.rapidapi.com/standings?leagueId=33973&season=2023"; // Replace with correct endpoint
  const API_KEY = "6f3d8009bamsh381bb996202f7a9p134019jsn46a9a21bbdf7"; // Replace with your actual API key

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "x-rapidapi-host": "football-highlights-api.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
          },
        });

        // Extract standings data from response
        const data = response.data.groups[0].standings;
        setStandings(data);
      } catch (error) {
        console.error("Error fetching standings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Premier League Standings</h2>
      {loading ? (
        <p>Loading standings...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Logo</th>
              <th>Points</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals Scored</th>
              <th>Goals Conceded</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr key={team.team.id}>
                <td>{team.position}</td>
                <td>{team.team.name}</td>
                <td>
                  <img src={team.team.logo} alt={team.team.name} width="40" height="40" />
                </td>
                <td>{team.points}</td>
                <td>{team.total.wins}</td>
                <td>{team.total.draws}</td>
                <td>{team.total.loses}</td>
                <td>{team.total.scoredGoals}</td>
                <td>{team.total.receivedGoals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Standings;
