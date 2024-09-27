export default function SelectSort({ setCharacters, characters }) {
  const handleSelect = (e) => {
    const sortedCharacters = [...characters].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    e.target.value === "a_z"
      ? setCharacters(sortedCharacters)
      : setCharacters(sortedCharacters.reverse());
  };

  return (
    <div style={{ zIndex: "2" }} className="flex justify-center mb-8">
      <select
        onChange={handleSelect}
        className="p-2 bg-gray-800 text-white border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
      >
        <option value="a_z">Sort A-Z</option>
        <option value="z-a">Sort Z-A</option>
      </select>
    </div>
  );
}
