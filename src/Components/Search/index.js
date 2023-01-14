import SearchItem from "./SearchItem";
import Data from "../../Data/dictionary";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const searchByName = (obj, searchTerm) => {
  // Use Object.values to get an array of the values in the object
  const values = Object.values(obj);

  // Use Array.flat to flatten the array of values into a single array
  const flatValues = values.flat();

  // Use Array.filter to return an array of objects that have a name property that includes the search term
  const results = flatValues.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return results;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm === "") return setFilteredData(Data);
    setFilteredData(searchByName(Data, debouncedSearchTerm));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <>
      <main>
        <div className="Search">
          <div className="SearchWrapper">
            <CiSearch className="SearchIcon" />
            <input
              className="SearchInput"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </main>
      <div>
        {filteredData?.map((item) => {
          return <SearchItem item={item} key={item.slug} />;
        })}
      </div>
    </>
  );
};

export default Search;
