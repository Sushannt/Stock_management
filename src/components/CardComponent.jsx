import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Stack,
} from "@mui/material";

const CardComponent = ({ title, content, icon }) => {
  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
        >
          <Grid marginY="auto">
            <Typography variant="h2">{icon}</Typography>
          </Grid>
          <Grid marginY="auto">
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body1" color="secondary.dark">
              {content}
            </Typography>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
