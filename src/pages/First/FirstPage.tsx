import type { ChangeEvent } from "react";
import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Logo from "../../components/Logo";
import Paragraph from "../../components/Paragraph";
import Upload from "../../components/Upload";
import UploadIcon from "../../components/UploadIcon";
import Button from "../../components/Button";
import "./style.css";

const FirstPage = () => {
  return (
    <Box
      className="first-page"
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
      <Box>
        <Logo />
      </Box>

      <Heading className="first-page-heading">
        Your Journey to Coding Conf 2025 Starts Here!
      </Heading>
      <Paragraph className="first-page-paragraph">
        Secure your spot at biggest Coding Conference.
      </Paragraph>

      <Box className="input-box-container">
        <Box className="upload-firstpage-box">
          <Label className="first-page-label">Upload file</Label>
          <Upload
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              console.log(e.target.files)
            }
            accept="image/*"
            icon={
              <>
                <UploadIcon size={24} color="#ea6d5f" className="upload-icon" />
              </>
            }
            labelText="Drag & drop to upload file"
          />
        </Box>
        <Box className="input-firstpage-box">
          <Label className="first-page-label">Full Name</Label>
          <Input type="text" placeholder="Enter your name" />
        </Box>
        <Box className="input-firstpage-box">
          <Label className="first-page-label">Email Address</Label>
          <Input type="email" placeholder="Enter your email" />
        </Box>
        <Box className="input-firstpage-box">
          <Label className="first-page-label">Password</Label>
          <Input type="password" placeholder="Enter your password" />
        </Box>
        <Box className="first-page-button">
          <Button>Sign Up</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstPage;
