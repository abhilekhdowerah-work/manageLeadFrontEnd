
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

export const HEADER = "Manage Your Leads";
export const DESCRIPTION = "Monitor lead status, assign tasks and close deals faster.";

export const PERFORMANCE_OVERVIEW = {
        TITLE: "Performance Overview",
        LIST: [
            {id: 1, title: "Total Leads", icon: <PeopleAltOutlinedIcon />, value: 45, helperFunction: x=>`${x}` },
            {id: 2, title: "Contected Leads", icon: <LocalPhoneOutlinedIcon />, value: 0, helperFunction: x=>`${x}` },
            {id: 3, title: "Sales Done", icon: <RadioButtonCheckedOutlinedIcon />, value: 0, helperFunction: x=>`${x}` },
            {id: 4, title: "Conversion rate", icon: <RadioButtonCheckedOutlinedIcon />, value: 0.0, helperFunction: x=>`${x.toFixed(2)}%` },
        ]
    }