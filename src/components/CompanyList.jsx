import React, { useContext } from "react";
import { CompaniesContext } from "../context/CompaniesContext";
import { Typography, Box } from "@mui/material";
import CompanyCard from "./CompanyCard";
import "./CompanyList.css"; // External CSS file

export default function CompanyList() {
  const { companies, filters } = useContext(CompaniesContext);

  const filteredCompanies = companies.filter((c) => {
    const matchesLocation = filters.location
      ? c.location?.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchesIndustry = filters.industry
      ? c.industry === filters.industry
      : true;

    const matchesSearch = filters.search
      ? c.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    return matchesLocation && matchesIndustry && matchesSearch;
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" mb={2}>
        {filteredCompanies.length} Companies Found
      </Typography>

      {filteredCompanies.length === 0 ? (
        <Typography mt={2}>No companies found.</Typography>
      ) : (
        <div className="company-list-container">
          {filteredCompanies.map((c) => (
            <div className="company-item" key={c.id}>
              <CompanyCard company={c} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
