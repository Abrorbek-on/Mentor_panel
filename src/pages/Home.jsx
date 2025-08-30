import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Avatar,
    IconButton,
    Tooltip,
    Menu,
    MenuItem,
    Divider,
    Box,
    Typography,
    Popover
} from "@mui/material";
import {
    Dashboard,
    School,
    Comment,
    ExitToApp,
    ExpandLess,
    ExpandMore,
    DarkMode,
    Notifications
} from "@mui/icons-material";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MentorLayout({ children }) {
    const [drawerOpen] = useState(true);
    const [courseOpen, setCourseOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    // Profile menu
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const menuOpen = Boolean(anchorElProfile);

    // Notifications menu
    const [anchorElNotif, setAnchorElNotif] = useState(null);
    const notificationsOpen = Boolean(anchorElNotif);

    // Settings Popover
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const notifications = [
        { id: 1, text: "Yangi dars yuklandi", time: "5 daqiqa oldin", img: "/avatar.png" },
        { id: 2, text: "Sizning izohingizga javob berildi", time: "20 daqiqa oldin", img: "/avatar.png" },
        { id: 3, text: "Yangi mentor qo‘shildi", time: "1 soat oldin", img: "/avatar.png" }
    ];

    // Handlers
    const handleProfileClick = (event) => setAnchorElProfile(event.currentTarget);
    const handleProfileClose = () => setAnchorElProfile(null);

    const handleNotifClick = (event) => setAnchorElNotif(event.currentTarget);
    const handleNotifClose = () => setAnchorElNotif(null);

    const handleSettingsOpen = (event) => setAnchorEl(event.currentTarget);
    const handleSettingsClose = () => setAnchorEl(null);

    return (
        <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : ""}`}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                className="w-64"
                PaperProps={{
                    className: `text-white w-64 ${darkMode ? "bg-gray-900" : "bg-[#0a1930]"}`,
                }}
            >
                <div
                    className={`flex items-center justify-center py-5 border-b border-gray-700 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                >
                    <img src="/assets/logo-dark.svg" alt="Logo" className="w-32" />
                </div>
                <List className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} h-full`}>
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
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Barcha kurslar" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
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

            {/* Main Content */}
            <div className={`flex-1 flex flex-col ${darkMode ? "bg-gray-800" : "bg-gray-200"} `}>
                {/* Topbar */}
                <div
                    className={`flex justify-between items-center shadow px-6 py-3 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                >
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-lg">Mentor</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <Tooltip title="Bildirishnomalar">
                            <IconButton onClick={handleNotifClick}>
                                <Notifications className={darkMode ? "text-white" : "text-black"} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElNotif}
                            open={notificationsOpen}
                            onClose={handleNotifClose}
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

                        {/* Settings */}
                        <Tooltip title="Sozlamalar">
                            <IconButton onClick={handleSettingsOpen}>
                                <Settings className={darkMode ? "text-white" : "text-black"} />
                            </IconButton>
                        </Tooltip>

                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleSettingsClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                        >
                            <Box p={2} sx={{ minWidth: 180 }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>Sozlamalar</Typography>

                                <Divider />
                                <MenuItem>Hammasi joyida</MenuItem>
                                <Divider />
                            </Box>
                        </Popover>

                        <Tooltip title="Dark Mode">
                            <IconButton onClick={() => setDarkMode(!darkMode)}>
                                <DarkMode className={darkMode ? "text-white" : "text-black"} />
                            </IconButton>
                        </Tooltip>

                        <Box className={`flex items-center gap-3 px-2 py-1 rounded shadow ${darkMode ? "text-white" : "text-black"}`}>
                            <Box onClick={handleProfileClick} className="flex items-center gap-2 cursor-pointer">
                                <Avatar alt="Mentor" src="/avatar.png" />
                                <Box>
                                    <Typography className="font-medium">Abrorbek Karimov</Typography>
                                    <Typography variant="body2" color="textSecondary">Mentor</Typography>
                                </Box>
                            </Box>

                            <Menu
                                anchorEl={anchorElProfile}
                                open={menuOpen}
                                onClose={handleProfileClose}
                                PaperProps={{ sx: { mt: 1.5, borderRadius: 2, minWidth: 180 } }}
                            >
                                <MenuItem
                                    onClick={() => {
                                        handleProfileClose();
                                        navigate("/profile");
                                    }}
                                >
                                    <Typography color="textSecondary">Mening profilim</Typography>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleProfileClose}>
                                    <Typography color="error">↳ Chiqish</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </div>
                </div>

                <p className="p-6"><strong>Asosiy</strong> <br /> <span>Boshqaruv paneli *</span></p>

                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
