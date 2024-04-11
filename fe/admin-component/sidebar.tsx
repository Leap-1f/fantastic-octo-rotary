"use client";
import { Typography, Stack } from "@mui/material";
import { FaCubesStacked } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
export function Sidebar() {
  const pathname = usePathname();
  if (pathname === "/admin/dashboard") {
  }
  const icons = [
    {
      name: "Хяналтын самбар",
      icon: <FaCubesStacked size={24} />,
    },
    {
      name: "Захиaлга",
      icon: <FaRegClipboard size={24} />,
    },
    {
      name: "Орлого",
      icon: <FaTags size={24} />,
    },
    {
      name: "Бүтээгдэхүүн",
      icon: <FaRegListAlt size={24} />,
    },
    {
      name: "Хэрэглэгч",
      icon: <FaUser size={24} />,
    },
    {
      name: "Тохиргоо",
      icon: <FaGear size={24} />,
    },
  ];
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: "11%",
        position: "fixed",
        height: "100vh",
        display: "flex",
        pt: "5vh",
      }}
    >
      {icons.map((icon) => (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyItems: "center",
            height: "5vh",
            alignItems: "center",
            paddingLeft: "1vw",

            ":hover": {
              cursor: "pointer",
              bgcolor: "#e8e8e9",
            },
          }}
        >
          {icon.icon}
          <Typography sx={{ fontWeight: "semi-bold", fontSize: "20px" }}>
            {icon.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
