import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Panda from "../img/1.jpeg";
import Bron from "../img/2.jpeg";
import Zebra from "../img/3.jpeg";
import Jiraf from "../img/4.jpeg";
import Tiger from "../img/5.jpeg";
import Elephant from "../img/6.jpeg";
import Got from "../img/7.jpeg";
import Willi from "../img/8.jpeg";
import Lizar from "../img/9.jpeg";
import { Box } from "@mui/material";

const data = [
  { name: "Panda", img: Panda },
  { name: "Bron", img: Bron },
  { name: "Zebra", img: Zebra },
  { name: "Jiraf", img: Jiraf },
  { name: "Tiger", img: Tiger },
  { name: "Elephant", img: Elephant },
  { name: "Got", img: Got },
  { name: "Willi", img: Willi },
  { name: "Lizar", img: Lizar },
];

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "10px",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {data.map((enymal, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={enymal.img} title="Anymal" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {enymal.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {enymal.name} are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Content;
