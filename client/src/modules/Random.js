import React, { useState, useEffect } from "react";

const Random = ({ results = 1 }) => {
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(response => response.json())
      .then(response => setPerson(response));
  }, [results]);

  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};

export default Random;
