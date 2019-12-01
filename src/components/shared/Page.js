import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const Page = props => {
  const styles = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Super Hero Battle
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Battle</Button>
        </Toolbar>
      </AppBar>
      <Box my={4}>{props.children}</Box>
    </Container>
  );
};
export default Page;
