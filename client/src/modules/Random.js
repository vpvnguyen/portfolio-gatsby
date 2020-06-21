import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = ({ results = 1 }) => {
  const [person, setPerson] = useState();

  useEffect(() => {
    const getRandomPerson = async () => {
      const randomPerson = await axios.get(
        `https://randomuser.me/api?results=${results}`
      );
      setPerson(JSON.stringify(randomPerson, null, 2));
    };
    getRandomPerson();
  }, [results]);

  return (
    <div>
      <pre>{person}</pre>
    </div>
  );
};

export default Random;
