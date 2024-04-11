import { Box, Typography, Stack } from "@mui/material";
import { FaCubesStacked } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export function Sidebar() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row">
        <FaCubesStacked />
        <Typography>Хяналтын самбар</Typography>
      </Stack>
      <Stack direction="row">
        <FaRegClipboard />
        <Typography>Захиaлга</Typography>
      </Stack>
      <Stack direction="row">
        <FaTags />
        <Typography>Захиaлга</Typography>
      </Stack>
      <Stack direction="row">
        <FaRegListAlt />
        <Typography>Захиaлга</Typography>
      </Stack>
      <Stack direction="row">
        <FaGear />
        <Typography>Захиaлга</Typography>
      </Stack>
    </Stack>
  );
}
