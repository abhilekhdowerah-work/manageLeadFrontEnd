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

const menuItems = [
    {
        id: 1,
        title: "MAIN",
        list: [
            { id: 1, title: "Dashboard", icon: <DashboardOutlinedIcon /> },
            { id: 2, title: "Generate Leads", icon: <RocketLaunchOutlinedIcon />},
            { id: 3, title: "Manage Leads", icon: <TableRowsOutlinedIcon />},
            { id: 4, title: "Engage Leads", icon: <ChatBubbleOutlineOutlinedIcon />}
        ]
    },
    {
        id: 1,
        title: "CONTROL CENTER",
        list: [
            { id: 1, title: "Team Members", icon: <PeopleAltOutlinedIcon /> },
            { id: 2, title: "Lead Sources", icon: <CampaignOutlinedIcon />},
            { id: 3, title: "Ad Accounts", icon: <PersonAddAltOutlinedIcon />},
            { id: 4, title: "WhatsApp Accounts", icon: <ThreePOutlinedIcon />},
            { id: 5, title: "Tele Calling", icon: <WifiCallingOutlinedIcon /> },
            { id: 6, title: "CRM Fields", icon: <TableChartOutlinedIcon />},
        ]
    },

]

function SideBar() {
    return (
        <div className={style.container}>
            <div className={style.header}>Travelogy</div>
            <DropdownList/>
            <div>
                {menuItems.map(item => (
                    <div key={item.id} className={style.itemContainer}>
                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            {item.title}
                        </Typography>
                        {item?.list.map(subItem => (
                            <div className={style.subItemContainer}>
                                <div className={style.subItem}>{subItem.icon}</div>
                                <Typography className={style.subItem} variant="body1" gutterBottom>
                                    {subItem.title}
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