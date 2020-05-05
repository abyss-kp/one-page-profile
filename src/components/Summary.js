import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      minHeight: "89vh",
      maxHeight: '89vh',
    },
    marginTop: '2px',
    minHeight: "89vh",
    maxHeight: '89vh',
    transitionDuration: '0.3s',
    color: "#00ff7F"
  },
  media: {
    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 200,
    },
    height: 350,
    width: 350,
    borderRadius: '50%',
    margin: '0 auto'
  },
  link: {
    // position: 'sticky',
    display: 'flex',
    justifyContent: 'space-around',
    '& button': {
      color: "#00ff7F"
    }
  },
  summary: {
    color: "#00ff7F",
    [theme.breakpoints.down("xs")]: {
      fontSize: '17px',
    },
    textAlign: 'justify',
    fontSize: '20px'
  }
}));

export default function Summary(props) {
  const classes = useStyles();
  return (
    <div id="Summary">
      <Card className={classes.card} style={{ backgroundImage: `url(${props.data[0].fields.images[4].fields.file.url})` }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.data[0] ? props.data[0].fields.images[0].fields.file.url : ""}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="p" style={{ textAlignLast: 'center' }}>
              Engineer<FontAwesomeIcon icon={faLaptop} /> | Techie
            <FontAwesomeIcon icon={faCode} />
            </Typography>
          </CardContent>
          <Typography gutterBottom variant="subtitle2" component="p" className={classes.summary}>
            {props.data[0] && <>
              <ul>
                {
                  props.data[0].fields.summary.split(".").map(itm => <li>{itm}</li>)
                }
              </ul>
            </>
            }
          </Typography>
          <Typography className={classes.link}>
            <Button size="small" color="primary" onClick={() => window.open("https://www.instagram.com/_kapi1/", "_blank")}>
              <InstagramIcon />
            </Button>
            <Button size="small" color="primary" onClick={() => window.open("https://github.com/abyss-kp", "_blank")}>
              <GitHubIcon />
            </Button>
            <Button size="small" color="primary" onClick={() => window.open("https://stackoverflow.com/users/11693215/kapil-pandey", "_blank")}>
              <CodeIcon />
            </Button>
            <Button size="small" color="primary" onClick={() => window.open("https://covid-updates.herokuapp.com/", "_blank")}
            >
              <LanguageIcon />
            </Button>
          </Typography>
        </CardActionArea >
      </Card>
    </div>
  );
}
