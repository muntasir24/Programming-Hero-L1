import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import createImg from "../assets/create.png";
import bookImg from "../assets/book.png";
import shareImg from "../assets/share.png";

const steps = [
  {
    label: "Create an account",
    description: "Sign up and set up your profile to get started.",
    image: createImg,
  },
  {
    label: "Book a session",
    description: "Choose a session that fits your schedule and preferences.",
    image: bookImg,
  },
  {
    label: "Exchange and learn new skill",
    description: "Interact, practice, and gain new skills through learning.",
    image: shareImg,
  },
];


export default function HowItWorks() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="my-5 text-center font-bold text-4xl text-gray-700 ">
          HOW IT WORKS
        </h1>
      </div>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
                sx={{
                  "& .MuiStepLabel-label": {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333",
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {/* Image */}
                <img
                  src={step.image}
                  alt={step.label}
                  style={{ width: "80px", marginBottom: "12px" }}
                />

                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
      </Box>
    </div>
  );
}
