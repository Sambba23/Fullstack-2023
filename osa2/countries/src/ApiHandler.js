import { useState, useEffect } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://studies.cs.helsinki.fi/restcountries/api/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchData();
  }, []);

  return countries;
}

export default useCountries;
