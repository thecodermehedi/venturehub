import propType from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import {MapPin} from "react-feather";
import CardDetailsModal from "./CardDetailsModal";

const Card = ({startup}) => {
  const Year = (date) => {
    return date?.split("/")?.[2];
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        key={startup?._id}
        className="block text-left max-w-sm p-6 border border-gray-200 rounded-2xl shadow
        bg-gray-50  hover:border-gray-800 cursor-pointer transition duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 ">
            {startup?.StartupName}
          </h5>
          <p className="font-normal  mb-2 border border-gray-800 w-fit px-4 rounded-2xl">
            {Year(startup?.Date)}
          </p>
        </div>
        <p className="font-normal mb-2 text-gray-700 ">
          <MapPin size={15} className="inline" /> {startup?.CityLocation}
        </p>
        <p className="font-normal text-gray-700 pb-2 ">
          {startup?.AmountInUSD === "" ? (
            <span className="border pl-2 pr-4 bg-red-100 border-red-200 text-red-500 rounded-2xl">
              {"$0000000"}
            </span>
          ) : (
            <span className="border pl-2 pr-4 bg-blue-100 border-blue-200 text-blue-500 rounded-2xl">
              {"$" + startup?.AmountInUSD}
            </span>
          )}
        </p>
      </Dialog.Trigger>
      <CardDetailsModal startup={startup} />
    </Dialog.Root>
  );
};

Card.propTypes = {
  startup: propType.object,
  _id: propType.string,
  StartupName: propType.string,
  CityLocation: propType.string,
  Date: propType.string,
  AmountInUSD: propType.string,
};

export default Card;
