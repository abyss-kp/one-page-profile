import React, { useEffect } from 'react';
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
    height: 335,
    width: 335,
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
      fontSize: '15px',
    },
    textAlign: 'justify',
    fontSize: '23px',
    margin: '10px',
    fontFamily: "'VT323', 'monospace', 'sans-serif'"
  }
}));

export default function Summary(props) {
  const classes = useStyles();
  const makeMyInfo = (data) => {
    let para = document.getElementById("myInfo")
    if (!para)
      return null
    var arr = data.split('.');
    var ele = arr.map(line =>
      `<span>*</span><span>${line.split("").join('</span><span>')} `
    ).join("<span><br></span>")
    var newElement = document.createElement('div');
    newElement.innerHTML = ele;
    newElement.querySelectorAll("span").forEach(tag => {
      tag.style.display = "none";
      para.appendChild(tag)
    })
    para.querySelectorAll("span").forEach((e, i) => {
      e.style.cssText = "display: inline;opacity:0;"
      setTimeout(() => {
        e.style.opacity = 1
      }
        , 100 * i)
    })
  }
  useEffect(() => {
    makeMyInfo(props.data[0].fields.summary)
  }, [])
  return (
    <div id="Summary">
      <div class="bg-image" style={{
        backgroundImage: `url(${props.data[0].fields.images[4].fields.file.url})`, height: '100vh',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        filter: 'blur(8px)'
      }}></div>
      <Card className={classes.card}>
        <CardActionArea style={{ cursor: 'default', height: '90vh', zIndex: "100" }}>
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
          <Typography gutterBottom variant="subtitle2" id="myInfo" component="p" className={classes.summary}>
            {/* {props.data[0] && <>
              {
                makeMyInfo(props.data[0].fields.summary)
                props.data[0].fields.summary.split(".").map(itm =>{itm})
              }
            </>
            } */}
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
