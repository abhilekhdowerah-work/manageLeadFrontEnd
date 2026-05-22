import { Routes, Route, Navigate } from "react-router-dom";
import style from './mainContent.module.css';
import ManageLeads from "./pages/manageLeads/manageLeads.component.jsx";
import PageNotFound from "./pages/pageNotFound/pageNotFound.component.jsx";

function MainContent() {
    return (
        <div className={style.container}>

            <Routes>
                <Route path="/" element={<Navigate to="/manage-leads"/>} />
                <Route path="/manage-leads" element={<ManageLeads />} />
                <Route path="/page-not-found" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default MainContent;