import Spline from '@splinetool/react-spline';
import '../Styles/style.css';

export default function StarCard({ data, isActive }) {
  return (
    // CARD CONTENT
    <div className="flex flex-col items-center text-center">
      <div className="w-[500px] h-[500px] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
        <Spline scene={data.splineScene} />
      </div>

      {isActive && (
        <>
          <h2 className="text-3xl font-orbitron font-bold mt-4">{data.name}</h2>
          <p className="text-m font-mono text-gray-300 mt-2 max-w-sm">{data.type}</p>
          <p className="text-m font-mono text-gray-300 mt-2 max-w-sm">{data.description}</p>
        </>
      )}
    </div>
  );
}
