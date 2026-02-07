"use client";

import { useEffect, useState } from "react";
import SchoolCard from "./SchoolCard";

export default function SchoolList() {
  const [schools, setSchool] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/schools")
      .then(res => res.json())
      .then(data => {
        setSchool(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading schools...</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {schools.map(school => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
}
