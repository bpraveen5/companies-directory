import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCompanies = async (params = {}) => {
  // params: { page, limit, search, location, industry, sortBy, order }
  const response = await axios.get(`${BASE}/companies`, { params });
  // Expect API to return { data: [], total: 123 }
  return response.data;
}
