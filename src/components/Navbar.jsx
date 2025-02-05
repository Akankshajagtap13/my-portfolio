import React from 'react';
import { AppBar, Box, Button, Container, Grid, IconButton, Stack, Typography, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Contact from './Contact'; // Import Contact Component
import Skill from './Skill';
import Projects from "./Projects"; 
import resume from '../assets/akanksha j resume.pdf';

const portfolioData = {
  name: "Akanksha Jagtap",
  role: "softwere Developer",
  description: "Passionate about creating interactive and user-friendly web applications. Always looking for new challenges to improve my skills.",
  githubUrl: "https://github.com/Akankshajagtap13",
  linkedinUrl: "https://linkedin.com/in/akankshajagtap",
  email: "akankshajagtap13@gmail.com",
  phone: "9022157620",
  cvUrl: "/resume.pdf",
  skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Material-UI", "CSS", "HTML", "Git"],
  projects: [
    { name: "Music Player App", 
      description: "A Spotify-like music player app that lets users stream, manage, and enjoy their favorite tracks. It offers features like searching, playlist creation, and seamless audio playback for an enhanced listening experience.",
       link: "#" },
    { name: "Portfolio Website",
       description: "A portfolio website showcasing my skills, projects, and experience as a React Developer. It serves as a personal platform for potential clients and employers to explore my work, connect with me, and view my coding expertise.",
        link: "http://localhost:3001/#about" },
    { name: "Food Order-app", 
      description: "A food order app enables customers to easily explore a variety of cuisines, customize their orders, and have meals delivered quickly to their location. It simplifies the ordering process with features like secure payment, order tracking, and restaurant reviews.", 
      link: "https://github.com/Akankshajagtap13/food-order-app" }
  ]
};

const Navbar = () => {

 
const onDownloadCV = () => {
  const link = document.createElement("A");
  link.href = resume;  // Use the imported file
  link.download = "Akanksha_Jagtap_CV.pdf";  // File name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div>
      {/* Header Section */}
      <AppBar position="sticky" color="primary" sx={{ boxShadow: 3, backgroundColor: "#333" }}>
  <Container>
    <Grid container alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#fff" }}>
          Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button 
            href="#about" 
            color="inherit" 
            sx={{
              "&:hover": { color: "#ff1493" },
              color: "#fff", // Button text color
              display: { xs: 'block', sm: 'inline-block' }, // Makes sure buttons stack on mobile
              fontSize: { xs: '14px', sm: '16px' } // Font size adjusts based on screen size
            }}
          >
            About
          </Button>
          <Button 
            href="#projects" 
            color="inherit" 
            sx={{
              "&:hover": { color: "#ff1493" },
              color: "#fff",
              display: { xs: 'block', sm: 'inline-block' }, 
              fontSize: { xs: '14px', sm: '16px' }
            }}
          >
            Projects
          </Button>
          <Button 
            href="#contact" 
            color="inherit" 
            sx={{
              "&:hover": { color: "#ff1493" },
              color: "#fff",
              display: { xs: 'block', sm: 'inline-block' }, 
              fontSize: { xs: '14px', sm: '16px' }
            }}
          >
            Contact
          </Button>
        </Stack>
      </Grid>
    </Grid>
  </Container>
</AppBar>


      {/* About Section */}
      <section 
        id="about" 
        style={{
          padding: '50px 0', 
          background: "linear-gradient(135deg, #4b0082, #ff1493)", 
          textAlign: 'center',
          animation: 'fadeIn 1.5s ease-in-out'
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: 'column', md: 'row' }, textAlign: { xs: 'center', md: 'left' } }}>
            {/* Avatar Section */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
  <div 
    style={{
      position: 'relative',
      width: '160px', 
      height: '160px', 
      background: 'linear-gradient(45deg, #ff1493, #4b0082)', 
      borderRadius: '50%', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden'
    }}
  >
    <Avatar
      alt="Akanksha Jagtap"
      src="https://via.placeholder.com/150"
      sx={{ 
        width: { xs: 120, md: 160 },
        height: { xs: 120, md: 160 },
        objectFit: 'cover', // Ensures the image fits well inside the circle
      }}
    />
    {/* Adding initials or text on top of the avatar */}
    <div style={{
      position: 'absolute',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    }}>
      AJ
    </div>
  </div>
</Grid>


            {/* Info Section */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}>
                {portfolioData.name}
              </Typography>
              <Typography variant="h6" paragraph sx={{ color: 'gray' }}>{portfolioData.role}</Typography>
              <Typography paragraph sx={{ fontSize: '1rem', color: '#fff' }}>
                {portfolioData.description}
              </Typography>

              {/* Social Icons & Download CV */}
              <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} flexWrap="wrap">
                <IconButton href={portfolioData.githubUrl} target="_blank" sx={{ "&:hover": { color: "#333" } }}>
                  <GitHubIcon sx={{ color: "black" }} />
                </IconButton>
                <IconButton href={portfolioData.linkedinUrl} target="_blank" sx={{ "&:hover": { color: "#0077B5" } }}>
                  <LinkedInIcon sx={{ color: "#0077B5" }} />
                </IconButton>
                <IconButton href="https://instagram.com/your-profile" target="_blank" sx={{ "&:hover": { color: "#E4405F" } }}>
                  <InstagramIcon sx={{ color: "#E4405F" }} />
                </IconButton>
                <IconButton href="https://facebook.com/your-profile" target="_blank" sx={{ "&:hover": { color: "#1877F2" } }}>
                  <FacebookIcon sx={{ color: "#1877F2" }} />
                </IconButton>
                <Button
  variant="contained"
  startIcon={<CloudDownloadIcon />}
  onClick={onDownloadCV}
  sx={{
    mt: { xs: 2, md: 0 },  
    backgroundColor: "black", 
    "&:hover": { backgroundColor: "blue" }
  }}
>
  Download CV
</Button>


              </Stack>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Projects Section */}
      <Projects projects={portfolioData.projects} />

      {/* Skills Section */}
      <Skill />

      {/* Contact Section */}
      <Contact portfolioData={portfolioData} />

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Akanksha Jagtap</Typography>
        <Box style={{ marginTop: '10px' }}>
          <IconButton href="https://github.com/Akankshajagtap13" target="_blank">
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton href="https://linkedin.com/in/akankshajagtap" target="_blank">
            <LinkedInIcon sx={{ color: "#0077B5" }} />
          </IconButton>
          <IconButton href="https://instagram.com/" target="_blank">
            <InstagramIcon sx={{ color: "#E4405F" }} />
          </IconButton>
          <IconButton href="https://facebook.com/" target="_blank">
            <FacebookIcon sx={{ color: "#1877F2" }} />
          </IconButton>
        </Box>
      </footer>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
