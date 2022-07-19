import React from "react";
import CountdownTimer from "./components/CountdownTimer";

import "./App.css";
import Topbar from "./components/Topbar";

export default function App() {
  const DAYS_TO_EXPIRY_MS = 3 * 24 * 60 * 60 * 1000; // Enter time for expiry
  const CURRENT_IN_MS = new Date().getTime(); // fetches current time

  const dateTimeAfterSelectedDays = CURRENT_IN_MS + DAYS_TO_EXPIRY_MS;

  return (
    <div className="App">
      <Topbar />
      <h1>Shinda</h1>
      <h1>JACKPOT YETU</h1>
      <CountdownTimer targetDate={dateTimeAfterSelectedDays} />
    </div>
  );
}
