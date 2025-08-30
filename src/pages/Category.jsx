import React, { useState } from "react";
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
} from "@mui/material";
import {
  Dashboard,
  School,
  Comment,
  ExitToApp,
  Search,
  FilterList,
  Add,
  FileDownload,
} from "@mui/icons-material";

export default function CategoryPage() {
  const [categories] = useState([
    "Backend",
    "Frontend",
    "Foundation",
    "Mobil",
    "IT Matematika",
    "Buxgalteriya",
  ]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        className="w-64"
        PaperProps={{
          className: "bg-[#0a1930] text-white w-64",
        }}
      >
        <div className="flex items-center justify-center py-5 border-b border-gray-700">
          <img src="/assets/logo-dark.svg" alt="Logo" className="w-28" />
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Asosiy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <School className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Kurslar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton selected>
              <ListItemIcon>
                <School className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Kategoriyalar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Comment className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Izohlar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToApp className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Chiqish" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Typography variant="h6" className="font-bold mb-4">
          Kategoriyalar
        </Typography>

        {/* Search + Buttons */}
        <div className="flex items-center gap-3 mb-4">
          <TextField
            size="small"
            placeholder="Izlash"
            InputProps={{
              startAdornment: <Search className="text-gray-500 mr-2" />,
            }}
          />
          <IconButton color="primary">
            <FilterList />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<Add />}
            color="primary"
            className="rounded-md"
          >
            Qo‘shish
          </Button>
        </div>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-200">
                <TableCell>TR</TableCell>
                <TableCell>Kategoriya</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((cat, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{cat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <Button
            startIcon={<FileDownload />}
            variant="outlined"
            color="success"
          >
            Yuklab olish
          </Button>
          <Typography variant="body2" color="textSecondary">
            Rows per page: 10 &nbsp; 1-6 of 6
          </Typography>
        </div>
      </div>
    </div>
  );
}
