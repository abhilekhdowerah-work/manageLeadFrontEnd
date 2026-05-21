import { DESCRIPTION, HEADER, PERFORMANCE_OVERVIEW } from './consts/texts.jsx';
import style from './manageLeads.module.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import LeadsTable from './components/table/table.component.jsx';

function ManageLeads() {
    return (
        <div>
            <div className={style.header}>
                <Typography variant="h5" gutterBottom>
                    {HEADER}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {DESCRIPTION}
                </Typography>
            </div>
            <div className={style.mainContent}>
                <div>
                    <Typography variant="h6" gutterBottom>
                        {PERFORMANCE_OVERVIEW.TITLE}
                    </Typography>
                    <Grid container spacing={1}>{PERFORMANCE_OVERVIEW.LIST.map(item => (
                        <Grid size={{xs: 12, sm: 6, md: 3}} key={item.id} className={style.performanceNodes}>
                            <div className={style.performanceNodeHeader}>
                                <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                                    {item.title}
                                </Typography>
                                <div>{item.icon}</div>
                            </div>
                            <Typography variant="h6" gutterBottom sx={{ display: 'block' }}>
                                <b>{item.helperFunction(item.value)}</b>
                            </Typography>
                        </Grid>
                    ))}</Grid>
                </div>
                <div>
                    <LeadsTable />
                </div>
            </div>
        </div>
    )
}

export default ManageLeads;