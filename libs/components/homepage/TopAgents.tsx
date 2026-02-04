import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

type Agent = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

type Props = {
  initialInput?: Agent[];
};

const TopAgents = ({ initialInput }: Props) => {
  const [topAgents] = useState<Agent[]>(
    initialInput ?? [
      {
        id: 1,
        name: "Arlene McCoy",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
      {
        id: 2,
        name: "Esther Howard",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
      {
        id: 3,
        name: "Cody Fisher",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
      {
        id: 4,
        name: "Bessie Cooper",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
      {
        id: 5,
        name: "Guy Hawkins",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
      {
        id: 6,
        name: "Jenny Wilson",
        role: "Agent",
        imageUrl: "/img/profile/girl.svg",
      },
    ]
  );

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>These are our best Top Agents</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/agent"}>
                <span>All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          <div className={"swiper-agent-prev"}>
            <WestIcon />
          </div>

          <Swiper
            modules={[Navigation]}
            className={"top-agent-swiper"}
            slidesPerView={"auto"}
            spaceBetween={40}
            navigation={{
              nextEl: ".swiper-agent-next",
              prevEl: ".swiper-agent-prev",
            }}
          >
            {topAgents.map((agent) => {
              return (
                <SwiperSlide key={agent.id} className={"top-agent-slide"}>
                  <TopAgentCard agent={agent} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className={"swiper-agent-next"}>
            <EastIcon />
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;
