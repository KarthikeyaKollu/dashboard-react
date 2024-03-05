import React from 'react'
import { SideBar } from "./components/SideBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Companies } from "./pages/Companies"
import { CreateCompanyPage } from './pages/CreateCompany';
import { NavBar } from './components/NavBar';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <BrowserRouter>
      <div class="h-screen fixed top-0 left-0 w-full">
        <div class="h-16 fixed flex justify-center top-0 left-0 w-full z-10"><NavBar/></div>

        <div class="flex h-full fixed top-16 left-0 w-full">
          <div class="md:w-64 lg:w-64 sm:block hidden fixed top-16 left-0 h-full z-90">
            <SideBar />
          </div>

          <div class="flex-1 bg-slate-100 overflow-y-auto md:ml-64 lg:ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companylist" element={<Companies />} />
              <Route path="/createcompany" element={<CreateCompanyPage />} />
              <Route path="/tasks" element={<Tasks/>} />
              {/* ... more routes */}
            </Routes>
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App