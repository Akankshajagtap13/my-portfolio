import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { Code, Storage, Brush, Build, Terminal, GitHub } from "@mui/icons-material";

const skillsData = [
  { name: "JavaScript", icon: <Code /> },
  { name: "React", icon: <Code /> },
  { name: "Node.js", icon: <Storage /> },
  { name: "HTML", icon: <Storage /> },
  { name: "Redux Toolkit", icon: <Storage /> },
  { name: "Material-UI", icon: <Brush /> },
  { name: " Tailwind CSS", icon: <Brush /> },
];

const toolsData = [
  { name: "Git", icon: <GitHub /> },
  { name: "VS Code", icon: <Terminal /> },
  { name: "Webpack", icon: <Build /> },
  { name: "Postman", icon: <Build /> },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      style={{
        padding: "50px 0", 
        background: "linear-gradient(135deg, #4b0082, #ff1493)", 
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
          Skills
        </Typography>

        {/* Skills Grid */}
        <Grid container spacing={2} justifyContent="center">
          {skillsData.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                variant="outlined"
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <div
                    style={{
                      fontSize: "40px",
                      color: "#3f51b5",
                      marginBottom: "10px",
                    }}
                  >
                    {skill.icon}
                  </div>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tools Title */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ marginTop: 4, color: "#fff", fontWeight: "bold" }}
        >
          Tools
        </Typography>

        {/* Tools Grid */}
        <Grid container spacing={2} justifyContent="center">
          {toolsData.map((tool, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                variant="outlined"
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <div
                    style={{
                      fontSize: "40px",
                      color: "#3f51b5",
                      marginBottom: "10px",
                    }}
                  >
                    {tool.icon}
                  </div>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {tool.name}
                  </Typography>
                </CardContent>
              </Card>
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

export default Skills;
