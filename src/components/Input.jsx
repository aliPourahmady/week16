import { useState } from "react";
import myData from "../cities.json";

const Input = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSeuggestions] = useState([]);
  const [hint, setHint] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const hints = myData.find((data) => data.startsWith(value));
      const suggestion = myData.filter((data) => data.startsWith(value));
      setHint(hints);
      setSeuggestions(suggestion);
    }
  };
  const clickHandler = (suggest) => {
    setQuery(suggest);
    setHint("");
    setSeuggestions([]);
  };
  const keyHandler = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      if (hint) {
        setQuery(hint);
        setHint("");
        setSeuggestions([]);
      }
    } else {
      return;
    }
  };
  return (
    <div className="container">
      <div className="input">
        <label htmlFor="input">{hint}</label>
        <input
          type="text"
          id="input"
          value={query}
          onChange={changeHandler}
          onKeyDown={keyHandler}
        />
      </div>
      {query && !suggestions.length && !myData.includes(query) && (
        <div className="box">
          <li>Match Not Found</li>
        </div>
      )}
      {!!suggestions.length && (
        <div className="box">
          {suggestions.map((suggest) => (
            <li onClick={() => clickHandler(suggest)}>{suggest}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
