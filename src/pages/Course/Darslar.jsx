import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Collapse,
    IconButton,
    Avatar,
    Typography,
    Tooltip,
    Menu,
    MenuItem,
    Divider,
    Popover,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Tabs,
    Tab,
    TablePagination,
} from "@mui/material";

import {
    Dashboard,
    School,
    Comment,
    ExitToApp,
    ExpandLess,
    ExpandMore,
    Notifications,
    Settings,
    DarkMode,
    Edit,
    AttachFile,
} from "@mui/icons-material";

export default function Darslar() {
    const [drawerOpen] = useState(true);
    const [courseOpen, setCourseOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const menuOpen = Boolean(anchorElProfile);

    const [anchorElNotif, setAnchorElNotif] = useState(null);
    const notificationsOpen = Boolean(anchorElNotif);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [tabValue, setTabValue] = useState(0);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const notifications = [
        { id: 1, text: "Yangi dars yuklandi", time: "5 daqiqa oldin", img: "/avatar.png" },
        { id: 2, text: "Sizning izohingizga javob berildi", time: "20 daqiqa oldin", img: "/avatar.png" },
        { id: 3, text: "Yangi mentor qo‘shildi", time: "1 soat oldin", img: "/avatar.png" }
    ];

    const lessons = [
        { id: 1, title: "3-bo‘lim 1-dars" },
        { id: 2, title: "2-dars" },
        { id: 3, title: "Ekstima Ornamayv O‘rteta" },
        { id: 4, title: "Tegangan guruhga qo‘shilish" },
    ];

    const handleProfileClick = (event) => setAnchorElProfile(event.currentTarget);
    const handleProfileClose = () => setAnchorElProfile(null);

    const handleNotifClick = (event) => setAnchorElNotif(event.currentTarget);
    const handleNotifClose = () => setAnchorElNotif(null);

    const handleSettingsOpen = (event) => setAnchorEl(event.currentTarget);
    const handleSettingsClose = () => setAnchorEl(null);

    const handleTabChange = (e, newValue) => setTabValue(newValue);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                    className={`flex items-center justify-center py-5 border-b border-gray-700 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                >
                    <img src="/assets/logo-dark.svg" alt="Logo" className="w-32" />
                </div>

                <List className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} h-full`}>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
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
                            {courseOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={courseOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={Link} to="/course" sx={{ pl: 4 }}>
                                <ListItemText primary="Barcha kurslar" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/category" sx={{ pl: 4 }}>
                                <ListItemText primary="Kategoriyalar" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/comments">
                            <ListItemIcon>
                                <Comment className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Izohlar" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/login">
                            <ListItemIcon>
                                <ExitToApp className={darkMode ? "text-white" : "text-black"} />
                            </ListItemIcon>
                            <ListItemText primary="Chiqish" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <div className={`flex-1 flex flex-col ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                <div className="flex justify-between items-center shadow px-6 py-3">
                    <span className="font-bold text-lg">Mentor</span>
                    <div className="flex items-center gap-4">
                        <Tooltip title="Bildirishnomalar">
                            <IconButton onClick={handleNotifClick}>
                                <Notifications className={darkMode ? "text-white" : "text-black"} />
                            </IconButton>
                        </Tooltip>
                        <Menu anchorEl={anchorElNotif} open={notificationsOpen} onClose={handleNotifClose}>
                            {notifications.map((notif) => (
                                <MenuItem key={notif.id}>
                                    <Avatar src={notif.img} sx={{ width: 30, height: 30, mr: 1 }} />
                                    <Box>
                                        <Typography variant="body2">{notif.text}</Typography>
                                        <Typography variant="caption">{notif.time}</Typography>
                                    </Box>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Settings */}
                        <Tooltip title="Sozlamalar">
                            <IconButton onClick={handleSettingsOpen}>
                                <Settings />
                            </IconButton>
                        </Tooltip>
                        <Popover open={open} anchorEl={anchorEl} onClose={handleSettingsClose}>
                            <Box p={2}>
                                <Typography variant="h6">Sozlamalar</Typography>
                                <Divider />
                                <MenuItem>Hammasi joyida</MenuItem>
                            </Box>
                        </Popover>

                        {/* Dark mode */}
                        <Tooltip title="Dark Mode">
                            <IconButton onClick={() => setDarkMode(!darkMode)}>
                                <DarkMode />
                            </IconButton>
                        </Tooltip>

                        {/* Profile */}
                        <Box onClick={handleProfileClick} className="flex items-center gap-2 cursor-pointer">
                            <Avatar alt="Mentor" src="/avatar.png" />
                            <Box>
                                <Typography>Abrorbek Karimov</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Mentor
                                </Typography>
                            </Box>
                        </Box>
                        <Menu anchorEl={anchorElProfile} open={menuOpen} onClose={handleProfileClose}>
                            <MenuItem onClick={() => navigate("/profile")}>Mening profilim</MenuItem>
                            <Divider />
                            <MenuItem>Chiqish</MenuItem>
                        </Menu>
                    </div>
                </div>

                {/* Tabs */}
                <Box className="px-6 pt-4">
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Darslar" />
                        <Tab label="Imtihonlar" />
                    </Tabs>
                </Box>

                {/* Lessons Table */}
                {tabValue === 0 && (
                    <Box className="p-6">
                        <Box className="flex justify-between items-center mb-4">
                            <Typography variant="h6">Darslar</Typography>
                            <Button variant="contained">Qo‘shish</Button>
                        </Box>

                        <Table component={Box} className="rounded shadow">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tr</TableCell>
                                    <TableCell>Dars mavzusi</TableCell>
                                    <TableCell>Materiallar</TableCell>
                                    <TableCell>Amallar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {lessons
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((lesson, i) => (
                                        <TableRow key={lesson.id}>
                                            <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                                            <TableCell>{lesson.title}</TableCell>
                                            <TableCell>
                                                <Button size="small" variant="contained" startIcon={<AttachFile />}>
                                                    Biriktirish
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton>
                                                    <Edit />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>

                        {/* Pagination */}
                        <TablePagination
                            component="div"
                            count={lessons.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="Rows per page"
                        />
                    </Box>
                )}

                {/* Exams Placeholder */}
                {tabValue === 1 && (
                    <Box className="p-6">
                        <Typography variant="h6">Imtihonlar</Typography>
                        <Typography color="textSecondary">Hozircha imtihonlar mavjud emas.</Typography>
                    </Box>
                )}
            </div>
        </div>
    );
}
