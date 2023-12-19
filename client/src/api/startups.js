import instance from ".";

export const getStartupCount = async () => {
  const {data} = await instance("/startup-count");
  return data;
};

export const getStartups = async () => {
  const {data} = await instance("/startups");
  console.log(data);
  return data;
};

export const addStartup = async (startup) => {
  const {data} = await instance.post("/startups", startup);
  return data;
};

export const getSearchedStartups = async (search) => {
  const {data} = await instance.get(`/searchedStartups?search=${search}`);
  return data;
};
