import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

export default function Pagination({ total, page, limit, onChange }) {
  const pages = Math.max(1, Math.ceil(total / limit));
  return (
    <MuiPagination
      count={pages}
      page={page}
      onChange={(e, value) => onChange(value)}
      color="primary"
    />
  );
}
