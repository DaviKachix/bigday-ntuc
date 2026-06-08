import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="px-10 py-14 max-w-3xl">
        <h1 className="text-3xl font-bold text-purple-950">
          Northern Tanzania Union Conference
        </h1>

        <p className="mt-4 text-gray-600">
          NTUC is the highest SDA administrative structure in Northern Tanzania.
        </p>

        <div className="mt-6 text-gray-700 space-y-2">
          <p>• 2000+ Churches</p>
          <p>• 446,000+ Members</p>
          <p>• Universities & Hospitals</p>
          <p>• ADRA Tanzania</p>
        </div>
      </div>
    </>
  );
}
