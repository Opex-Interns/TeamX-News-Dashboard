import React from 'react';

function FormatDateWithDay(date) {
  // Array of weekday names
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let dayOfWeek = weekdays[date.getDay()];   // Sunday → Saturday
  let day = String(date.getDate()).padStart(2, "0"); // 01–31
  let month = months[date.getMonth()];       // January → December
  let year = date.getFullYear();

  return `${dayOfWeek}, ${day}-${month}-${year}`;
}

// 👉 "Sunday, 07-September-2025"

export default FormatDateWithDay;
