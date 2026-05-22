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

import logo from "../../assets/logo.png";
import { useState } from "react";

const menuItems = [
    {
        id: 1,
        title: "MAIN",
        list: [
            { id: 1, title: "Dashboard", icon: <DashboardOutlinedIcon />, link: "/page-not-found" },
            { id: 2, title: "Generate Leads", icon: <RocketLaunchOutlinedIcon />, link: "/page-not-found" },
            { id: 3, title: "Manage Leads", icon: <TableRowsOutlinedIcon />, link: "/manage-leads" },
            { id: 4, title: "Engage Leads", icon: <ChatBubbleOutlineOutlinedIcon />, link: "/page-not-found" },
        ]
    },
    {
        id: 2,
        title: "CONTROL CENTER",
        list: [
            { id: 1, title: "Team Members", icon: <PeopleAltOutlinedIcon />, link: "/page-not-found" },
            { id: 2, title: "Lead Sources", icon: <CampaignOutlinedIcon />, link: "/page-not-found" },
            { id: 3, title: "Ad Accounts", icon: <PersonAddAltOutlinedIcon />, link: "/page-not-found" },
            { id: 4, title: "WhatsApp Accounts", icon: <ThreePOutlinedIcon />, link: "/page-not-found" },
            { id: 5, title: "Tele Calling", icon: <WifiCallingOutlinedIcon />, link: "/page-not-found" },
            { id: 6, title: "CRM Fields", icon: <TableChartOutlinedIcon />, link: "/page-not-found" },
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
            <div>
                {menuItems.map(item => (
                    <div key={item.id} className={style.itemContainer}>
                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            {item.title}
                        </Typography>
                        {item?.list.map(subItem => (
                            <div key={subItem.id} className={style.subItemContainer}>
                                <div className={style.subItem}>{subItem.icon}</div>
                                <Typography className={style.subItem} variant="body1" gutterBottom>
                                    <a href={subItem.link} className={style.link}>{subItem.title}</a>
                                </Typography>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SideBar;