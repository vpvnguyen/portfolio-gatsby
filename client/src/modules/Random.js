import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = ({ results = 1 }) => {
  const [person, setPerson] = useState();

  useEffect(async () => {
    const getRandomPerson = await axios.get(
      `https://randomuser.me/api?results=${results}`
    );
    setPerson(JSON.stringify(getRandomPerson, null, 2));
  }, [results]);

  return (
    <div>
      <pre>{person}</pre>
    </div>
  );
};

export default Random;
