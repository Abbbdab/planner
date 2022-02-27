
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subjects from "./pages/Subjects";
import Assignment from "./pages/Assignments";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";



export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </Layout>
  )
}
