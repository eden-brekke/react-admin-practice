import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // once we click on a date we unselect immediately so we can enter the title for the event instead
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      }); // add the event into the calendar app
    }
  }; // typically you'd create a modal instead with a check to open the modal, we're using the native JS prompt just to keep it simple

  const handleEventClick = (selected) => {
    if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  } // add a function when you click the event, it will give you the prompt
  return (
    <Box m='20px'> 
      <Header title='CALENDAR' subtitle="Full Calendar Interactive Page"/>
      <Box display='flex' justifyContent='space-between'>
        {/* Calendar Sidebar  */}
        {/* flex style shorhand: grow, shink, and width or percentage of space it wants to take */}
        <Box flex='1 1 20%'
        backgroundColor={colors.primary[400]}
        p='15px'
        borderRadius='4px'> 
          <Typography variant='h5'>
            Events
          </Typography>
          <List>
            {currentEvents.map((event)=> (
              <ListItem 
                key={event.id} 
                sx={{
                  backgroundColor: colors.greenAccent[500], 
                  margin: '10px 0', 
                  borderRadius:'2px'
                }}>
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {/* formatDate is a function provided by fullCalendar allows you to use the dates given and format them */}
                        {formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box 
          flex='1 1 100%' 
          ml='15px'
        >
          <FullCalendar 
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left:'prev, next today',
              center: 'title',
              right: 'dayGridMonth, timeGridWeek, timeGridDay, listMonth'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events)=> setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
    )
};

export default Calendar;
