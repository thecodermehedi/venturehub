import propType from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
const CardDetailsModal = ({startup}) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed z-10 inset-0 w-full h-full bg-black opacity-40" />
      <Dialog.Content className=" z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg lg:text-2xl font-bold  text-blue-500 ">
              {startup?.StartupName}
            </Dialog.Title>
            <Dialog.Close className="p-2 text-blue-700 rounded-2xl hover:text-red-500 hover:bg-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Dialog.Close>
          </div>
          {startup?.Date && (
            <p>
              <strong>Starting Date:</strong> {startup.Date}
            </p>
          )}
          {startup?.IndustryVertical && (
            <p>
              <strong>Industry:</strong> {startup.IndustryVertical}
            </p>
          )}
          {startup?.SubVertical && (
            <p>
              <strong>Sub-Industry:</strong> {startup.SubVertical}
            </p>
          )}
          {startup?.CityLocation && (
            <p>
              <strong>Location:</strong> {startup.CityLocation}
            </p>
          )}
          {startup?.InvestorsName && (
            <p>
              <strong>Investors:</strong> {startup.InvestorsName}
            </p>
          )}
          {startup?.InvestmentType && (
            <p>
              <strong>Investment Type:</strong> {startup.InvestmentType}
            </p>
          )}
          {startup?.AmountInUSD && (
            <p>
              <strong>Amount (USD):</strong>{" "}
              {startup.AmountInUSD === ""
                ? "$0000000"
                : "$" + startup.AmountInUSD}
            </p>
          )}
          {startup?.Remarks && (
            <p>
              <strong>Remarks:</strong>{" "}
              {startup.Remarks === "" ? "N/A" : "$ " + startup.Remarks}
            </p>
          )}
          {startup?.EmployeesNo && (
            <p>
              <strong>No. Of Employee:</strong> {startup.EmployeesNo}
            </p>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

CardDetailsModal.propTypes = {
  startup: propType.object,
  _id: propType.string,
  StartupName: propType.string,
  CityLocation: propType.string,
  Date: propType.string,
  AmountInUSD: propType.string,
};

export default CardDetailsModal;
