import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';


const AdminDashboard = () => {
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }} style={{ fontFamily: 'Montserrat, sans-serif'}}>
                    Admin Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="100 k+"
                        icon={<SupervisorAccountIcon sx={{ color: "white", fontSize: 30 }} />}
                        description="Administrators"
                        money=''
                        style={{ fontFamily: 'Montserrat, sans-serif'}}
                    />
                    <StatComponent
                        value="200"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                        style={{ fontFamily: 'Montserrat, sans-serif'}}
                    />
                    <StatComponent
                        value="100"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                        style={{ fontFamily: 'Montserrat, sans-serif'}}
                    />

                </Stack>

            </Box>
        </>
    )
}

export default AdminDashboard