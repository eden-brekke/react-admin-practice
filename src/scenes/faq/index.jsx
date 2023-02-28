import React from 'react'
import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMoreIcon } from '@mui/icons-material';
import { tokens } from "../../theme";
import Header from '../../components/Header';

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        </Box>
    )
}

export default Faq