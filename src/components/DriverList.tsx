import React, { useEffect, useState } from 'react';
import { getDrivers } from '../api';

const DriverList: React.FC = () => {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driversData = await getDrivers();
        setDrivers(driversData);
      } catch (error) {
        console.error('Failed to fetch drivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Drivers</h2>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Drivers</h2>
      <ul className="list-disc pl-5 space-y-2">
        {drivers.map(driver => (
          <li key={driver.driverId} className="bg-gray-100 p-3 rounded-lg shadow-md">
            {driver.givenName} {driver.familyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
