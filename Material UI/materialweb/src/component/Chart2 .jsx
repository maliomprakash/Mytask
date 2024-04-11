import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Menu, MenuItem } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Chart2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {  
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
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
    };

    setChartOptions(options);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container direction="column" className="max-w-full w-full bg-white rounded-lg shadow md:p-6 p-4" spacing={2}>
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h5" className="leading-none text-3xl font-bold text-gray-900 light:text-white pb-2">32.4k</Typography>
            <Typography variant="body1" className="text-base font-normal text-gray-500 light:text-gray-400">Users this week</Typography>
          </Grid>
          <Grid item>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 light:text-green-500 text-center">
              12%
              
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className="chart-container" style={{ position: 'relative', height: '300px' }}>
          {chartOptions && (
            <ApexCharts
              options={chartOptions}
              series={chartOptions.series} 
              type="area"
              height={320}
            />
          )}
        </div>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between" alignItems="center" className="border-gray-200 border-t light:border-gray-700">
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center" sx={{width:'100%'}}>
              <Button
                id="dropdownDefaultButton"
                aria-controls="lastDaysdropdown"
                aria-haspopup="true"
                onClick={handleClick}
                variant="text"
                size="small"
                sx={{ paddingRight: 0,  width:'50' }} // Add custom styling here
              >
                Last 7 days
                <ExpandMoreIcon/>
              </Button>
              <Menu
                id="lastDaysdropdown"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
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
          </Grid>
          <Grid item>
            <Button
              href="#"
              variant="outlined"
              size="small"
              className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 light:hover:text-blue-500 hover:bg-gray-100 light:hover:bg-gray-700 light:focus:ring-gray-700 light:border-gray-700 px-3 py-2"
            >
              Users Report
              <ChevronRightIcon/>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chart2;
