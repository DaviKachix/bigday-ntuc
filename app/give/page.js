import Navbar from "@/components/Navbar";

export default function Give() {
  return (
    <>
      <Navbar />

      <div className="px-10 py-14 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-950">Support the Mission</h1>

        <div className="mt-6 space-y-4">
          <Box title="Bank" value="NTUC Account XXXXX" />
          <Box title="M-Pesa" value="07XXXXXXXX" />
          <Box title="Airtel" value="07XXXXXXXX" />
        </div>

        <button className="mt-8 w-full bg-purple-950 text-white py-3 rounded-xl">
          Donate Now
        </button>
      </div>
    </>
  );
}

function Box({ title, value }) {
  return (
    <div className="p-4 border rounded-xl">
      <h3 className="font-semibold text-purple-950">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
