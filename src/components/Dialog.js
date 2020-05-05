import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProjectDialog(props) {
  const [open, setOpen] = React.useState(props.isDialogOpen);
  const project = props.data.projects[props.data.project]
  useEffect(() => {
    setOpen(props.data.isDialogOpen)
  }, [props.data.isDialogOpen])
  const handleClose = () => {
    setOpen(false);
    props.data.setProject([])
    props.data.toggleDialog(false)
  };
  return (
    <div>
      {props.data.project.length ? <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.data.project}
        </DialogTitle>
        <DialogContent dividers>
          <ul>
            {project["desc"].map(desc => <Typography gutterBottom>
              <li>
                {desc.includes("https://") ? <a href={desc.split(" ").pop()} style={{ textDecoration: 'none' }} target="_blank">{desc}</a> :
                  desc
                }
              </li>
            </Typography>)}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            {project["Client"] ? 'Client : ' : "Requirement : Learning Purpose"}
            {
              project["Client"] ?
                <a href={project["Client"].split(";")[1]
                } target="_blank">{project["Client"].split(";")[0]} </a>
                : null}
          </Button>
        </DialogActions>
      </Dialog> : null
      }
    </div >
  );
}
