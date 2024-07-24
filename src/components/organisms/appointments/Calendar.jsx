import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Breadcrumbs, Typography, MenuItem, Select } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import CustomSearch from "../../atoms/Search";
import GenericDatePicker from "../../atoms/DatePicker";

function Calendar() {
  const [calendarView, setCalendarView] = useState("dayGridMonth");
  const calendarRef = React.createRef();

  const handleViewChange = (event) => {
    const view = event.target.value;
    setCalendarView(view);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to=""
      className="font-bold text-[18px]"
    >
      Patient
    </Link>,
    <Typography key="3" color="text.primary" variant="h6">
      Appointments
    </Typography>,
  ];

  const events = [
    {
      title: "Appointment Type 1",
      start: "2024-06-24",
      status: "pending",
      time: "10:00 AM",
    },
    {
      title: "Appointment Type 2",
      start: "2024-06-25",
      status: "completed",
      time: "10:00 AM",
    },
    {
      title: "Appointment Type 3",
      start: "2024-06-26",
      status: "canceled",
      time: "10:00 AM",
    },
  ];

  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="flex justify-between items-center flex-wrap mb-4 prescription-dblock">
        <div>
          <button onClick={() => calendarRef.current.getApi().today()}>
            Today
          </button>
        </div>
        <div className="flex justify-end items-center gap-3 prescription-dblock">
          <Select
            value={calendarView}
            onChange={handleViewChange}
            className="h-[45px] w-25 search-width relative left-[60px]"
            style={{ borderRadius: "50px" }}
          >
            <MenuItem value="dayGridMonth">Month</MenuItem>
            <MenuItem value="timeGridWeek">Week</MenuItem>
            <MenuItem value="timeGridDay">Day</MenuItem>
          </Select>
          {/* <div>
            <button onClick={() => calendarRef.current.getApi().prev()}>
              Prev
            </button>
            <button onClick={() => calendarRef.current.getApi().next()}>
              Next
            </button>
          </div> */}
          <GenericDatePicker
            borderRadius="50px"
            width="125px"
            height="45px"
            position="relative"
            left="54px"
            top=".5px"
          />

          <CustomSearch
            margin="0px"
            padding="3px"
            placeholder="Search"
            enableIcon={true}
            borderRadius="50px"
            className="search-width"
          />
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        weekends={true}
        headerToolbar={false}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dayMaxEventRows={2}
        dayMaxEvent={true}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  const { status, time } = eventInfo.event.extendedProps;
  const statusClass = `status-${status}`;

  return (
    <div className={`event-content ${statusClass}`}>
      <div>
        <b>{eventInfo.event.title}</b>
      </div>
      <div>Time: {time}</div>
      <div>Status: {status}</div>
    </div>
  );
}

export default Calendar;
