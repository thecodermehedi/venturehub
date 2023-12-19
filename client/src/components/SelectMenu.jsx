import propTypes from "prop-types";
import useStartups from "../hooks/useStartups";
const SelectMenu = ({setQuery}) => {
  const {uniqueIndustryTypes} = useStartups();

  return (
    <select
      id="countries"
      className="bg-gray-200 border border-gray-300 text-sm rounded-2xl focus:outline-none outline-none focus:border-blue-500 block w-full p-4 "
      defaultValue={"All Industries"}
      onChange={(e) => setQuery(e.target.value)}
    >
      {uniqueIndustryTypes?.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

SelectMenu.propTypes = {
  setQuery: propTypes.func,
};

export default SelectMenu;
