import React from "react";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Smile1 from "../accets/img/1.jpeg";
import Smile2 from "../accets/img/2.jpeg";
import Smile3 from "../accets/img/3.jpeg";
import Smile4 from "../accets/img/4.jpeg";
import Smile5 from "../accets/img/5.jpeg";
import { Box, Button } from "@mui/material";

export const Smiles = () => {
  const data = [
    { id: 1, img: Smile1 },
    { id: 2, img: Smile2 },
    { id: 3, img: Smile3 },
    { id: 4, img: Smile4 },
    { id: 5, img: Smile5 },
  ];

  const [likes, setLikes] = React.useState({});
  const [winnersId, setWinnersId] = React.useState();

  React.useEffect(() => {}, [winnersId]);

  const handkeLikeClick = (id) => {
    setLikes((prev) => {
      const newLikes = { ...prev };
      if (!newLikes.hasOwnProperty(id)) {
        newLikes[id] = 1;
      } else {
        newLikes[id] = +newLikes[id] + 1;
      }

      return newLikes;
    });
  };

  const handleShowWinner = () => {
    if (likes) {
      const objWin = Object.entries(likes);
      const winner = objWin?.reduce((prev, current) =>
        prev[1] > current[1] ? prev : current
      );
      setWinnersId({
        id: Number(winner[0]),
        like: winner[1],
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {data.map((smile) => (
          <Badge
            key={smile.id}
            badgeContent={likes[smile.id] || 0}
            color="error"
          >
            <Box
              sx={{
                width: "200px",
              }}
            >
              <img style={{ width: "100%" }} src={smile.img} alt="smile" />
              <FavoriteBorderIcon
                color={likes[smile.id] > 0 ? "error" : ""}
                onClick={() => handkeLikeClick(smile.id)}
              />
            </Box>
          </Badge>
        ))}
      </Box>
      <Button
        onClick={handleShowWinner}
        variant="outlined"
        sx={{
          margin: "0 auto",
          display: "block",
          marginTop: "20px",
        }}
      >
        Show Winer Likes
      </Button>
      {winnersId && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <Badge
            key={winnersId.id}
            badgeContent={likes[winnersId.id] || 0}
            color="error"
          >
            <Box
              sx={{
                width: "200px",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={data[winnersId.id - 1].img}
                alt="smile"
              />
              <FavoriteBorderIcon
                color={likes[winnersId.like] > 0 ? "error" : ""}
                onClick={() => handkeLikeClick(winnersId.id)}
              />
            </Box>
          </Badge>
        </Box>
      )}
    </>
  );
};
