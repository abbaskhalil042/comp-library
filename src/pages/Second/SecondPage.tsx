import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Logo from "../../components/Logo";
import Paragraph from "../../components/Paragraph";
import "./style.css";

const SecondPage = () => {
  return (
    <Box
      className="second-page"
      style={{
        backgroundImage:
          "url(https://patinaco.s3.ap-south-1.amazonaws.com/bg-image.jpg)",
        backgroundSize: "cover", // Fully covers the box
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="second-page-logo">
        <Logo />
      </Box>

      <Heading className="second-page-heading">
        Congrats, <span>Jonatan Kristoff </span>! Your ticket is ready.
      </Heading>
      <Paragraph className="second-page-paragraph">
        We've emailed your ticket to <span>jonatankensil.com</span> and will
        send updates in the run up to the event.
      </Paragraph>

      <Box
        className="card"
        style={{
          backgroundImage:
            "url(https://patinaco.s3.ap-south-1.amazonaws.com/card-image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "16rem",
          width: "400px",
          padding: "16px",
          // borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="card-content">
          <Box className="top">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Logo"
              className="logo"
            />
            <Box className="event-details">
              <Box className="event-title">Coding Conf</Box>
              <Box className="event-date">Jan 31, 2021 | Austin, TX</Box>
            </Box>
          </Box>

          <Box className="bottom">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="User"
              className="profile-img"
            />
            <Box className="attendee">
              <Box className="attendee-name">Jonatan Kristoff</Box>
              <Box className="attendee-handle">@jonatankristoff</Box>
            </Box>
          </Box>
        </Box>

        <Box className="divider-section">
          <div className="dotted-line"></div>
          <Box className="vertical-text">001230</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondPage;
