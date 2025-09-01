import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Popover,
    TextField,
    Tooltip,
    Typography,
    Collapse,
} from "@mui/material";
import {
    Dashboard,
    School,
    ExpandLess,
    ExpandMore,
    Comment,
    ExitToApp,
    Notifications,
    Settings,
    DarkMode,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const [tab, setTab] = useState("info");
    const [showPassword, setShowPassword] = useState(false);
    const [courseOpen, setCourseOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const menuOpen = Boolean(anchorElProfile);

    const [anchorElNotif, setAnchorElNotif] = useState(null);
    const notificationsOpen = Boolean(anchorElNotif);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const notifications = [
        { id: 1, text: "Yangi dars yuklandi", time: "5 daqiqa oldin", img: "/avatar.png" },
        { id: 2, text: "Sizning izohingizga javob berildi", time: "20 daqiqa oldin", img: "/avatar.png" },
        { id: 3, text: "Yangi mentor qo‘shildi", time: "1 soat oldin", img: "/avatar.png" },
    ];

    const [formData, setFormData] = React.useState({
        fullname: "Abrorbek Karimov",
        email: "abrorjonk9@gmail.com",
        phone: "+998 90 571 20 09",
        created: "2025-10-10",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : ""}`}>
            <Drawer
                variant="permanent"
                className="w-64"
                PaperProps={{
                    className: `text-white w-64 ${darkMode ? "bg-gray-900" : "bg-[#0a1930]"}`,
                }}
            >
                <div
                    className={`flex items-center justify-center py-5 border-b ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                >
                    <img src="/assets/logo-dark.svg" alt="Logo" className="w-32" />
                </div>
                <List className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} h-full`}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/")}>
                            <ListItemIcon>
                                <Dashboard className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Asosiy" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setCourseOpen(!courseOpen)}>
                            <ListItemIcon>
                                <School className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Kurslar" />
                            {courseOpen ? (
                                <ExpandLess className={darkMode ? "text-white" : "text-black"} />
                            ) : (
                                <ExpandMore className={darkMode ? "text-white" : "text-black"} />
                            )}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={courseOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/course")}>
                                <ListItemText primary="Barcha kurslar" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/category")}>
                                <ListItemText primary="Kategoriyalar" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Comment className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Izohlar" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ExitToApp className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Chiqish" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <div className="flex-1 flex flex-col">
                <div className="flex justify-end items-center gap-4 p-4 border-b border-gray-300">
                    <Tooltip title="Bildirishnomalar">
                        <IconButton onClick={(e) => setAnchorElNotif(e.currentTarget)}>
                            <Notifications className={darkMode ? "text-white" : "text-black"} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorElNotif}
                        open={notificationsOpen}
                        onClose={() => setAnchorElNotif(null)}
                        PaperProps={{ sx: { mt: 1.5, borderRadius: 2, width: 300, maxHeight: 300 } }}
                    >
                        {notifications.length === 0 ? (
                            <MenuItem><Typography>Bildirishnoma yo‘q</Typography></MenuItem>
                        ) : (
                            notifications.map((notif) => (
                                <MenuItem key={notif.id} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Avatar src={notif.img} sx={{ width: 40, height: 40 }} />
                                    <Box>
                                        <Typography variant="body2">{notif.text}</Typography>
                                        <Typography variant="caption" color="textSecondary">{notif.time}</Typography>
                                    </Box>
                                </MenuItem>
                            ))
                        )}
                    </Menu>

                    <Tooltip title="Sozlamalar">
                        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                            <Settings className={darkMode ? "text-white" : "text-black"} />
                        </IconButton>
                    </Tooltip>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        <Box p={2} sx={{ minWidth: 180 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>Sozlamalar</Typography>
                            <Divider />
                            <MenuItem>Hammasi joyida</MenuItem>
                        </Box>
                    </Popover>

                    <Tooltip title="Dark Mode">
                        <IconButton onClick={() => setDarkMode(!darkMode)}>
                            <DarkMode className={darkMode ? "text-white" : "text-black"} />
                        </IconButton>
                    </Tooltip>

                    <Box
                        onClick={(e) => setAnchorElProfile(e.currentTarget)}
                        className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded shadow"
                    >
                        <Avatar alt="Mentor" src="/avatar.png" />
                        <Box>
                            <Typography className="font-medium">Abrorbek Karimov</Typography>
                            <Typography variant="body2" color="textSecondary">Mentor</Typography>
                        </Box>
                    </Box>
                    <Menu
                        anchorEl={anchorElProfile}
                        open={menuOpen}
                        onClose={() => setAnchorElProfile(null)}
                        PaperProps={{ sx: { mt: 1.5, borderRadius: 2, minWidth: 180 } }}
                    >
                        <MenuItem
                            onClick={() => {
                                setAnchorElProfile(null);
                                navigate("/profile");
                            }}
                        >
                            <Typography color="textSecondary">Mening profilim</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => setAnchorElProfile(null)}>
                            <Typography color="error">↳ Chiqish</Typography>
                        </MenuItem>
                    </Menu>
                </div>

                <main className="p-6">
                    <Typography variant="h5" className="mb-6 font-bold">
                        Shaxsiy ma`lumotlar
                    </Typography><br /><br />

                    <Box className="flex gap-6">
                        <Box className="flex flex-col gap-4 w-64">
                            <Button
                                variant={tab === "info" ? "contained" : "outlined"}
                                onClick={() => setTab("info")}
                            >
                                Shaxsiy ma’lumotlar
                            </Button>
                            <Button
                                variant={tab === "profile" ? "contained" : "outlined"}
                                onClick={() => setTab("profile")}
                            >
                                Profilni o‘zgartirish
                            </Button>
                            <Button
                                variant={tab === "password" ? "contained" : "outlined"}
                                onClick={() => setTab("password")}
                            >
                                Parolni o‘zgartirish
                            </Button>
                            <Button
                                variant={tab === "phone" ? "contained" : "outlined"}
                                onClick={() => setTab("phone")}
                            >
                                Telefonni o‘zgartirish
                            </Button>
                        </Box>

                        <Box className="flex-1">
                            {tab === "info" && (
                                <Box className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded shadow flex gap-6 items-start max-w-8xl w-full`}>
                                    <Box className="flex flex-col gap-3 w-full">
                                        <Avatar
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                            sx={{ width: 100, height: 100 }}
                                        />
                                        <TextField
                                            label="To‘liq ism"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            sx={{ width: 300 }}
                                        />
                                        <TextField
                                            label="Telefon"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            sx={{ width: 300 }}
                                        />
                                        <TextField
                                            label="Yaratilgan sana"
                                            name="created"
                                            type="date"
                                            value={formData.created}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            sx={{ width: 300 }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Box>
                                </Box>
                            )}
                            {tab === "profile" && (
                                <Box className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded shadow max-w-8xl flex flex-col gap-4 `}>
                                    <Avatar
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        sx={{ width: 100, height: 100 }}
                                    />
                                    <Button variant="outlined" component="label" sx={{ width: 300 }}>
                                        Rasm tanlash
                                        <input type="file" hidden />
                                    </Button>
                                    <TextField label="Ism Familiya" defaultValue="Abrorbek Karimov" fullWidth sx={{ width: 300 }} />
                                    <Button variant="contained" color="success" sx={{ width: 300 }}>Tastiqlash</Button>
                                </Box>
                            )}
                            {tab === "password" && (
                                <Box className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded shadow max-w-8xl flex flex-col gap-4`}>
                                    {["Joriy parol", "Yangi parol", "Yangi parolni tasdiqlang"].map((label, i) => (
                                        <TextField
                                            key={i}
                                            label={label}
                                            type={showPassword ? "text" : "password"}
                                            fullWidth
                                            sx={{ width: 300 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    ))}
                                    <Button variant="contained" color="success" sx={{ width: 300 }}>
                                        Tastiqlash
                                    </Button>
                                </Box>
                            )}
                            {tab === "phone" && (
                                <Box className={`p-6 rounded shadow max-w-8xl flex flex-col gap-4 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                                    <TextField label="Eski telefon raqam" fullWidth sx={{ width: 300 }} />
                                    <TextField label="Yangi telefon raqam" fullWidth sx={{ width: 300 }} />
                                    <Button variant="contained" color="success" sx={{ width: 300 }}>
                                        Telefonni yangilash
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </main>
            </div>
        </div>
    );
}
