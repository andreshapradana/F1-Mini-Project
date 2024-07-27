import React, { useEffect, useState } from 'react';
import { getTeams } from '../api';

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsData = await getTeams();
        setTeams(teamsData);
      } catch (error) {
        console.error('Failed to fetch teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Teams</h2>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Teams</h2>
      <ul className="list-disc pl-5 space-y-2">
        {teams.map(team => (
          <li key={team.constructorId} className="bg-gray-100 p-3 rounded-lg shadow-md">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
