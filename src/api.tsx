import axios from 'axios';

const ERGAST_API_BASE_URL = 'https://ergast.com/api/f1';

export const getDrivers = async () => {
  const response = await axios.get(`${ERGAST_API_BASE_URL}/current/drivers.json`);
  return response.data.MRData.DriverTable.Drivers;
};

export const getTeams = async () => {
  const response = await axios.get(`${ERGAST_API_BASE_URL}/current/constructors.json`);
  return response.data.MRData.ConstructorTable.Constructors;
};

export const getStandings = async () => {
  const response = await axios.get(`${ERGAST_API_BASE_URL}/current/driverStandings.json`);
  return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};