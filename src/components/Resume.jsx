import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <Box component="header" sx={{ background: "#3E3E3E" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#7395AE", padding: "3rem 0", textTransform: "uppercase" }}
        >
          My Background
        </Typography>
        <Box
          component="div"
          sx={(theme) => ({
            position: "relative",
            padding: "1rem",
            margin: "0 auto",
            "&:before": {
              content: "''",
              position: "absolute",
              height: "100%",
              border: "1px solid #5D5C61",
              right: "40px",
              top: 0,
            },
            "&:after": {
              content: "''",
              display: "table",
              clear: "both",
            },
            [theme.breakpoints.up("md")]: {
              padding: "2rem",
              "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
              },
            },
          })}
        >
          <Typography
            variant="h2"
            sx={(theme) => ({
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              // timeLineItem styles
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
              // timeLineYear overrides
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                  float: "none",
                  margin: "0 auto",
                },
                "&:nth-of-type(2n):before": {
                  display: "none",
                },
              },
            })}
          >
            2021
          </Typography>

          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Junior Software Engineer
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Brokerage Engine
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              09/2020 - Current
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              Maintain a large code base for front-end (React.js/Redux), and for the back-end (Rails, PostgreSQL, GraphQL).
              <br/>
              <br/>
              Communicate and work alongside a team every day to develop a quality application, debugging, and develop new features,
              using Agile methodologies and using Git Flow for testing and implementation.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={(theme) => ({
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              // timeLineItem base
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                  float: "none",
                  margin: "0 auto",
                },
                "&:nth-of-type(2n):before": {
                  display: "none",
                },
              },
            })}
          >
            2020
          </Typography>
          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Software Engineering
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Flatiron School
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              01/2020 - 05/2020
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              Built full-stack applications utilizing Ruby and JavaScript
              frameworks, using Agile methodology. Check out my{" "}
              <a href="/portfolio">projects</a> to see my progress from day 1 to
              Software Engineer.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Engineering Designer
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Headworks International
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              11/2017 - 01/2020
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              Collected historical data as a temporary project to identify the
              best efficient design & drafting practices to present a
              consolidation plan using the data collected to generate
              cost-saving proposals during RFQ's (Request for Quotations) with
              suppliers.
              <br />
              <br />
              Consistant collaboration with management and engineering to design
              & develop Mechanical Wastewater Filters, Conveyor Systems, Moveing
              Bed Biofilm Reactors (MBBR) aeration grid systems & Dissolved Air
              Flotation Equipment.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Founder/CEO
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Geek Kloud
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              01/2018 - 12/2018
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              E-Commerce business. Deployed online sales strategies and the
              various platforms used to conduct digital sales or conversions.
              <br />
              Analyzed data daily to use findings to promote products, as well
              as to improve marketing effortsand strategies.
              <br />
              Managed site development and updates for the e-commerce website to
              improve conversion rates and user experience.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={(theme) => ({
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                  float: "none",
                  margin: "0 auto",
                },
                "&:nth-of-type(2n):before": {
                  display: "none",
                },
              },
            })}
          >
            2017
          </Typography>

          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Independent Contractor
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Big Tex (Coxco Energy Solutions)
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              12/2016 - 10/2017
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              Analyzed the specific customer requests & prepared a detailed
              oriented energy efficient proposal. Managed multiple clients to
              assure quality systems were installed and certified. Worked along
              with inspection teams.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={(theme) => ({
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                  float: "none",
                  margin: "0 auto",
                },
                "&:nth-of-type(2n):before": {
                  display: "none",
                },
              },
            })}
          >
            2016
          </Typography>
          <Box
            component="div"
            sx={(theme) => ({
              padding: "1rem",
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              margin: "1rem 3rem 1rem 1rem",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#557A95 #7395AE transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)",
              },
              [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                  float: "right",
                  margin: "1rem",
                  borderColor: "#5D5C61",
                },
                "&:nth-of-type(2n):before": {
                  right: "auto",
                  left: "-0.625rem",
                  borderColor: "transparent transparent #557A95 #7395AE",
                },
              },
            })}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#7395AE", textTransform: "uppercase" }}
            >
              Mechanical Drafting Project Manager
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "white" }}>
              Industrial Ventilation Systems
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "white" }}>
              04/2015 - 02/2016
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#B1A296" }}
            >
              Managed customer order, package submittals & data analysis
              requiring meticulous attention. Supervised administrative
              processes to reduce errors, improve accuracy and efficiency, and
              achieve organized objectives.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={(theme) => ({
              textAlign: "center",
              maxWidth: "9.375rem",
              margin: "0 3rem 0 auto",
              fontSize: "1.8rem",
              background: "#7395AE",
              color: "white",
              lineHeight: 1,
              padding: "0.5rem 0 1rem",
              "&:before": { display: "none" },
              borderBottom: "2px solid #5D5C61",
              position: "relative",
              clear: "both",
              "&:after": { content: "''", position: "absolute" },
              [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                  float: "none",
                  margin: "0 auto",
                },
                "&:nth-of-type(2n):before": {
                  display: "none",
                },
              },
            })}
          >
            2015
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
