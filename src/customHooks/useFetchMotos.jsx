import { useState, useEffect } from "react";

const API_URL = "http://localhost:3002/motors";

const useFetchMotos = (id = "") => {
  const [motos, setMotos] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const motoData = await response.json();
        setMotos(motoData);

        setLoading(false);
      } catch (error) {
        setError("Eroare 888");

        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { motos, loading, error, setError };
};

export default useFetchMotos;
