import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ searchTerm, setSearchTerm, searchPhotos }) => {
 
  const handleSearchClick = () => {
    searchPhotos();
  };

  return (
    <div className="flex justify-center my-4">
      <div className="relative w-2/3 sm:w-1/3">
        <input
          type="text"
          placeholder="Pesquise por palavras-chave..."
          className="border border-[#1e293b] rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#0f172a] hover:shadow-md transition-shadow duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button
          onClick={handleSearchClick} 
          className="bg-[#0ea5e9] text-white p-2 rounded-full hover:bg-[#334155] absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-[#1e293b] hover:border-[#0f172a] transition-all duration-300"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
