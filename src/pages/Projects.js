import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProjectDialog from '../components/Dialog'
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    minHeight: '100%'
  },
});

export default function Projects(props) {
  const classes = useStyles();
  const [isDialogOpen, toggleDialog] = useState(false)
  const [project, setProject] = useState([])
  useEffect(() => {
    // project.length ?
    toggleDialog(true)
    // : toggleDialog(false)
  }, [project])
  let projects = props.data[0].fields.projects
  let propsData = {
    projects,
    project,
    isDialogOpen,
    toggleDialog,
    setProject
  }
  return (
    <div style={{ margin: "110px 8px 0px 8px" }} id="Projects">
      <Grid container spacing={3}>
        {Object.keys(projects).map(project =>
          <> <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project}
                  height="180"
                  image={props.data[0].fields.projectImg.filter(itm => itm.fields.title === project.split(/(?=[A-Z])/).map(itm => itm[0]).join("").toLowerCase())[0].fields.file.url}
                  title={props.data[0].fields.projectImg.filter(itm => itm.fields.title === project.split(/(?=[A-Z])/).map(itm => itm[0]).join("").toLowerCase())[0].fields.file.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {projects[project]["Summary"]}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => {
                  setProject(project);
                  // toggleDialog(true)
                }}>
                  Know More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          </>
        )}
      </Grid>
      <ProjectDialog data={propsData}
      />
    </div >
  );
}
