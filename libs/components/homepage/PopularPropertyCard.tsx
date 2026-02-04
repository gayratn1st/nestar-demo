import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

type Props = {
  propertyId?: number;
};

const PopularPropertyCard = ({ propertyId }: Props) => {
  return (
    <Stack className={"trend-card-box"}>
      <Box
        className={"card-img"}
        style={{
          backgroundImage: "url('/img/banner/types/villa.webp')",
        }}
      >
        <div>$560000</div>
      </Box>

      <Box className={"info"}>
        <strong className={"title"}>Kingston Buildings {propertyId}</strong>
        <p className={"desc"}>no description</p>

        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>2 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>5 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>150 m2</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <div className={"bott"}>
          <p>Rent</p>
          <div className={"view-like-box"}>
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className={"view-cnt"}>100</Typography>
            <IconButton color="default">
              <FavoriteIcon />
            </IconButton>
            <Typography className={"view-cnt"}>100</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;