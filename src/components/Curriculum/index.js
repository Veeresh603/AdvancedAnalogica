import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { BsLock } from "react-icons/bs"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export default function CustomAccordion(props) {
  const { curriculum } = props
  // console.log(curriculum)
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Wrapper>
    {curriculum.map(l => {
      return(
        <Accordion
        square
        expanded={expanded === `${l.panel}`}
        onChange={handleChange(`${l.panel}`)}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography key={l.id}>
            {l.title}
            <BsLock className="lock_icon" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {l.subtopic.map(d => (
              <li key={d.id} className="lessons_panel">{d.topic}</li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
      )
    })}
     
         
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 20px;
  width: 80%;
 height: auto;
 @media (max-width:479px){
   width:100%;
 }
  .MuiCollapse-entered {
    background-color: #c4c4c4;
  }
  li {
    width: 100%;
    list-style: none;
    font-size: 16px;
    font-family: var(--family);
    padding: 10px 0;
  }
  .lessons_panel {
    background-color: #f8f8f8;
    margin-bottom: 5px;
    padding-left: 5px;
    color: #000000;
    padding-left: 16px;
  }
  .MuiCollapse-entered {
    width: 100%;
    padding: 0px;
  }
  .MuiCollapse-entered
    > div:nth-child(1)
    > div:nth-child(1)
    > div:nth-child(1)
    > div:nth-child(1)
    > p:nth-child(1) {
    width: 100%;
    padding: 0px;
  }
  .MuiCollapse-entered {
    padding: 0px;
    background-color: #ffffff;
  }
  div.MuiPaper-root {
    font-size: 20px;
    color: var(--primaryColor);
  }
  /* .MuiCollapse-entered > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1){
          color: #000000;
          padding-left: 16px;
          background-color: #ffffff;
        } */
  .lock_icon {
    color: black;
  }
  div.MuiPaper {
    color: var(--primaryColor);
  
  }
  div.MuiPaper-root{
    margin-bottom:20px !important;
  }
`
