import { Box, Stack } from "@mui/material";

type Agent = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

type Props = {
  agent: Agent;
};

const TopAgentCard = ({ agent }: Props) => {
  return (
    <Stack className={"top-agent-card"}>
      <Box className={"card-img"} style={{ backgroundImage: `url("${agent.imageUrl}")` }} />
      <strong className={"name"}>{agent.name}</strong>
      <span className={"role"}>{agent.role}</span>
    </Stack>
  );
};

export default TopAgentCard;