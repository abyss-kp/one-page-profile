import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLaptop, faCode } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

import LanguageIcon from '@material-ui/icons/Language';
import "font-awesome/css/font-awesome.css";
const useStyles = makeStyles({
  card: {
    // maxWidth: 445,
    // minHeight: 650,
    minHeight: "100vh",
    maxHeight: '100vh',
    // width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw',
    color: "#00ff7F",
  },
  media: {
    height: 300,
    width: 300,
    borderRadius: '50%',
    margin: '0 auto'
  },
  action: {
    color: "#00ff7F",
    margin: "auto"
  },
  link: {
    color: "#00ff7F",
    textAlignLast: 'center',
    '& a': {
      color: "#00ff7F",
      textAlignLast: 'center'
    }
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ backgroundImage: `url(${props.data[0].fields.images[2].fields.file.url})` }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data[0] ? props.data[0].fields.images[0].fields.file.url : ""}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{ textAlignLast: 'center' }}>
            {props.data[0] ? props.data[0].fields.name : ""}
          </Typography>
          <Typography gutterBottom variant="h6" component="p" style={{ textAlignLast: 'center' }}>
            Engineer<FontAwesomeIcon icon={faLaptop} /> | Tech Enthusiast<FontAwesomeIcon icon={faCode} />
          </Typography>
        </CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
          <a href="#summary" >Summary</a>
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
          <a href="#education" >Education</a>
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
          <a href="#projects" >Projects</a>
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
          <a href="#achievements" >Achievements</a>
        </Typography>
      </CardActionArea >
      <CardActions  >
        <Button size="small" color="primary" onClick={() => window.open("https://www.instagram.com/_kapi1/", "_blank")} className={classes.action}>
          <InstagramIcon />
        </Button>
        <Button size="small" color="primary" onClick={() => window.open("https://github.com/abyss-kp", "_blank")} className={classes.action}>
          <GitHubIcon />
        </Button>
        <Button size="small" color="primary" onClick={() => window.open("https://stackoverflow.com/users/11693215/kapil-pandey", "_blank")} className={classes.action}>
          <CodeIcon />
        </Button>
        <Button size="small" color="primary" onClick={() => window.open("https://covid-updates.herokuapp.com/", "_blank")} className={classes.action} >
          <LanguageIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
