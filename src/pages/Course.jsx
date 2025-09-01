import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  TextField,
  IconButton,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  Popover,
  Avatar,
  Collapse,
  Switch
} from "@mui/material";
import {
  Dashboard,
  School,
  Comment,
  ExitToApp,
  Search,
  FileDownload,
  ExpandLess,
  ExpandMore,
  Notifications,
  Settings,
  DarkMode,
  Add,
  Edit,
  Delete
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [anchorElNotif, setAnchorElNotif] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const notificationsOpen = Boolean(anchorElNotif);
  const settingsOpen = Boolean(anchorEl);
  const profileMenuOpen = Boolean(anchorElProfile);


  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await axios.get("https://fn3.fixoo.uz/courses");
        setCourses(res.data.data);
      } catch (err) {
        console.error("Courses fetch error:", err);
      }
    };
    loadCourses();
  }, []);

  const notifications = [
    { id: 1, text: "Yangi dars yuklandi", time: "5 daqiqa oldin", img: "/avatar.png" },
    { id: 2, text: "Sizning izohingizga javob berildi", time: "20 daqiqa oldin", img: "/avatar.png" },
    { id: 3, text: "Yangi mentor qo‘shildi", time: "1 soat oldin", img: "/avatar.png" }
  ];


  const handleNotifClick = (event) => setAnchorElNotif(event.currentTarget);
  const handleNotifClose = () => setAnchorElNotif(null);

  const handleSettingsOpen = (event) => setAnchorEl(event.currentTarget);
  const handleSettingsClose = () => setAnchorEl(null);

  const handleProfileClick = (event) => setAnchorElProfile(event.currentTarget);
  const handleProfileClose = () => setAnchorElProfile(null);

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : ""}`}>
      <Drawer
        variant="permanent"
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
            <ListItemButton component={Link} to="/logout">
              <ListItemIcon>
                <ExitToApp className={darkMode ? "text-white" : "text-black"} />
              </ListItemIcon>
              <ListItemText primary="Chiqish" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <div className={`flex flex-col ml-64 w-[calc(100%-16rem)] ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <div className={`flex justify-between items-center shadow px-6 py-3 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          <span className="font-bold text-lg">Mentor</span>

          <div className="flex items-center gap-4">
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
            <Tooltip title="Sozlamalar">
              <IconButton onClick={handleSettingsOpen}>
                <Settings className={darkMode ? "text-white" : "text-black"} />
              </IconButton>
            </Tooltip>
            <Popover
              open={settingsOpen}
              anchorEl={anchorEl}
              onClose={handleSettingsClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Box p={2}>
                <Typography variant="h6">Sozlamalar</Typography>
                <Divider sx={{ my: 1 }} />
                <MenuItem>Hammasi joyida</MenuItem>
              </Box>
            </Popover>

            <Tooltip title="Dark Mode">
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                <DarkMode className={darkMode ? "text-white" : "text-black"} />
              </IconButton>
            </Tooltip>

            <Box onClick={handleProfileClick} className="flex items-center gap-2 cursor-pointer">
              <Avatar alt="Mentor" src="/avatar.png" />
              <Box>
                <Typography>Abrorbek Karimov</Typography>
                <Typography variant="body2" color="textSecondary">Mentor</Typography>
              </Box>
            </Box>
            <Menu
              anchorEl={anchorElProfile}
              open={profileMenuOpen}
              onClose={handleProfileClose}
            >
              <MenuItem component={Link} to="/profile" onClick={handleProfileClose}>
                Mening profilim
              </MenuItem>
              <Divider />
              <MenuItem sx={{ color: "red" }}>Chiqish</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex-1 p-6">
          <Box className="flex justify-between mb-4">
            <Typography variant="h6" className="font-bold">Kurslar</Typography>
            <Button variant="contained" startIcon={<Add />}>Qo‘shish</Button>
          </Box>

          <div className="flex items-center gap-3 mb-4">
            <TextField
              size="small"
              placeholder="Izlash"
              InputProps={{
                startAdornment: <Search className="text-gray-500 mr-2" />
              }}
            />
            <Button variant="contained" color="primary">Qidirish</Button>
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>TR</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Banner</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Kurs Nomi</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Narxi</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Bo‘limlar</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Vazifalar</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Savol Javoblar</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Sotib olish</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Faol</TableCell>
                  <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>Amallar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course, index) => (
                  <TableRow key={course.id} className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>{index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={`https://fn3.fixoo.uz/uploads/banner/${course.banner}`}
                        alt={course.name}
                        className="w-16 h-10 rounded"
                      />
                    </TableCell>
                    <TableCell className={`${darkMode ? "!text-white" : "!text-black"}`}>{course.name}</TableCell>
                    <TableCell>{course.price}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="warning" size="small">Bo‘lim</Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="success" size="small">Vazifalar</Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" size="small">Savol Javob</Button>
                    </TableCell>
                    <TableCell>{course.buyCount || 0}</TableCell>
                    <TableCell>
                      <Switch defaultChecked={course.isActive} />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton color="primary"><Edit /></IconButton>
                        <IconButton color="error"><Delete /></IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="flex items-center justify-between mt-4">
            <Button startIcon={<FileDownload />} variant="outlined" color="success">
              Yuklab olish
            </Button>
            <Typography>
              Rows per page: 10 &nbsp; 1-{courses.length} of {courses.length}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
