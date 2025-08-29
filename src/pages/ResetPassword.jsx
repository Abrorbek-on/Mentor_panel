import React from "react";
import {
    TextField,
    Button,
    Typography,
    Box,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        <Box className="w-full min-h-screen flex bg-[#f5faff]">
            <Box className="hidden md:flex flex-1 items-center justify-center">
                <img
                    src="assets/photo_2025-05-26_08-43-11.jpg"
                    alt="illustration"
                    className="w-full h-[800px] object-contain"
                />
            </Box>

            <Box className="flex-1 flex items-center justify-center">
                <Box className="w-[350px] bg-white p-6 rounded-xl shadow-md">
                    <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
                        Parolni qayta o'rnatish
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
                        label="Yangi parol"
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

                    <TextField
                        label="Parolni tasdiqlash"
                        type={showConfirmPassword ? "text" : "password"}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, borderRadius: "25px", py: 1.2 }}
                    >
                        Saqlash
                    </Button>

                    <Typography align="center" mt={2} fontSize={14}>
                        <Link to="/login" className="text-blue-600 font-medium">
                            ortga qaytish
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
