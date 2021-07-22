import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";
import logo from "../img/vs5.png";

const MyCard = ({ match }) => {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    getMatchDetail(id)
      .then((data) => {
        setDetail(data);
        console.log(data);
        handleOpen();
      })
      .catch((error) => console.log("could not load data"));
  };

  const getMatchCard = () => {
    return (
      <Card style={{ marginTop: 25 }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match["team-1"]}</Typography>{" "}
            </Grid>

            <Grid item>
              <img style={{ width: 200 }} src={logo} alt="vs" />
            </Grid>

            <Grid item>
              {" "}
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <Button
                onClick={() => handleClick(match.unique_id)}
                size="small"
                color="primary"
              >
                Show Details
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" color="primary">
                Start Time {new Date(match.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dailog-description">
          <Typography>{detail.stat} </Typography>
          <Typography>
            {" "}
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted ? "Started" : "still not started"}{" "}
            </span>
          </Typography>
          <Typography>
            {" "}
            Score{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Fragment>
      {getMatchCard()}
      {getDialog()}
    </Fragment>
  );
};

export default MyCard;
