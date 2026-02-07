import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-green-700">
          Agenda 2030
        </span>

        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Schools
          </Link>

          <Link
            href="/projects"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
