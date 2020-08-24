import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  containerHolder: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`,
  },
  container: {
    paddingTop: "6rem !important",
    paddingBottom: "6rem !important",
    maxWidth: "100%"
  },
}));

const Intro6 = () => {
  const classes = useStyles();
  const slides = [
    {
      title: "Vision of Heathhub",
      description:
        "To innovate the Medical Service Paradigm through our Vision of Personal Healthy Life and Patient First Medical Service with medical image storage device software and platforms.",
    },
    {
      title: "Values",
      description:
        "The value that Health Hub pursues is “patient-centered”. We believe that contributing to the “healthy life of individuals” by developing healthcare solutions that can change from a hospital-centered medical environment to a patient-centered medical environment is the highest value of corporate activities.",
    },
    {
      title: "Boneage",
      description:
        "AI Driven, 97.6% Accurate, Uses advanced AI-powered bone assessment system to instantly get an accurate result",
    },
  ];

  return (
    <section className="section" id="intro6">
      <div className={classes.containerHolder}>
        <Slider autoplay="10000">
          {slides.map((slide, index) => (
            <div
              className={clsx(
                "container flex-column justify-center items-center text-white",
                classes.container
              )}
              key={index}
            >
              <h1 className="font-normal text-center text-48 mb-4 mt-0">
                {slide.title}
              </h1>
              <p className="max-w-550 text-center text-inherit my-12">
                {slide.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Intro6;
