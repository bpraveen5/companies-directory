import React, { useContext } from "react";
import { Typography, Box, TextField, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CompaniesContext } from "../context/CompaniesContext";
import "./Header.css";

export default function Header() {
  const { filters, setFilters } = useContext(CompaniesContext);

  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  return (
    <Box mb={3} className="header-container">
      <Paper elevation={0} className="header-paper">
        <Box className="header-top">
  <Box className="header-logo">C.D</Box>

  <Box>
    <Typography variant="h4" component="h1" fontWeight="bold">
      Companies Directory
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Discover and explore leading companies worldwide
    </Typography>
  </Box>
</Box>

      </Paper>

      <TextField
        fullWidth
        size="medium"
        placeholder="Search companies by name or description..."
        value={filters.search}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
