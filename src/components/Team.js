import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Team = ({ name, members, projectName, description }) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} className="m-9" >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {projectName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {members?.map(member => <span key={member}>{member} + {bull} </span>)}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card >
    )
}

export default Team;
