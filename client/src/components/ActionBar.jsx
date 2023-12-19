import SelectMenu from "./SelectMenu";
import propTypes from "prop-types";
import SearchBar from "./SearchBar";
import AddStartupModal from "./AddStartupModal";
const ActionBar = ({setQuery, setSearchQuery}) => {
  return (
    <section className=" max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 pb-10 px-4 lg:px-0" id="explore">
      <SearchBar setSearchQuery={setSearchQuery} />
      <SelectMenu setQuery={setQuery} />
      <AddStartupModal />
    </section>
  );
};

ActionBar.propTypes = {
  data: propTypes.array,
  setQuery: propTypes.func,
  setSearchQuery: propTypes.func,
};
export default ActionBar;
