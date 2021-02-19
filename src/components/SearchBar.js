import { useRef } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    width: 800,
    maxWidth: "100%",
    margin: "auto",
    marginBottom: theme.spacing(5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function SearchBar() {
  const classes = useStyles();
  const inputRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${inputRef.current.value}`);
  };

  return (
    <Paper onSubmit={handleSubmit} component="form" className={classes.root}>
      <InputBase
        inputRef={inputRef}
        className={classes.input}
        placeholder="Search Recipies"
        inputProps={{ "aria-label": "search google maps" }}
        required
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
