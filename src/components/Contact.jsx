import { useState } from "react";
import { 
  Container, Typography, TextField, Button, Grid, Stack, Snackbar, Alert, Box 
} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon, Send as SendIcon } from "@mui/icons-material";

const Contact = ({ portfolioData }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) validationErrors.message = "Message cannot be empty";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <section 
      id="contact" 
      style={{ 
        background: "linear-gradient(135deg, #4b0082, #ff1493)", 
        padding: "80px 0",
        textAlign: "center",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: "#fff", 
            fontWeight: "bold", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            animation: "slideIn 1s ease-in-out"
          }}
        >
          Get in Touch
        </Typography>

        {/* Contact Info */}
        <Stack spacing={2} alignItems="center" sx={{ my: 3 }}>
          <Button 
            startIcon={<PhoneIcon />} 
            variant="contained"
            sx={{
              backgroundColor: "#ff9800",
              color: "black",
              fontWeight: "bold",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#e68900", transform: "scale(1.1)" }
            }}
          >
            {portfolioData.phone}
          </Button>
          <Button 
  startIcon={<EmailIcon />} 
  variant="contained"
  sx={{
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontWeight: "bold",
    transition: "0.3s",
    "&:hover": { backgroundColor: "#32408f", transform: "scale(1.1)", textTransform: 'none'}
  }}
>
  {portfolioData.email.toLowerCase()}
</Button>

        </Stack>

        <Box 
  component="form" 
  onSubmit={handleSubmit} 
  sx={{ 
    p: 4, 
    borderRadius: 3, 
    boxShadow: "0px 8px 16px rgba(0,0,0,0.3)", 
    backgroundColor: "#f5f5f5",  // Changed background color to light gray
    backdropFilter: "blur(10px)",
    transition: "0.4s ease-in-out",
    maxWidth: "600px",
    margin: "auto",
    "&:hover": { boxShadow: "0px 10px 20px rgba(0,0,0,0.4)", transform: "scale(1.02)" }
  }}
>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover": { borderColor: "#ff9800" },
            transition: "0.3s"
          }
        }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover": { borderColor: "#3f51b5" },
            transition: "0.3s"
          }
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover": { borderColor: "#4caf50" },
            transition: "0.3s"
          }
        }}
      />
    </Grid>
    <Grid item xs={12} display="flex" justifyContent="center">
      <Button 
        type="submit" 
        variant="contained" 
        startIcon={<SendIcon />} 
        sx={{
          backgroundColor: "black",
          color: "#fff",
          fontWeight: "bold",
          transition: "0.3s",
          "&:hover": { backgroundColor: "blue", transform: "scale(1.1)" }
        }}
      >
        Send Message
      </Button>
    </Grid>
  </Grid>
</Box>

        {/* Success Snackbar */}
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Message sent successfully!
          </Alert>
        </Snackbar>
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

export default Contact;
