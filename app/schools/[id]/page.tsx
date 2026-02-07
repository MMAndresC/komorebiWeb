import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { School } from "@/app/types";

export default function SchoolDetailPage() {
  const { query } = useRouter();
  const [school, setSchool] = useState<School | null>(null);

  useEffect(() => {
    if (!query.id) return; 
    
    const fetchSchoolData = async () => {
      const res = await fetch(`/api/schools/${query.id}`);
      if (res.ok) {
        const data = await res.json();
        setSchool(data);
      } else {
        console.error("Error fetching school details");
      }
    };

    fetchSchoolData();
  }, [query.id]);

  if (!school) return <p>Cargando...</p>;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{school.name}</h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
        <p>🏙 <strong>City:</strong> {school.city}</p>
        <p>👩‍🎓 <strong>Number of students:</strong> {school.students}</p>
        <p>📅 <strong>Register date:</strong> {school.registerDate}</p>
      </div>
    </main>
  );
}
