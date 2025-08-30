import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Avatar,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      banner: "🟨 JS",
      name: "Frontend",
      price: "499000",
      sections: "bo‘lim",
      tasks: "vazifalar",
      qna: "savol javob",
      purchased: 1,
      active: true,
    },
    {
      id: 2,
      banner: "⬛ Next",
      name: "Next Js",
      price: "6000000",
      sections: "bo‘lim",
      tasks: "vazifalar",
      qna: "savol javob",
      purchased: 0,
      active: false,
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] text-white p-4 space-y-6">
        <h2 className="text-xl font-bold">iTLive</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Asosiy
          </Link>
          <Link to="/courses" className="hover:bg-gray-700 p-2 rounded">
            Kurslar
          </Link>
          <Link to="/categories" className="hover:bg-gray-700 p-2 rounded">
            Kategoriyalar
          </Link>
          <Link to="/comments" className="hover:bg-gray-700 p-2 rounded">
            Izohlar
          </Link>
          <Link to="/logout" className="hover:bg-gray-700 p-2 rounded">
            Chiqish
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Navbar */}
        <AppBar position="static" color="default" className="shadow-md">
          <Toolbar className="flex justify-between">
            <Typography variant="h6">Mentor / Kurslar</Typography>
            <div className="flex items-center gap-3">
              <Switch />
              <IconButton>
                <Avatar alt="User" src="https://i.pravatar.cc/40" />
              </IconButton>
              <Button
                variant="contained"
                startIcon={<Add />}
                className="bg-blue-500"
              >
                Qo‘shish
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Kurslar jadvali */}
        <div className="p-6">
          <TableContainer component={Paper}>
            <Table>
              <TableHead className="bg-gray-200">
                <TableRow>
                  <TableCell>Tr</TableCell>
                  <TableCell>Banner</TableCell>
                  <TableCell>Kurs nomi</TableCell>
                  <TableCell>Narxi</TableCell>
                  <TableCell>Bo‘limlar</TableCell>
                  <TableCell>Vazifalar</TableCell>
                  <TableCell>Savol Javoblar</TableCell>
                  <TableCell>Sotib olish</TableCell>
                  <TableCell>Faol</TableCell>
                  <TableCell>Amallar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((c, i) => (
                  <TableRow key={c.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{c.banner}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.price}</TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined" color="warning">
                        {c.sections}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined" color="success">
                        {c.tasks}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined" color="primary">
                        {c.qna}
                      </Button>
                    </TableCell>
                    <TableCell>{c.purchased}</TableCell>
                    <TableCell>
                      <Switch checked={c.active} />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <IconButton color="primary">
                          <Visibility />
                        </IconButton>
                        <IconButton color="secondary">
                          <Edit />
                        </IconButton>
                        <IconButton color="error">
                          <Delete />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </div>
  );
}
