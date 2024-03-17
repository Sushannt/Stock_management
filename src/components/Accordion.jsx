import { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

const AccordionComponent = ({ title, icon, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={toggleAccordion}
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        IconButtonProps={{ edge: "end" }}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ maxHeight: 30 }}
      >
        {icon}
        <Typography className="my-auto me-auto ">{title}</Typography>
        <IconButton onClick={toggleAccordion}>
          {expanded ? (
            <KeyboardArrowDown sx={{ color: "white" }} />
          ) : (
            <KeyboardArrowRight sx={{ color: "white" }} />
          )}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ margin: "0 auto", padding: "0 auto" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
