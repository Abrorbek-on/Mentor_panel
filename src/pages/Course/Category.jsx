import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Typography,
    IconButton,
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Collapse,
    Tooltip,
    Menu,
    MenuItem,
    Popover,
    Divider,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    DarkMode,
    Notifications,
    Dashboard,
    School,
    ExpandLess,
    ExpandMore,
    Comment,
    ExitToApp,
    Settings,
    FileDownload,
    Add,
    Close as CloseIcon,
} from "@mui/icons-material";

export default function Course_Category() {
    const [sections, setSections] = useState([
        { id: 1, name: "Kirish", updated: "—" },
        { id: 2, name: "JavaScript nima ?", updated: "—" },
        { id: 3, name: "JavaScript Fundamental", updated: "—" },
    ]);

    const [drawerOpen] = useState(true);
    const [courseOpen, setCourseOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    // modal states
    const [openModal, setOpenModal] = useState(false);
    const [newSection, setNewSection] = useState({ name: "", course: "" });
    const [editSection, setEditSection] = useState(null);

    // profile & notif menus
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const menuOpen = Boolean(anchorElProfile);

    const [anchorElNotif, setAnchorElNotif] = useState(null);
    const notificationsOpen = Boolean(anchorElNotif);

    const [anchorEl, setAnchorEl] = useState(null);
    const settingsOpen = Boolean(anchorEl);

    const notifications = [
        { id: 1, text: "Yangi dars yuklandi", time: "5 daqiqa oldin", img: "/avatar.png" },
        { id: 2, text: "Sizning izohingizga javob berildi", time: "20 daqiqa oldin", img: "/avatar.png" },
        { id: 3, text: "Yangi mentor qo‘shildi", time: "1 soat oldin", img: "/avatar.png" },
    ];

    // profile
    const handleProfileClick = (event) => setAnchorElProfile(event.currentTarget);
    const handleProfileClose = () => setAnchorElProfile(null);

    // notif
    const handleNotifClick = (event) => setAnchorElNotif(event.currentTarget);
    const handleNotifClose = () => setAnchorElNotif(null);

    // settings
    const handleSettingsOpen = (event) => setAnchorEl(event.currentTarget);
    const handleSettingsClose = () => setAnchorEl(null);

    // modal actions
    const handleOpenModal = () => {
        setNewSection({ name: "", course: "" });
        setEditSection(null);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditSection(null);
    };

    const handleSave = () => {
        if (!newSection.name) return;

        if (editSection) {
            // ✏️ Edit mode
            setSections(
                sections.map((s) =>
                    s.id === editSection.id
                        ? { ...s, name: newSection.name, updated: new Date().toLocaleString() }
                        : s
                )
            );
        } else {
            // ➕ Add new
            setSections([
                ...sections,
                {
                    id: sections.length + 1,
                    name: newSection.name + (newSection.course ? ` (${newSection.course})` : ""),
                    updated: new Date().toLocaleString(),
                },
            ]);
        }

        setNewSection({ name: "", course: "" });
        setEditSection(null);
        setOpenModal(false);
    };

    const handleDelete = (id) => {
        setSections(sections.filter((s) => s.id !== id));
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                className="w-64"
                PaperProps={{
                    className: `text-white w-64 ${darkMode ? "bg-gray-900" : "bg-[#0a1930]"}`,
                }}
            >
                <div
                    className={`flex items-center justify-center py-5 border-b border-gray-700 ${darkMode ? "bg-gray-800" : "bg-gray-200"
                        }`}
                >
                    <img src="/assets/logo-dark.svg" alt="Logo" className="w-32" />
                </div>
                <List
                    className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} h-full`}
                >
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
                            {courseOpen ? (
                                <ExpandLess className={darkMode ? "text-white" : "text-black"} />
                            ) : (
                                <ExpandMore className={darkMode ? "text-white" : "text-black"} />
                            )}
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

            {/* Main content */}
            <div className={`flex-1 flex flex-col ${darkMode ? "bg-gray-800" : "bg-gray-200"} `}>
                <div
                    className={`flex justify-between items-center shadow px-6 py-3 ${darkMode ? "bg-gray-800" : "bg-gray-200"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <span className={`font-bold text-lg ${darkMode ? "!text-white" : "!text-black"}`}>Mentor</span>
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
                                <MenuItem>
                                    <Typography>Bildirishnoma yo‘q</Typography>
                                </MenuItem>
                            ) : (
                                notifications.map((notif) => (
                                    <MenuItem
                                        key={notif.id}
                                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                                    >
                                        <Avatar src={notif.img} sx={{ width: 40, height: 40 }} />
                                        <Box>
                                            <Typography variant="body2">{notif.text}</Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                {notif.time}
                                            </Typography>
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
                            open={settingsOpen}
                            anchorEl={anchorEl}
                            onClose={handleSettingsClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <Box p={2} sx={{ minWidth: 180 }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    Sozlamalar
                                </Typography>
                                <Divider />
                                <MenuItem>Hammasi joyida</MenuItem>
                                <Divider />
                            </Box>
                        </Popover>

                        {/* Dark mode */}
                        <Tooltip title="Dark Mode">
                            <IconButton onClick={() => setDarkMode(!darkMode)}>
                                <DarkMode className={darkMode ? "text-white" : "text-black"} />
                            </IconButton>
                        </Tooltip>

                        {/* Profile */}
                        <Box
                            className={`flex items-center gap-3 px-2 py-1 rounded shadow ${darkMode ? "text-white" : "text-black"
                                }`}
                        >
                            <Box
                                onClick={handleProfileClick}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <Avatar alt="Mentor" src="/avatar.png" />
                                <Box>
                                    <Typography className="font-medium">Abrorbek Karimov</Typography>
                                    <Typography variant="body2" color="textSecondary" className={`${darkMode ? "!text-white" : "!text-black"}`}>
                                        Mentor
                                    </Typography>
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

                {/* Table */}
                <div className="p-6">
                    <Typography variant="h6" className="mb-4 flex justify-between">
                        <strong className={`text-[25px] ${darkMode ? "!text-white" : "!text-black"}`}>Bo‘limlar</strong>
                        <Button variant="contained" startIcon={<Add />} onClick={handleOpenModal}>
                            Qo‘shish
                        </Button>
                    </Typography>
                    <TableContainer component={Paper} className="rounded-xl shadow mt-[20px]">
                        <Table>
                            <TableHead>
                                <TableRow className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
                                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Tr</TableCell>
                                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Bo‘lim nomi</TableCell>
                                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Yangilangan vaqt</TableCell>
                                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Amallar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sections.map((row) => (
                                    <TableRow key={row.id} className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
                                        <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>{row.id}</TableCell>
                                        <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>{row.name}</TableCell>
                                        <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>{row.updated}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => {
                                                        setEditSection(row);
                                                        setNewSection({ name: row.name, course: "" });
                                                        setOpenModal(true);
                                                    }}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    color="error"
                                                    onClick={() => handleDelete(row.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="flex items-center justify-between mt-4">
                        <Button
                            startIcon={<FileDownload />}
                            variant="outlined"
                            color="success"
                        >
                            Yuklab olish
                        </Button>
                        <Typography>
                            Rows per page: 10 &nbsp; 1-{sections.length} of {sections.length}
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle className="flex justify-between items-center">
                    <span>{editSection ? "Tahrirlash ✏️" : "Qo'shish +"}</span>
                    <IconButton onClick={handleCloseModal} size="small">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent className="flex flex-col gap-4 mt-2">
                    <TextField
                        label="Bo‘lim nomi"
                        fullWidth
                        value={newSection.name}
                        onChange={(e) => setNewSection({ ...newSection, name: e.target.value })}
                    />
                    {!editSection && (
                        <TextField
                            label="Kurs"
                            fullWidth
                            value={newSection.course}
                            onChange={(e) => setNewSection({ ...newSection, course: e.target.value })}
                        />
                    )}
                </DialogContent>

                <DialogActions className="px-6 pb-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        className="rounded-lg px-6"
                    >
                        Saqlash
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
