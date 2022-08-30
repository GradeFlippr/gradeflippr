import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LogInPage';
import { UnprotectedLayout } from './components/UnprotectedLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
import { HomePage } from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { TutorDashboard } from './pages/TutorDashboard';
import { ScheduleNewSession } from './pages/ScheduleNewSession';

export default function App() {
  return (
    <Routes>
      <Route element={<UnprotectedLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="student" element={<StudentDashboard />} />
        <Route path="tutor" element={<TutorDashboard />} />
        <Route path="scheduleNewSession" element={<ScheduleNewSession />} />
      </Route>
    </Routes>
  );
}
