export default function StarCard({ data, isActive }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[400px] h-[400px] bg-yellow-300 flex items-center justify-center text-black font-bold rounded-xl shadow-lg">
        {data.name}
      </div>
      {isActive && (
        <>
          <h2 className="text-2xl font-bold mt-4">{data.name}</h2>
          <p className="text-sm text-gray-300 mt-2 max-w-sm">{data.description}</p>
        </>
      )}
    </div>
  );
}
