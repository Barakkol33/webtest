import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";
import FileExplorer from "../components/FileExplorer";

const JobPage = () => {
    const job = {
        name: "Example Job",
        date: "2024-07-27",
        user: "John Doe",
        files: [
            {name: "File 1", content: "Content of File 1"},
            {name: "File 2", content: "Content of File 2"},
            {name: "File 3", content: "Content of File 3"}
        ]
    };
    return (
        <DashboardLayout>
            <DashboardNavbar/>
        <div className="job-page">
            <h1>{job.name}</h1>
            <p>Date: {job.date}</p>
            <p>User: {job.user}</p>
            <FileExplorer files={job.files}/>
        </div>
        </ DashboardLayout>
    )
}

export default JobPage;