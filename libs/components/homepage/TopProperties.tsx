import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";

type Props = {
  initialInput?: number[];
};

const TopProperties = ({ initialInput }: Props) => {
  const [topProperties] = useState<number[]>(
    initialInput ?? [1, 2, 3, 4, 5, 6],
  );

  return (
    <Stack className={"top-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Property</span>
            <p>Top properties are based on sales</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className={"swiper-top-prev"} />
              <div className={"swiper-top-pagination"} />
              <EastIcon className={"swiper-top-next"} />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          {topProperties.length === 0 ? (
            <Box className={"empty-list"}>Top Properties Empty</Box>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              className={"top-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
              }}
            >
              {topProperties.map((propertyId) => {
                return (
                  <SwiperSlide
                    key={propertyId}
                    className={"top-property-slide"}
                  >
                    <TopPropertyCard propertyId={propertyId} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;
