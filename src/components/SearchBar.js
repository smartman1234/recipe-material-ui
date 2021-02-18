import { useRef } from "react";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const inputRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="search recipe by text"
        autoComplete="false"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
