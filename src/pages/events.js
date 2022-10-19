import React, { useState } from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import EventCardFlip from "../components/EventCardFlip"

import { getAllEvents } from "./api/events/all";

//Need to install react-card-flip from npm with `npm i react-card-flip` to src folder
const Events = ({ data }) => {
  return (
    <Container justifycontent="center" alignitems="center" maxWidth="lg">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        mt={10}
        textAlign="center"
        sx={{ typography: { xs: "h4", lg: "h3" } }}
      >
        Upcoming Events
      </Typography>


      {/* <EventCardFlip /> */}
      {data.map((event) => (
        <EventCardFlip
          title={`${event.title}`}
          locationType={`${event.location.type}`}
          locationData={`${event.location.data}`}
          dateWeekday={`${event.date.weekday}`}
          dateDay={`${event.date.day}`}
          dateMonth={`${event.date.month}`}
          dateYear={`${event.date.year}`}
          dateTimeStart={`${event.date.time.start}`}
          dateTimeEnd={`${event.date.time.end}`}
          dateTimezone={`${event.date.time.timezone}`}
          description={`${event.description}`}
          calendarLink={`${event.calendar.link}`}
        />
      ))}
    </Container>
  );
};

export default Events;

export async function getServerSideProps() {
  const data = await getAllEvents().then(function(data) { return data })
  return { props: { data } }
}