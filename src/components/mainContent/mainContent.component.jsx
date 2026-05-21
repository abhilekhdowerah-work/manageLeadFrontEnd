import { Routes, Route } from "react-router-dom";
import style from './mainContent.module.css';
import ManageLeads from "./pages/manageLeads/manageLeads.component.jsx";

function MainContent() {
    return (
        <div className={style.container}>

            <Routes>
                <Route path="/manage-leads" element={<ManageLeads />} />
            </Routes>
        </div>
    )
}

export default MainContent;