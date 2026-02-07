export default function SchoolCard({ school }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2">
          {school.name}
        </h2>

        <p className="text-gray-600">
          🏙️ {school.city}
        </p>

      </div>
    );
  }
  