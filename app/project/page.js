import Navbar from "@/components/Navbar";

export default function Project() {
  return (
    <>
      <Navbar />

      <div className="px-10 py-14">
        <h1 className="text-3xl font-bold text-purple-950">Phase One Project</h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          NTUC Headquarters will strengthen mission coordination, leadership, and administration.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Box title="Foundation Works" />
          <Box title="Admin Structure" />
          <Box title="Mission Center" />
          <Box title="Infrastructure" />
        </div>
      </div>
    </>
  );
}

function Box({ title }) {
  return (
    <div className="p-6 border rounded-xl">
      <h3 className="text-purple-950 font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">Phase One component</p>
    </div>
  );
}
