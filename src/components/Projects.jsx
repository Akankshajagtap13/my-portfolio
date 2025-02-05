import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

const Projects = ({ projects }) => {
  return (
    <section 
      id="projects" 
      style={{
        background: "linear-gradient(135deg, #4b0082, #ff1493)", 
        padding: "50px 0", 
        textAlign: "center", 
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center" 
          sx={{
            color: "#fff", 
            fontWeight: "bold", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            animation: "slideIn 1s ease-in-out"
          }}
        >
          Projects
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center">
  {projects.map((project, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Box
        sx={{
          p: 3,
          backgroundColor: "white", // Lighter pastel pink background color
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Default box shadow
          textAlign: "center",
          transition: "0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#f48fb1", // Lighter, more saturated pink for hover
            color: "#fff", // Text turns white on hover
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)", // Stronger box shadow on hover
            transform: "scale(1.05)",
            cursor: "pointer",
          },
        }}
      >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ fontWeight: "bold", color: "#333", transition: "color 0.3s ease-in-out" }}
                >
                  {project.name}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "#555", transition: "color 0.3s ease-in-out" }}>
                  {project.description}
                </Typography>
                
                {/* View Project Button */}
                <Button 
                  href={project.link} 
                  target="_blank" 
                  variant="contained"
                  sx={{
                    mt: 1, 
                    backgroundColor: "black", 
                    color: "#fff", 
                    "&:hover": { 
                      backgroundColor: "#32408f !important",  
                      transform: "scale(1.1) !important",     
                      transition: "0.3s ease", 
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
                    }
                  }}
                >
                  View Project
                </Button>



              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
