import { Container, Grid, Stack, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent";

import WavingHandIcon from "@mui/icons-material/WavingHand";
import ReceiptIcon from "@mui/icons-material/Receipt";
const Dashboard = () => {
  return (
    <Container sx={{ marginTop: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={3}>
        <WavingHandIcon fontSize="large" color="primary" />
        <Typography variant="h4">Welcome Back!</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Monthly Issue/Return"
            content="100"
            icon={<ReceiptIcon fontSize="large" color="primary" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Weekly Stock Issue"
            content="15"
            icon={<ReceiptIcon fontSize="large" color="primary" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Weekly Stock Return"
            content="5"
            icon={<ReceiptIcon fontSize="large" color="primary" />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
