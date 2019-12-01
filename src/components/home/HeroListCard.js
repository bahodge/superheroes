import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const HeroListCard = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Typography variant="h5" component="h3">
        All Heros
      </Typography>
      <Typography>
        This is a full list of all the available heroes to battle with. The
        heroes are all pulled from the Super Hero API.
      </Typography>
    </Paper>
  );
};

export default HeroListCard;
