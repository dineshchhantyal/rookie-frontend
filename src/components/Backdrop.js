import React from 'react';
import Drop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    _backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const Backdrop = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleToggle}>
                {children}
            </Button>
            <Drop className={classes._backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Drop >
        </div>
    )
}

export default Backdrop;
