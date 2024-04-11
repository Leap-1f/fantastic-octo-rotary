import { Stack, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function Page() {
  const [viewTypes, setViewTypes] = useState([
    "Бүгд",
    "Шинэ захиалага",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ]);
  return (
    <Stack spacing={3} direction="column">
      <Stack></Stack>
    </Stack>
  );
}
