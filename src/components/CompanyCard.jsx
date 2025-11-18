import React from "react";
import { Card, CardContent, Typography, Box, Avatar, Chip, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./CompanyCard.css"; // Import CSS file

export default function CompanyCard({ company }) {
  return (
    <Card className="company-card">
      <CardContent className="card-content">
        {/* Header */}
        <Box className="card-header">
          <Box className="header-left">
            <Avatar src={company.logoUrl} className="company-avatar">
              {company.name?.[0] ?? "C"}
            </Avatar>

            <Box>
              <Typography variant="h6" className="company-name" noWrap>
                {company.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {company.location}
              </Typography>
            </Box>
          </Box>

          <Chip label={company.industry} size="small" className="industry-chip" />
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" className="company-desc">
          {company.description}
        </Typography>

        {/* Details */}
        <Box className="company-details">
          <Typography variant="body2">
            <strong>Size:</strong> {company.size || company.employees || "—"}
          </Typography>
          <Typography variant="body2">
            <strong>Founded:</strong> {company.foundedYear || "—"}
          </Typography>
        </Box>
      </CardContent>

      {/* Button */}
      <Box className="button-container">
        <Button 
          variant="contained"
          size="small"
          fullWidth
          endIcon={<OpenInNewIcon />}
          href={company.website || "#"}
          target="_blank"
        >
          Visit Website
        </Button>
      </Box>
    </Card>
  );
}
