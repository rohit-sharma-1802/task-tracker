import "../src/index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, About, Dashboard } from "./pages";
import TodosCard from "./components/TodosCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="todos" element={<TodosCard />} />
          <Route path="manage-task" element={<TodosCard />} />
          <Route path="categories" element={<TodosCard />} />
          <Route path="reminders" element={<TodosCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
