import DropdownList from "./components/dropdownList/dropdownList.component.jsx";
import style from "./sidebar.module.css";
import Typography from '@mui/material/Typography';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import WifiCallingOutlinedIcon from '@mui/icons-material/WifiCallingOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import logo from "../../assets/logo.png";
import { useState } from "react";

const menuItems = [
    {
        id: 1,
        title: "MAIN",
        list: [
            { id: 1, title: "Dashboard", icon: <DashboardOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 2, title: "Generate Leads", icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 3, title: "Manage Leads", icon: <TableRowsOutlinedIcon sx={{ fontSize: 16 }} />, link: "/manage-leads" },
            { id: 4, title: "Engage Leads", icon: <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
        ]
    },
    {
        id: 2,
        title: "CONTROL CENTER",
        list: [
            { id: 1, title: "Team Members", icon: <PeopleAltOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 2, title: "Lead Sources", icon: <CampaignOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 3, title: "Ad Accounts", icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 4, title: "WhatsApp Accounts", icon: <ThreePOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 5, title: "Tele Calling", icon: <WifiCallingOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
            { id: 6, title: "CRM Fields", icon: <TableChartOutlinedIcon sx={{ fontSize: 16 }} />, link: "/page-not-found" },
        ]
    },

]

function SideBar() {
    return (
        <div className={style.container}>
            <div className={style.header}>Travelogy</div>
            {/* <div className={style.imageContainer}>
                <img src={logo} alt="logo" className={style.image}/>
            </div> */}
            <DropdownList />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', flex: 1}}>
                <div>
                    {menuItems.map(item => (
                        <div key={item.id} className={style.itemContainer}>
                            <Typography variant="caption" gutterBottom sx={{ display: 'block' }} className={style.title}>
                                {item.title}
                            </Typography>
                            {item?.list.map(subItem => (
                                <div key={subItem.id} className={style.subItemContainer}>
                                    <div className={style.subItem}>{subItem.icon}</div>
                                    <Typography className={style.subItem} variant="body2" gutterBottom>
                                        <a href={subItem.link} className={style.link}>{subItem.title}</a>
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={style.itemContainer}>
                    <div className={style.subItemContainer}>
                        <div className={style.subItem}><AccountCircleOutlinedIcon /></div>
                        <Typography className={style.subItem} variant="body2" gutterBottom>
                            Business Center
                        </Typography>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBar;