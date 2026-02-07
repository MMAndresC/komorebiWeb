import SchoolList from "./components/SchoolList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Agenda 2030: Collaborating schools
      </h1>

      <div className="flex justify-center mb-8">
        <Image
          src="/agenda_2030_v2.jpg"
          alt="Agenda 2030"
          width={800}
          height={300}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
  
      <SchoolList />
    </main>
  );
}

