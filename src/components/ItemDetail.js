import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, Box } from '@mui/material';
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ItemDetail({ items }) {
    const { itemName } = useParams();
    const item = items.find(i => i.name === itemName);

    if (!item) {
        return <Typography variant="h6">Item not found</Typography>;
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox>
                <Box>
                    <MDBox py={2}>
                        <Card>
                            <MDBox p={2}>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    {item.name.toUpperCase()}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="div">
                                    {item.user}, {new Date(item.date).toLocaleDateString()}, {item.var1}, {item.var2}
                                </Typography>
                            </MDBox>
                        </Card>
                    </MDBox>
                </Box>
            </MDBox>
        </DashboardLayout>
    );
}

export default ItemDetail;
