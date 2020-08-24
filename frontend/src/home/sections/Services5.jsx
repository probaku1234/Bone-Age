import React, { useState } from "react";
import { Tabs, Tab, Grid, Icon } from "@material-ui/core";

const Service5 = () => {
  const [state, setState] = useState({
    value: 0,
  });

  const featureList = [
    {
      imageUrl: "./assets/images/x-ray.png",
      title: "How do I get started?",
      text:
        "Simply create a boneage.com account and upload a bone age x-ray(left hand and wrist) of your child onto boneage.com.  Within 15 minutes you will receive a Bone Age Assessment report.  This Assessment will display your child’s “Bone Age” vs his/her actual age",
    },
    {
      imageUrl: "./assets/images/x-ray.png",
      title: "What does bone age actually mean?",
      text: "Bone age is the degree of maturation of a child's bones. As a person grows from fetal life through childhood, puberty, and finishes growth as a young adult, the bones of the skeleton change in size and shape. ... A child's current height and bone age can be used to predict adult height"
    },
    {
      imageUrl: "./assets/images/x-ray.png",
      title: "Do I need a prescription in order to get a bone age x-ray?",
      text: "Yes, you can request one from your Doctor or boneage.com can connect you with a physician who can provide one for you to take to your local Imaging Center"
    },
    {
      imageUrl: "./assets/images/Bone_Age_Assessment.png",
      title: "What are my next steps once I receive the Bone Age Assessment report? ",
      text:
        "Once the report states that there is growth potential you should speak to a Specialist in this field such as a Pediatric Endocrinologist.  You may refer to our Specialists near you.",
    },
    {
      imageUrl: "./assets/images/dashboard.png",
      title: "How long is the turnaround time to receive the Bone Age Assessment report?",
      text:
        "Generally, it takes approximately 15 minutes to receive the report on our website.",
    },
  ];

  const handleChange = (event, value) => {
    setState({ value });
  };

  const { value } = state;
  let feature = featureList[value];

  return (
    <div className="section bg-light-gray" id="service5">
      <div className="container">
        {/* tab view */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          scrollButtons="auto"
        >
          <Tab label="HOW DO I GET STARTED" />
          <Tab label="WHAT DOES BONE AGE ACTUALLY MEAN"/>
          <Tab label="DO I NEED PRESCRIPTION" />
          <Tab label="BONE AGE ASSESSMENT" />
          <Tab label="TIME TO RECEIVE ASSESSMENT" />
        </Tabs>

        <Grid
          container
          spacing={4}
          className="mt-4 fade-in"
          alignItems="center"
        >
          <Grid item lg={5} md={7} sm={12} xs={12}>
            <div className="overflow-hidden">
              <img
                className="w-full elevation-z3"
                src={feature.imageUrl}
                alt="building"
              />
            </div>
          </Grid>
          <Grid item lg={5} md={7} sm={12} xs={12}>
            <div className="service5__details">
              <h3>{feature.title}</h3>
              <p className="whitespace-pre-wrap">{feature.text}</p>

              <a className="text-primary flex items-center" href="#details">
                View details
                <Icon className="service5__link-icon">navigate_next</Icon>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Service5;
