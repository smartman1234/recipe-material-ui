import Landing from "./Landing";
import { Switch, Route, Link } from "react-router-dom";
import Category from "./Category";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import SearchRecipe from "./SearchRecipe";
import useLocalStorageState from "../hooks/useLocalStorageState";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function ScrollTop(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {
  const [darkState, setDarkState] = useLocalStorageState("darkMode", false);

  const paletteType = darkState ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="h6">The Meal Hub</Typography>
            </Link>
            <IconButton
              style={{ margin: "auto", marginRight: "0" }}
              aria-label="toggle dark mode"
              aria-controls="menu-appbar"
              aria-haspopup="false"
              onClick={handleThemeChange}
              color="inherit"
            >
              {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Box my={2}>
            <SearchBar />
            <Switch>
              <Route path="/" exact>
                <Landing />
              </Route>
              <Route path="/category/:id" exact>
                <Category />
              </Route>
              <Route path="/recipe/:id" exact>
                <Recipe />
              </Route>
              <Route path="/search/:query" exact>
                <SearchRecipe />
              </Route>
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
          </Box>
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
}

export default App;
