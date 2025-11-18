import React from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import CompanyList from "../components/CompanyList";

export default function Home() {
  const locations = ["Bangalore", "Mumbai", "Delhi", "Remote", "Hyderabad", "Chennai", "Pune", "Kolkata", "Noida", "Gurgaon", "Ahmedabad", "Jaipur", "Other"];
  const industries = ["Software","IT", "Finance", "Healthcare", "Retail", "Media", "Education", "Manufacturing", "Consulting", "Real Estate", "Transportation", "Hospitality", "Other"];
  return (
    <>
      <Header />
      <Filters locations={locations} industries={industries} />
      <CompanyList />
    </>
  );
}
