import React, { useEffect, useState } from 'react';
import { getConstructorStandings } from '../api';

const ConstructorStandings: React.FC = () => {
  const [standings, setStandings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const standingsData = await getConstructorStandings();
         console.log(standingsData);
        setStandings(standingsData);
      } catch (error) {
        console.error('Failed to fetch constructor standings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Constructor Standings</h2>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Constructor Standings</h2>
      <ul className="list-disc pl-5 space-y-2">
        {standings.map(standing => (
          <li key={standing.Constructor.constructorId} className="bg-gray-100 p-3 rounded-lg shadow-md">
            <a href={standing.Constructor.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {standing.Constructor.Name}
            </a>
            <div>Constructor: {standing.Constructor.Name}</div>
            <div>Position: {standing.position}</div>
            <div>Points: {standing.points}</div>
            <div>Wins: {standing.wins}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConstructorStandings;
