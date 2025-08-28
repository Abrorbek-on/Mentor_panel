import React from "react";
import { TextField, Button, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Box className="w-full min-h-screen flex bg-[#f5faff]">
            <Box className="hidden md:flex flex-1 items-center justify-center">
                <img
                    src="assets/login.png"
                    alt="illustration"
                    className="max-w-md"
                />
            </Box>

            <Box className="flex-1 flex items-center justify-center">
                <Box className="w-[350px] bg-white p-6 rounded-xl shadow-md">
                    <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
                        Kirish
                    </Typography>

                    <TextField
                        label="Telefon"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Parol"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box display="flex" justifyContent="flex-end" mt={1}>
                        <Link to="/forgot-password" className="text-blue-600 text-sm">
                            Parolni unutdingizmi?
                        </Link>
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, borderRadius: "25px", py: 1.2 }}
                    >
                        Kirish
                    </Button>

                    <Typography align="center" mt={2} fontSize={14}>
                        Hisobingiz yo‘qmi?{" "}
                        <Link to="/register" className="text-blue-600 font-medium">
                            Ro'yxatdan o'tish
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
