import React, { useEffect, useState } from "react";

function AutoInput() {
  const [query, setQuery] = useState("");
  cosnt[(suggestion, setSuggestion)] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("../cities.json");
      const json = await res.json();
      console.log(json);
    };
    getData();
  }, []);
  const autoCompleteHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={suggestion}
        value={query}
        onChange={autoCompleteHandler}
      />
    </div>
  );
}

export default AutoInput;
