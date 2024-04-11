import { Stack, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import LoginLayout from "../layout";
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
Page.getLayout = function getLayout(page: any) {
  return <LoginLayout>{page}</LoginLayout>;
};
