import style from './modelBox.module.css';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

function getCurrentDateTime() {
    return new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
    });
}

function ModelBox({ name, onClose }) {
    return (
        <div>
            <div className={style.header}>
                <Typography variant="h6" gutterBottom>
                    Set Next Follow Up
                </Typography>
                <CloseIcon onClick={() => onClose()} sx={{ cursor: 'pointer' }} />
            </div>
            <Typography variant="body2" gutterBottom>
                for <b>{name}</b>
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                Follow Up Date & Time
            </Typography>
            <div className={style.timeBorder}>
                <Typography variant="subtitle2" gutterBottom>{getCurrentDateTime()}</Typography>
            </div>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" color="error" onClick={() => onClose()}>
                    Cancel
                </Button>
                <Button variant="contained" color="success" onClick={() => onClose()}>
                    Save
                </Button>
            </div>
        </div>
    )
}

export default ModelBox;