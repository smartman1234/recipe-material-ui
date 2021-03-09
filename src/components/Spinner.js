import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
