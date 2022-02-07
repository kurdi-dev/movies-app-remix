import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SeasonsDetail({ seasonData }) {
  const seasonsAcocordion = seasonData.map((season, i) => (
    <Accordion key={season._id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${i + 1}a-content`}
        id={`panel${i + 1}a-header`}
      >
        <Typography>{season.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {season.episodes.map((episode) => {
            return (
              <ListItem key={episode.id}>
                <ListItemText
                  primary={`${episode.name}`}
                  secondary={`Epesode: ${episode.episode_number}, Air Date: ${episode.air_date}`}
                />
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  ));

  if (!seasonsAcocordion) {
    return null;
  }
  return (
    <Box py={4} mb={4} width='100%'>
      <Box py={2}>
        <Typography color='primary' variant='button' sx={{ fontSize: 18 }}>
          Season Detail
        </Typography>
      </Box>
      {seasonsAcocordion}
    </Box>
  );
}
