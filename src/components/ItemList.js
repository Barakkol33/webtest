import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Box } from '@mui/material';
import MDBox from "./MDBox";
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";

function ItemList({ items, linkFormat}) {
    const navigate = useNavigate();

    const handleCardClick = (itemName) => {
        console.log(typeof(linkFormat))
        navigate(linkFormat.replace("{}", itemName));
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox>
                <Box sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    {items.map((item, index) => (
                        <MDBox key={index} py={1} onClick={() => handleCardClick(item.name)}>
                            <Card sx={{ cursor: 'pointer' }}>
                                <MDBox p={2}>
                                    <Typography variant="h5" component="div" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="div">
                                        {item.user}, {new Date(item.date).toLocaleDateString()}, {item.var1}, {item.var2}
                                    </Typography>
                                </MDBox>
                            </Card>
                        </MDBox>
                    ))}
                </Box>
            </MDBox>
        </DashboardLayout>
    );
}

export default ItemList;
