import propTypes from "prop-types";
const SearchBar = ({setSearchQuery}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchQuery(form.search.value);
    console.log(form.search.value);
    form.reset();
  };
  return (
    <form className="lg:col-span-4 " onSubmit={handleSearch}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          name="search"
          className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 
        rounded-2xl focus:border-blue-500 bg-gray-50 outline-none focus:outline-none"
          placeholder="Search for startups..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700
         hover:bg-black focus:outline-none outline-none 
         font-medium rounded-2xl text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  setSearchQuery: propTypes.func,
};

export default SearchBar;
