import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";

type Props = {
  initialInput?: number[];
};

const PopularProperties = ({ initialInput }: Props) => {
  const [popularProperties] = useState<number[]>(initialInput ?? [1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Popular is based on views</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>Populars Empty</Box>
          ) : (
            <>
              <div className={"pagination-box"}>
                <WestIcon className={"swiper-popular-prev"} />
                <div className={"swiper-popular-pagination"} />
                <EastIcon className={"swiper-popular-next"} />
              </div>

              <Swiper
                modules={[Navigation, Pagination]}
                className={"popular-property-swiper"}
                slidesPerView={"auto"}
                spaceBetween={25}
                navigation={{
                  nextEl: ".swiper-popular-next",
                  prevEl: ".swiper-popular-prev",
                }}
                pagination={{
                  el: ".swiper-popular-pagination",
                }}
              >
                {popularProperties.map((propertyId) => {
                  return (
                    <SwiperSlide key={propertyId} className={"popular-property-slide"}>
                      <PopularPropertyCard propertyId={propertyId} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;
