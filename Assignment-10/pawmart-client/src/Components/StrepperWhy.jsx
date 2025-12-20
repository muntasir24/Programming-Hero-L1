import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Handshake, ScanHeart, ShieldCheck } from "lucide-react";


const steps = [
  {
    label: "Trusted Rescue Partners",
    icon: <Handshake />,
    description: "All pets are rescued and verified through trusted shelters and partners of PawMart.",
  },
  {
    label: "Vaccinated & Health-Checked",
    icon:  <ScanHeart />,
    description: "Every pet comes with proper vaccinations, health checks, and care history for peace of mind.",
  },
  {
    label: "Support & Guidance",
    icon: <ShieldCheck />,
    description: "PawMart provides adoption support and guidance to help you bond with your new companion.",
  },
];



export default function StrepperWhy() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
             slotProps={{
          stepIcon: {
            sx: {
              color: '#4e2d69',             // inactive
              '&.Mui-active': { color: '#a855f7' },   // active
              '&.Mui-completed': { color: '#23a683' } // completed
            }
          }
        }}
       
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: "#23a683",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
            }}
          >
            {step.icon}
          </Box>
        </Box>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 ,justifyContent:"center",textAlign:"center" }}>
                <Button
                  sx={{
                    mt: 1,
                    mr: 1,
                    bgcolor: "#4e2d69", // primary color
                    color: "white",
                    px: 3,
                    py: 1,
                  }}
                  onClick={handleNext}
                
                >
                  {index === steps.length - 1 ? "PawMart" : "Next"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1,color: "#4e2d69", }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
    </Box>
  );
}
