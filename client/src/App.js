import "../src/index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categories, TaskManager, AddNewTaskForm } from "./components";
import {
  Home,
  Login,
  Signup,
  About,
  Dashboard,
  HelpAndSupport,
  UserProfile,
} from "./pages";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-new-task" element={<AddNewTaskForm />} />
          <Route path="manage-task" element={<TaskManager />} />
          <Route path="categories" element={<Categories />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="help-and-support" element={<HelpAndSupport />} />
          <Route path="task-details" element={<TaskDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
