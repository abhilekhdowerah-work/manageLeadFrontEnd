import React from "react";
import style from './table.module.css';
import Typography from '@mui/material/Typography';
import { LEADS } from "../../../../../../api/leads";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
} from "@mui/material";

function renderStatus(status) {
    if (status) {
        return (
            <div className={style.dialed}>
                Dialed
            </div>
        )
    } else {
        return (
            <div className={style.notDialed}>
                Not Dialed
            </div>
        )
    }
}

function renderCallStatus(status) {
    if (status) {
        return (
            <div className={style.done}>
                <CheckCircleOutlinedIcon sx={{ fontSize: 15, mr: 0.5 }} />
                <div>
                    Done
                </div>
            </div>
        )
    } else {
        return (
            <div className={style.markDone}>
                <DoneOutlinedIcon sx={{ fontSize: 15, mr: 0.5 }} />
                <div>
                    Mark Done
                </div>
            </div>
        )
    }
}

function convertUnixToIST(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);

    return date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

function LeadsTable() {
    console.log("leads: ", LEADS)
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Your Leads
            </Typography>
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    border: "1px solid #E5E7EB",
                }}
            >
                <TableContainer
                    sx={{
                        maxHeight: 500,
                        overflowX: "auto",
                    }}
                >
                    <Table
                        stickyHeader
                        sx={{
                            minWidth: 1200,
                            borderCollapse: "separate",
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        position: "sticky",
                                        left: 0,
                                        zIndex: 3,
                                        background: "#fff",
                                        minWidth: 100,
                                        fontWeight: 700,
                                    }}
                                >
                                    LEAD NAME
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>EMAIL</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>CONTACT</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>DATE CREATED</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>COMPANY</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>STATUS</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>LEAD OWNER</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>SOURCE</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>NEXT FOLLOW UP</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>CALL STATUS TODAY</TableCell>
                                <TableCell sx={{ minWidth: 120, fontWeight: 700 }}>ACQUISITION SOURCE</TableCell>

                                <TableCell
                                    sx={{
                                        // position: "sticky",
                                        // right: 0,
                                        // zIndex: 3,
                                        background: "#fff",
                                        // minWidth: 140,
                                        fontWeight: 700,
                                    }}
                                >
                                    ACTIONS
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {LEADS.map((item) => (
                                <TableRow hover key={item.id}>
                                    <TableCell
                                        sx={{
                                            position: "sticky",
                                            left: 0,
                                            background: "#fff",
                                            zIndex: 2,
                                            // minWidth: 220,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12,
                                            }}
                                        >
                                            <Typography variant="body2" gutterBottom>
                                                {item.name}
                                            </Typography>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {item.email}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {item.mobile}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {convertUnixToIST(item.created_at?._seconds)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {item.company}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {renderStatus(item.crm.status)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {item.owner_name && <div className={style.leadOwner} >
                                            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                                {item.owner_name}
                                            </Typography>
                                            <BorderColorOutlinedIcon />
                                        </div>}
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" className={style.leadOwner} gutterBottom sx={{ display: 'block' }}>
                                            {item.source?.type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <div className={style.leadOwner}>
                                            <CalendarMonthOutlinedIcon />
                                            <Typography variant="caption" gutterBottom sx={{ display: 'block', ml: 1, whiteSpace: 'nowrap' }}>
                                                Set follow up
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {renderCallStatus(item.call_status)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                            {item.custom_fields?.acquisition_source}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            // position: "sticky",
                                            right: 0,
                                            background: "#fff",
                                            zIndex: 2,
                                            fontWeight: 600,
                                            // minWidth: 140,
                                        }}
                                    >
                                        <div className={style.more}>
                                            <div>
                                                More
                                            </div>
                                            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 15, ml: 0.5 }} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>

    );
}

export default LeadsTable;