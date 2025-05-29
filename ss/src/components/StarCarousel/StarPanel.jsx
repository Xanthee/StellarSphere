export default function StarPanel() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      {!clicked ? (
        <button
          className="bg-yellow-400 px-6 py-3 rounded text-black"
          onClick={() => {
            console.log("Button was clicked");
            setClicked(true);
          }}
        >
          Explore
        </button>
      ) : (
        <h1>Now exploring</h1>
      )}
    </div>
  );
}