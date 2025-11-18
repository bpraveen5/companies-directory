import React, { useContext } from "react";
import { Box, TextField, MenuItem, Typography, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { CompaniesContext } from "../context/CompaniesContext";

export default function Filters({ locations, industries }) {
  const { filters, setFilters, resetFilters } = useContext(CompaniesContext);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mb={3}>
      <Box display="flex" alignItems="center" gap={1} sx={{ color: "text.secondary" }}>
        <FilterListIcon fontSize="small" />
        <Typography variant="body2">Filter by:</Typography>
      </Box>

      <TextField
        select
        label="All Industries"
        name="industry"
        value={filters.industry}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="">All Industries</MenuItem>
        {industries.map((ind) => (
          <MenuItem key={ind} value={ind}>{ind}</MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="All Locations"
        name="location"
        value={filters.location}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 160 }}
      >
        <MenuItem value="">All Locations</MenuItem>
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>{loc}</MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="All Sizes"
        name="size"
        value={filters.size || ""}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 140 }}
      >
        <MenuItem value="">All Sizes</MenuItem>
        <MenuItem value="small">Small</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="large">Large</MenuItem>
      </TextField>

      <Box sx={{ ml: 'auto' }}>
        <Button size="small" onClick={resetFilters}>
          Clear
        </Button>
      </Box>
    </Box>
  );
}
