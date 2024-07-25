import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from "@mui/material"
import React from "react";

const MuiAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (isExpended: boolean, panel: string) => {
        setExpanded(isExpended ? panel : false);
    }

    return (
        <>
            <Accordion onChange={(event, isExpended) => handleChange(isExpended, 'panel1')} expanded={expanded == 'panel1'}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={(event, isExpended) => handleChange(isExpended, 'panel2')} expanded={expanded == 'panel2'}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded onChange={(event, isExpended) => handleChange(isExpended, 'panel3')} expanded={expanded == 'panel3'}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Accordion Actions
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </>
    )
}

export default MuiAccordion
