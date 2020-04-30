import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cx from 'clsx';

import useStyles from './ProjectItemStyle';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  const classes = useStyles();
  return (
    <Box
      className={cx(classes.flexCol, classes.mr, classes.box)}
      borderRadius={8}
    >
      <div className={classes.flexCol}>
        <Typography className={classes.mr} varient='body1'>
          {project.title}
        </Typography>
        <Typography
          varient='body2'
          color='textSecondary'
          className={classes.mr}
        >
          {project.organizationId}
        </Typography>
      </div>
      <div className={classes.flexCol}>
        <Typography
          varient='subtitle2'
          color='secondary'
          className={classes.mr}
        >
          {project.state}
        </Typography>
        <Link to={`/project-details/${project.id}`} className={classes.Link}>
          <Button
            variant='contained'
            size='small'
            color='primary'
            className={classes.margin}
          >
            View
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default ProjectItem;
