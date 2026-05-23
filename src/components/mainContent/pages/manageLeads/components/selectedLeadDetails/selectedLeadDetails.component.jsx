import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import style from "./selectedLeadDetails.module.css";

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

function SelectedLeadDetails({ selectedLead, onClose }) {
    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                ml: 1,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)"
            }}
        >

            <div className={style.scrollContainer}>
                <div className={style.detailsBox}>
                    <div className={style.detailsHeader}>
                        <Typography variant="h6">
                            {selectedLead.company + ' ( ' + selectedLead.owner_name + ' )'}
                        </Typography>
                        <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => onClose()} />
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

                        <div className={`${style.iconBox} ${style.active}`}>
                            <LocalMallOutlinedIcon fontSize="small" />
                        </div>
                    </div>
                    <Grid container spacing={1.5}>
                        <Grid size={{ xs: 12 }}>
                            <div className={style.detailsNode}>
                                <div className={style.iconWrapPper}>
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
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <div className={style.detailsNode}>
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
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <div className={style.detailsNode}>
                                <div className={style.iconWrapper}>
                                    <LocalOfferOutlinedIcon className={style.icon} />
                                </div>

                                <div className={style.textWrapper}>
                                    <Typography className={style.label}>
                                        STATUS
                                    </Typography>

                                    <div className={style.statusWrapper}>
                                        {renderStatus(selectedLead.crm.status)}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Paper>
    )
}

export default SelectedLeadDetails;