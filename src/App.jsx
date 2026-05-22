import './App.css';
import SideBar from './components/sidebar/sidebar.component.jsx';
import MainContent from './components/mainContent/mainContent.component.jsx';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="container">
      <div className="smallScreen">
        <MenuIcon onClick={() => setIsOpen(true)} />
        <Drawer open={isOpen} onClose={() => setIsOpen(false)} >
          <SideBar />
        </Drawer>
      </div>
      <div className="bigScreen">
        <SideBar />
      </div>
      <div className='mainContent'>
        <MainContent />
      </div>
    </div>
  )
}

export default App
