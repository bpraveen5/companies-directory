import React, { createContext, useState, useCallback } from "react";
import mockData from "../../mock/companies.json";

export const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  // Initialize with mock data from the project's mock/companies.json
  // support both formats: either an array at top-level or an object with a `companies` key
  const initialCompanies = Array.isArray(mockData) ? mockData : mockData?.companies || [];

  // Normalize companies: ensure every company has a `foundedYear` field
  const normalizedCompanies = initialCompanies.map((c) => ({
    ...c,
    foundedYear: c.foundedYear ?? c.founded ?? null,
  }));

  const [companies, setCompanies] = useState(normalizedCompanies);

  const defaultFilters = {
    location: "",
    industry: "",
    search: "",
    size: ""
  };

  const [filters, setFilters] = useState(defaultFilters);

  const resetFilters = useCallback(() => setFilters(defaultFilters), []);

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies, filters, setFilters, resetFilters }}>
      {children}
    </CompaniesContext.Provider>
  );
};
