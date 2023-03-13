import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ResponsiveDrawer from "./ResponsiveDrawer";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  chart: {
    marginBottom: theme.spacing(2),
  },
}));


const Dashboard = () => {
  const classes = useStyles();
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);

  useEffect(() => {
    const chart1 = new Chart(chart1Ref.current, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(168, 92, 255 0.2)",
            borderColor: "#84ffff",
            borderWidth: 1,
            maxBarThickness: 70,
            minBarLength: 2,
            data: [12, 19, 15, 5, 2, 10, 7],
          },
        ],
      },
      options: {
        responsive: false, // Disable resizing
        maintainAspectRatio: false, // Disable aspect ratio
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    const chart2 = new Chart(chart2Ref.current, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgba(0, 255, 145, 0.2)",
            borderColor: "rgba(21, 0, 125, 1)",
            borderWidth: 1,
            data: [20, 35, 44, 50, 69, 76, 80],
          },
        ],
      },
      options: {
        responsive: false, // Disable resizing
        maintainAspectRatio: false, // Disable aspect ratio
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    const chart3 = new Chart(chart3Ref.current, {
      type: "pie",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#8800ff",
            borderColor: "#ffffff",
            borderWidth: 1,
            maxBarThickness: 70,
            minBarLength: 2,
            data: [12, 19, 15, 5, 2, 10, 7],
          },
        ],
      },
      options: {
        responsive: false, // Disable resizing
        maintainAspectRatio: false, // Disable aspect ratio
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
    };
  }, []);
  return (
    <div class="container">
      <ResponsiveDrawer/>
      <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.chart}>
            <canvas ref={chart1Ref}></canvas>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.chart}>
            <canvas ref={chart2Ref}></canvas>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.chart}>
            <canvas ref={chart3Ref}></canvas>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};
export default Dashboard;
