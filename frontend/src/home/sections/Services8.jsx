import React from "react";
import { Grid } from "@material-ui/core";
import StrategyIcon from "../common/icons/StrategyIcon";
import PenIcon from "../common/icons/PenIcon";
import ManagementIcon from "../common/icons/ManagementIcon";
import Feature4IconCreator from "../common/icons/Feature4IconCreator";

const Services8 = () => {
  const serviceList = [
    {
      title: "How it works",
      icon: StrategyIcon,
      description:
        "Use advanced AI-powered bone assessment system to instantly get an accurate result. Boneage.com is an AI-Driven TW3 Bone Age Assessment meant to support Doctors in the analysis of skeletal maturity.ROIs used in the TW3-RUS method. The TW3 method evaluates the 13 ROIs (i.e., the radius, ulna and short bones of the first, third, and fifth fingers) to determine the maturity levels of individual ROIsAfterwards, each level is re-placed by a maturity score, and the total score is calculated. Finally, the total score is convert-ed into a bone age.",
    },
    {
      title: "How accurate is boneage.com?",
      icon: PenIcon,
      description: "Clinical tests(trials?) have shown that boneage.com is 97.6% accurate.  Boneage delivers a Bone Age Assessment report.  It may be used to supplement the analysis and results from the Doctor based on whatever methods they utilize. "
    },
    {
      title: "Who determines the treatment option?",
      icon: ManagementIcon,
      description: "Once the patient goes to the Doctor you are in full control of the treatment process.  We can also recommend proven treatment options but the final decision is made by the health care provider treating the patient."
    },
  ];

  return (
    <section className="section" id="services8">
      <div className="container">
        <Grid container spacing={6} justify="space-between">
          {serviceList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div className="text-center max-w-252 mx-auto">
                <Feature4IconCreator>
                  <item.icon color="primary" className="text-72" />
                </Feature4IconCreator>
                <h5 className="mt-8 font-medium">{item.title}</h5>
                <p className="max-w-400">
                  {item.description}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services8;
