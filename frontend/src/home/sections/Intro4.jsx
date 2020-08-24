import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeText: {
    color: theme.palette.text.primary,
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "80%",
      left: 0,
      right: 0,
      margin: "0 180px -50px -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
      transform: "rotate(45deg)",
      zIndex: -1,
      opacity: 0.1,
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "10%",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
    },
  },
}));

const Intro4 = () => {
  const classes = useStyles();

  return (
    <section className="section section-intro" id="intro4">
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/child_grow.png"
                alt="mobile-1"
              />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div>
              <h1 className="font-normal text-44 mt-0">
                Can my child grow taller?
              </h1>
              <p className="max-w-400 mb-8">
                Yes! This question however, can best be answered through a Bone
                Age Assessment. boneage.com utilizes TW3(Tanner-Whitehouse,
                third edition).
              </p>
              <p className="max-w-400 mb-8">
                Is my child still growing? How tall will my child be? Will my
                child be taller than me? Can I do anything to help my child grow
                more?
              </p>
              <p className="max-w-400 mb-8">
                If you have any of these questions then boneage.com is for you!
              </p>
              <p className="max-w-400 mb-8">
                We can tell you if your child is still growing and how much more
                he/she can still grow. We can also recommend methods that can
                support incremental growth and Specialists that can regiment
                proven treatments. Boneage.com is easy and our AI proven results
                are free for a limited time.
              </p>
              <p className="max-w-400 mb-8">
                Bone Age is an interpretation of skeletal maturity, typically
                based on radiographs of the left hand and wrist or knee, that
                has provided useful information in various clinical settings for
                75 years. Depending on your individual results there are
                treatments available that if taken at the right time can allow
                your child to grow up to 3 additional inches.
              </p>
              
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro4;
