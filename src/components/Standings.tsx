import React, { useEffect, useState } from 'react';
import { getStandings } from '../api';

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const standingsData = await getStandings();
        setStandings(standingsData);
      } catch (error) {
        console.error('Failed to fetch standings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Standings</h2>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Standings</h2>
      <ul className="list-disc pl-5 space-y-2">
        {standings.map(driverStanding => (
          <li key={driverStanding.Driver.driverId} className="bg-gray-100 p-3 rounded-lg shadow-md">
            {driverStanding.position}: {driverStanding.Driver.givenName} {driverStanding.Driver.familyName} ({driverStanding.points} points)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Standings;
