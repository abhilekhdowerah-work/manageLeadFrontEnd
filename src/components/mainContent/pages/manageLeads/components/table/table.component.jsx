import React, { useState } from "react";
import style from './table.module.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { LEADS } from "../../../../../../api/leads";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Grid from '@mui/material/Grid';

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
import ModelBox from "../modelBox/modelBox.component";
import SelectedLeadDetails from "../selectedLeadDetails/selectedLeadDetails.component";

const styleForModel = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    borderRadius: 2,
    p: 4,
    outline: 'none'
};

const styleForDetailsModel = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    minWidth: "85vw",
    maxHeight: "95vh",
    bgcolor: "background.paper",
    borderRadius: "20px",
    // overflow: "hidden",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: 24,
};

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
    const [selectedLead, setSelectedLead] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedName, setSelectedName] = useState('');
    const [tableData, setTableData] = useState(LEADS);

    const onfieldChange = (e) => {
        const newdatas = LEADS.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()) || x.mobile.includes(e.target.value));
        setTableData(newdatas);
    }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography variant="h6" gutterBottom>
                    Your Leads
                </Typography>
                <TextField id="standard-basic" label="Enter Email or Phone" variant="standard" onChange={(e) => onfieldChange(e)} />
            </div>
            <div style={{ display: 'flex' }}>
                <Paper
                    elevation={0}
                    sx={{
                        width: selectedLead ? "50%" : "100%",
                        overflow: "hidden",
                        borderRadius: "16px",
                        border: "1px solid #E5E7EB",
                        mr: 1,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                >
                    <TableContainer
                        sx={{
                            maxHeight: 500,
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
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
                                            // left: 0,
                                            zIndex: 3,
                                            background: "#fff",
                                            minWidth: 160,
                                            fontWeight: 600,
                                        }}
                                        className={style.tableHeader}
                                    >
                                        LEAD NAME
                                    </TableCell>

                                    <TableCell className={style.tableHeader} sx={{ fontWeight: 600 }}>EMAIL</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ fontWeight: 600 }}>CONTACT</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 160, fontWeight: 600 }}>DATE CREATED</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 120, fontWeight: 600 }}>COMPANY</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ fontWeight: 600 }}>STATUS</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 160, fontWeight: 600 }}>LEAD OWNER</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ fontWeight: 600 }}>SOURCE</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 120, fontWeight: 600 }}>NEXT FOLLOW UP</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 160, fontWeight: 600 }}>CALL STATUS TODAY</TableCell>
                                    <TableCell className={style.tableHeader} sx={{ minWidth: 180, fontWeight: 600 }}>ACQUISITION SOURCE</TableCell>

                                    <TableCell
                                        sx={{
                                            position: "sticky",
                                            right: 0,
                                            background: "#fff",
                                            fontWeight: 700,
                                        }}
                                        className={style.tableHeader}
                                    >
                                        ACTIONS
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {tableData.map((item) => (
                                    <TableRow hover key={item.id}>
                                        <TableCell
                                            sx={{
                                                left: 0,
                                                background: "#fff",
                                                zIndex: 2,
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
                                                <Typography variant="caption" sx={{ display: 'block' }}>
                                                    {item.owner_name}
                                                </Typography>
                                                <BorderColorOutlinedIcon sx={{ fontSize: 17 }} />
                                            </div>}
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="caption" className={style.leadOwner} gutterBottom sx={{ display: 'block', textAlign: 'center' }}>
                                                {item.source?.type}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <div className={style.leadOwner} style={{ cursor: 'pointer' }} onClick={() => { setOpen(true); setSelectedName(item.name) }}>
                                                <CalendarMonthOutlinedIcon sx={{ fontSize: 17 }} />
                                                <Typography variant="caption" sx={{ display: 'block', ml: 1, whiteSpace: 'nowrap' }}>
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
                                                position: "sticky",
                                                right: 0,
                                                background: "#fff",
                                                zIndex: 2,
                                                fontWeight: 600,
                                            }}
                                        >
                                            <div className={style.more} onClick={() => setSelectedLead(item)}>
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
                {selectedLead &&
                    <Paper
                        elevation={0}
                        sx={{
                            width: !selectedLead ? "0%" : "50%",
                            overflow: "hidden",
                            borderRadius: "16px",
                            border: "1px solid #E5E7EB",
                            ml: 1,
                            p: 2,
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)"
                        }}
                    >
                        <div className={style.detailsBox}>
                            <div className={style.detailsHeader}>
                                <Typography variant="h6">
                                    {selectedLead.company + ' ( ' + selectedLead.owner_name + ' )'}
                                </Typography>
                                <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setSelectedLead(null)} />
                            </div>
                            <div className={style.iconContainer}>
                                <div className={style.iconBox}>
                                    <CallOutlinedIcon fontSize="small" />
                                </div>

                                <div className={style.iconBox}>
                                    <WhatsAppIcon fontSize="small" />
                                </div>

                                <div className={style.iconBox}>
                                    <ShareOutlinedIcon fontSize="small" />
                                </div>

                                <div className={style.iconBox}>
                                    <LocalMallOutlinedIcon fontSize="small" />
                                </div>
                            </div>
                            <Grid container spacing={3}>
                                <Grid
                                    size={{ xs: 12, sm: 6 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <EmailOutlinedIcon className={style.icon} />
                                    </div>

                                    <div className={style.textWrapper}>
                                        <Typography className={style.label}>
                                            EMAIL
                                        </Typography>

                                        <Typography className={style.value}>
                                            {selectedLead.email}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    size={{ xs: 12, sm: 6 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <LocalPhoneOutlinedIcon className={style.icon} />
                                    </div>

                                    <div className={style.textWrapper}>
                                        <Typography className={style.label}>
                                            CONTACT NUMBER
                                        </Typography>

                                        <Typography className={style.value}>
                                            {selectedLead.mobile}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    size={{ xs: 12, sm: 6 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <LocalOfferOutlinedIcon className={style.icon} />
                                    </div>

                                    <div className={style.textWrapper}>
                                        <Typography className={style.label}>
                                            STATUS
                                        </Typography>

                                        <Typography className={style.value}>
                                            {renderStatus(selectedLead.crm.status)}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    size={{ xs: 12, sm: 6 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <PersonOutlineOutlinedIcon className={style.icon} />
                                    </div>

                                    <div className={style.textWrapper}>
                                        <Typography className={style.label}>
                                            OWNER
                                        </Typography>

                                        <Typography className={style.value}>
                                            {selectedLead.name}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    size={{ xs: 12, sm: 6 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <LanguageOutlinedIcon className={style.icon} />
                                    </div>

                                    <div className={style.textWrapper}>
                                        <Typography className={style.label}>
                                            SOURCE
                                        </Typography>

                                        <Typography className={style.value}>
                                            {selectedLead.custom_fields.acquisition_source}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    size={{ xs: 12 }}
                                    className={style.detailsNode}
                                >
                                    <div className={style.iconWrapper}>
                                        <EmailOutlinedIcon className={style.icon} />
                                    </div>
                                    <div className={style.textWrapper}>
                                        <Typography className={style.value}>
                                            Call Status Today
                                        </Typography>
                                        <Typography className={style.label}>
                                            {selectedLead.call_status ? "You have called this lead today." : "You have not called this lead today"}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>}
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleForModel}>
                    <ModelBox name={selectedName} onClose={() => setOpen(false)} />
                </Box>
            </Modal>
            <Modal
                open={selectedLead ? true : false}
                onClose={() => setSelectedLead(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={style.detailsModelBox}
            >
                <Box sx={styleForDetailsModel}>
                    <SelectedLeadDetails selectedLead={selectedLead} onClose={() => setSelectedLead(null)} />
                </Box>
            </Modal>
        </div>

    );
}

export default LeadsTable;