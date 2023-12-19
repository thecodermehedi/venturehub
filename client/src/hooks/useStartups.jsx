import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  addStartup,
  getSearchedStartups,
  getStartupCount,
  getStartups,
} from "../api/startups";
import toast from "react-hot-toast";

const useStartups = () => {
  const queryClient = useQueryClient();

  const {data: totalStartups} = useQuery({
    queryKey: ["startup-count"],
    queryFn: getStartupCount,
  });

  const {
    data: startups,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["startups"],
    queryFn: getStartups,
  });

  const industryTypes = startups?.map((item) => item.IndustryVertical);
  const uniqueIndustryTypes = [...new Set(industryTypes)];
  uniqueIndustryTypes.unshift("All Industries");

  const {mutateAsync} = useMutation({
    mutationKey: ["addStartup"],
    mutationFn: addStartup,
    onSuccess: () => {
      queryClient.invalidateQueries("startups");
      toast.success("Startup added successfully");
    },
  });

  const {data: searchedStartups, isLoading: isSearchDataLoading} = useQuery({
    queryKey: ["searchedStartups"],
    queryFn: getSearchedStartups,
  });

  return {
    startups,
    isLoading,
    isError,
    uniqueIndustryTypes,
    mutateAsync,
    totalStartups,
    getSearchedStartups,
    searchedStartups,
    isSearchDataLoading,
  };
};

export default useStartups;
