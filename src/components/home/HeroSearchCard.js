import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HeroSearchResultsCard from "./HeroSearchResultsCard";

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
        Hero Search
      </Typography>
      <Typography>
        Search for a particular hero to examine their details
      </Typography>
      <HeroSearchResultsCard />
    </Paper>
  );
};

export default HeroListCard;
