import * as React from 'react';
import Chart from "./Chart.js";
import Dashboard from "./Dashboard.js";
import Deposits from "./Deposits.js";
import Reviews from "./Reviews.js";
import Title from "./Title.js";
import listItems from "./listItems.js";

function App() {
  return (
    <div>
      <Chart></Chart>
      <Dashboard></Dashboard>
      <Deposits></Deposits>
      <Reviews></Reviews>
      <Title></Title>
      <listItems></listItems>
    </div>
  );
}

export default App;
