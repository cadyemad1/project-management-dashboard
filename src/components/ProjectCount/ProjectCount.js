import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './ProjectCountStyle';

const ProjectCount = ({ count }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Number of projects
        </Typography>
        <Grid
          container
          className={classes.center}
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h6">In progress</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.projectCount}>
              {count}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default ProjectCount;
