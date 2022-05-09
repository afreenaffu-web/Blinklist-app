import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/theme";

import time from "../../atoms/Images/time.svg";
import person from "../../atoms/Images/person.svg";

import CurrentlyReading from "../../Organisms/GridOfBooks/CurrentlyReading";
import FinishedReading from "../../Organisms/GridOfBooks/FinishedReading";
const useStyles = makeStyles({
  bookName: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    top: "23px",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: "284px",
    height: "466px",
  },
  author: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    paddingTop: "16px",
    color: "#6D787E",
    height: "20px",
  },
  read: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    paddingTop: "17px",
    paddingLeft: "5.67px",
  },
  reads: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
    height: "18px",
    width: "64px",
    left: "24px",
    top: "1px",
    borderRadius: "nullpx",
    paddingLeft: "1px",
  },
  time: {
    height: "13.67px",
    width: "16.67px",
    left: "1.67px",
    borderRadius: "0px",
    paddingTop: "17.67px",
    paddingRight: "5.67",
  },
  progress: {
    background: "#F1F6F4",
    top: "15px",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
    paddingTop: "5px",
    height: "15px",
    width: "283px",
    left: "0px",
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#E1ECFC",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#E1ECFC",
    },
  },
  person: {
    height: "13.5px",
    width: "13.33px",
    left: "3.33px",
    top: "3px",
    borderRadius: "0px",
    paddingLeft: "47.33px",
  },

  content: {
    padding: 12,
  },
  button: {
    height: "20px",
    left: "11.5px",
    top: "14px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#0365F2",
    textTransform: "initial",
    marginLeft: "110px",
  },
  addButton: {
    height: "20px",
    color: "#0365F2",
  },
});

interface BookCardProps {
  bookName: string;
  author: string;
  readTime: string;
  reads: string;
  image: string;
  children?: any;
  buttonName: string;
  id: number;
  incCount?: any;
}
const BookCard: React.FunctionComponent<BookCardProps> = (props) => {
  const classes = useStyles();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    if (props.buttonName === "Finished") {
      const currentBook = CurrentlyReading.filter(
        (book: {
          id: number;
          src: string;
          name: string;
          author: string;
          duration: string;
          noOfReads: string;
        }) => book.id === id
      );
      FinishedReading.push(...currentBook);
      const index = CurrentlyReading.findIndex(
        (book: { id: number }) => book.id === id
      );
      CurrentlyReading.splice(index, 1);
      props.incCount();
    } else {
      const finishedBook = FinishedReading.filter(
        (book: { id: number }) => book.id === props.id
      );
      CurrentlyReading.push(...finishedBook);
      const index = FinishedReading.findIndex(
        (book: { id: number }) => book.id === props.id
      );
      FinishedReading.splice(index, 1);
      props.incCount();
    }
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Card variant="outlined" className={classes.card}>
          <CardMedia component="img" image={props.image} height="292" />
          <CardContent className={classes.content}>
            <Typography variant="subtitle1" className={classes.bookName}>
              {props.bookName}
            </Typography>
            <Typography className={classes.author}>{props.author}</Typography>
            <div style={{ display: "flex" }}>
              <div>
                <img src={time} className={classes.time} alt="clock" />
                <Typography variant="caption" className={classes.read}>
                  {props.readTime}
                </Typography>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <img src={person} className={classes.person} alt="person" />
                <Typography variant="caption" className={classes.reads}>
                  {props.reads}
                </Typography>
              </div>
            </div>
          </CardContent>
          <Button
            variant="text"
            onClick={(event) => handleClick(event, props.id)}
            sx={{ padding: "0px" }}
          >
            <Typography variant="body1" className={classes.button}>
              {props.buttonName}
            </Typography>
          </Button>
          <React.Fragment>
            <LinearProgress
              variant="determinate"
              value={100}
              className={classes.progress}
            ></LinearProgress>
          </React.Fragment>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default BookCard;
