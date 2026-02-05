import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>COMMUNITY MOBILE</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">COMMUNITY</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Community);
