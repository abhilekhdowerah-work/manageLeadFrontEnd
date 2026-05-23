import style from './filterBox.module.css';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Typography from '@mui/material/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { useState } from 'react';

const DROPDOWN = [
    { id: 1, text: 'Status' },
    { id: 2, text: 'Quality' },
    { id: 3, text: 'Source' },
    { id: 4, text: 'Owner' },
];

function renderDropdown(text) {
    return (
        <div className={style.dropdownContainer}>
            <Typography variant="caption" sx={{ display: 'block', fontWeight: 500 }}>
                {text}
            </Typography>

            <ArrowDropDownOutlinedIcon />
        </div>
    );
}

function renderDateTrack(dateObj) {
    return (
        <div className={dateObj.active ? style.dateContainerActive : style.dateContainerInactive}>
            <Typography variant="caption" sx={{ display: 'block', fontWeight: dateObj.active?700:500 }}>
                {dateObj.text}
            </Typography>
        </div>
    )
}
function FilterBox() {
    const [dateTrack, setDateTrack] = useState([
        { id: 1, text: 'Today', active: false },
        { id: 2, text: 'Last 7 Days', active: false },
        { id: 3, text: 'Last 30 Days', active: true },
        { id: 4, text: 'Last 2 Months', active: false },
    ]);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.dropdownListContainer}>
                        {DROPDOWN.map(item => renderDropdown(item.text))}
                    </div>

                    <div className={style.dropdownContainer}>
                        <CachedOutlinedIcon sx={{ fontSize: 15 }} />

                        <Typography
                            variant="caption"
                            sx={{ display: 'block', fontWeight: 500 }}
                        >
                            Clear All
                        </Typography>
                    </div>
                </div>
                <div className={style.datePickerContainer}>
                    <Typography variant="caption" sx={{ display: 'block', fontWeight: 600, color: 'rgb(157, 157, 157)' }}>Created Date Range</Typography>
                    <MobileDateRangePicker sx={{ width: 350 }} />
                </div>
                <div style={{ display: 'flex', gap: '5px', margin: '20px 0' }}>
                    {dateTrack.map(item => renderDateTrack(item))}
                </div>
                <div className={style.dropdownContainer}>
                    <Typography variant="caption" sx={{ display: 'block', fontWeight: 500 }}>X Clear Date</Typography>
                </div>
                <div className={style.statusCross}>
                    <Typography variant="caption" sx={{ display: 'block', fontWeight: 700 }}>Status: Not Dialed X</Typography>
                </div>
            </div>
        </LocalizationProvider>
    );
}

export default FilterBox;