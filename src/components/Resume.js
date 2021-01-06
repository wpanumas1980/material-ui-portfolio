import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#00695c",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #b2ebf2",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #b2ebf2",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#4dd0e1 #4dd0e1 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#b2ebf2",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #4dd0e1 #4dd0e1",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#4dd0e1",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#4dd0e1",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#4dd0e1",
  },
  subtitle1: {
    color: "#b2ebf2",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
          <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem} >
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          Somboon Advance Technology (SAT)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          New business and Product development
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Researched and Developed EV and AGV etc.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem} >
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          Somboon Advance Technology (SAT)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Sales representative
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Coorperate with inhouse and outsite customer
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
          2008
        </Typography>
        <Box component="div" className={classes.timeLineItem} >
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          Bangkok spring industrial (BSK)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Process Engineer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Process improvement and production planing
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
          2004
        </Typography>
        <Box component="div" className={classes.timeLineItem} >
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          NHK Spring (Thailand)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Process Engineer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Process improvement and porduction facility design
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
          2004
        </Typography>
        <Box component="div" className={classes.timeLineItem} >
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          king mongkut's institute of technology north bangkok (KMITNB) 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Graduated
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Industrial Engineer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
