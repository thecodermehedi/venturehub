import {useEffect, useState} from "react";
import Card from "./Card";
import ActionBar from "./ActionBar";
import SkeletonCard from "./SkeletonCard";
import useStartups from "../hooks/useStartups";
import {getSearchedStartups} from "../api/startups";

const GridContainer = () => {
  const [query, setQuery] = useState("All Industries");
  const [searchQuery, setSearchQuery] = useState("");
  const {startups, isLoading, isError, isSearchDataLoading} = useStartups();
  const [localData, setLocalData] = useState(startups);

  useEffect(() => {
    if (query === "All Industries") return setLocalData(startups);
    const filteredData = startups?.filter((startup) => {
      return startup?.IndustryVertical?.toLowerCase() === query.toLowerCase();
    });
    setLocalData(filteredData);
  }, [query, startups]);

  useEffect(() => {
    const getSearchedData = async () => {
      if (searchQuery === "") return setLocalData(startups);
      const data = await getSearchedStartups(searchQuery);
      if (data?.length > 0) {
        console.log(data);
        setLocalData(data);
      }
    };
    getSearchedData();
  }, [searchQuery, startups]);

  if (isError) return <div>Something went wrong</div>;

  const skeletonArray = new Array(20).fill(0);

  return (
    <section className="min-h-screen">
      <ActionBar
        setQuery={setQuery}
        data={startups}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="pb-10 max-w-screen-xl mx-auto px-4 lg:px-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        {isLoading || isSearchDataLoading
          ? skeletonArray.map((_, index) => {
              return <SkeletonCard key={index} />;
            })
          : localData?.map((startup) => {
              return <Card key={startup?._id} startup={startup} />;
            })}
      </div>
    </section>
  );
};

export default GridContainer;
