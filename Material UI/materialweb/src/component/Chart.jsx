import React, { useState } from "react";
import { Typography, Grid, Button, Menu, MenuItem } from "@mui/material";
import ApexCharts from "react-apexcharts";

function Chart() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "bar",
        height: 320,
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "lighten",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            color: "rgba(0, 0, 0, 0.87)",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#7E3AF2", "#19BECB"],
    },
    series: [
      {
        name: "Organic",
        data: [231, 122, 63, 421, 122, 323, 111],
      },
      {
        name: "Social media",
        data: [232, 113, 341, 224, 522, 411, 243],
      },
    ],
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container 
      direction="column"
      className="max-w-full w-full bg-white rounded-lg shadow p-4 md:p-6"
    >
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className="pb-4 mb-4 border-b border-gray-200"
        >
          <Grid item xs={12} sm={6}>
            <Grid container alignItems="center">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                <svg
                  className="w-6 h-6 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
              </div>
              <div>
                <Typography
                  variant="h5"
                  className="leading-none font-bold text-gray-900"
                >
                  5,897
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-normal text-gray-500"
                >
                  New products this week
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              size="small"
              className="bg-green-100 text-green-800 font-medium"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
              4.3%
            </Button>
          </Grid>
        </Grid>

        <ApexCharts
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={320}
        />

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="border-t pt-5"
        >
          <Grid item>
            <Button
              aria-controls="lastDaysdropdown"
              aria-haspopup="true"
              onClick={handleClick}
              variant="text"
              size="small"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center"
            >
              Last 7 days
              <svg
                className="w-2.5 m-2.5 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Button>
            <Menu
              id="lastDaysdropdown"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleClose}>Yesterday</MenuItem>
              <MenuItem onClick={handleClose}>Today</MenuItem>
              <MenuItem onClick={handleClose}>Last 7 days</MenuItem>
              <MenuItem onClick={handleClose}>Last 30 days</MenuItem>
              <MenuItem onClick={handleClose}>Last 90 days</MenuItem>
            </Menu>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 px-3 py-2"
            >
              Leads Report
              <svg
                className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Chart;
