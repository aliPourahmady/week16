import { useState } from "react";
import myData from "../cities.json";
import SuggestionBox from "./SuggestionBox";

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
  return (
    <>
      <div className="input">
        <label htmlFor="input">{hint}</label>
        <input type="text" id="input" value={query} onChange={changeHandler} />
      </div>
      <div>
        {suggestions.map((suggest) => (
          <SuggestionBox suggest={suggest} />
        ))}
      </div>
    </>
  );
};

export default Input;
