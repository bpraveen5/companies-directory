// import { useState, useEffect } from "react";
// import axios from "axios";

// // export default function useFetch(url, { params } = {}) {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     let isMounted = true;
// //     setLoading(true);
// //     setError(null);
// //     axios.get(url, { params })
// //       .then(res => { if (isMounted) setData(res.data); })
// //       .catch(err => { if (isMounted) setError(err); })
// //       .finally(() => { if (isMounted) setLoading(false); });

// //     return () => { isMounted = false; };
// //   }, [url, JSON.stringify(params)]);

// //   return { data, loading, error };
// // }
// // useEffect(() => {
// //   fetch("http://localhost:4000/companies")
// //     .then(res => res.json())
// //     .then(data => setCompanies(data))
// // }, []);

// // import React, { useEffect, useState } from "react";

// // function App() {
// //   const [companies, setCompanies] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/companies")
// //       .then((res) => res.json())
// //       .then((data) => setCompanies(data));
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Companies Directory</h1>
// //       <ul>
// //         {companies.map((c) => (
// //           <li key={c.id}>{c.name} - {c.location}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
