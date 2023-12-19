import * as Dialog from "@radix-ui/react-dialog";
import {Plus} from "react-feather";
import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import useStartups from "../hooks/useStartups";
const AddStartupModal = () => {
  const {mutateAsync} = useStartups();
  const [startingDate, setStartingDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const newStartup = {
      ...data,
      Date: startingDate.toLocaleDateString("en-GB"),
    };
    console.log(newStartup);
    await mutateAsync(newStartup);
    reset();
  };
  return (
    <Dialog.Root className="fixed inset-0 z-10 overflow-y-auto">
      <Dialog.Trigger
        className="p-4 text-white bg-black hover:bg-blue-600
       border rounded-2xl flex items-center text-center gap-4"
      >
        <Plus width={20} /> <span>Add Startup</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-10 inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className=" z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg md:max-w-xl lg:max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between text-center">
              <Dialog.Title className="text-lg lg:text-2xl pb-5  w-full font-bold  text-black ">
                Add New Startup
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
            <div className="mt-4">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="StartupName">Name</label>
                    <input
                      type="text"
                      name="StartupName"
                      id="StartupName"
                      className={`border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500 ${
                        errors.StartupName && "border-red-500"
                      }`}
                      {...register("StartupName", {required: true})}
                      placeholder="Startup Name"
                    />
                    {errors.StartupName && (
                      <span className="text-red-600 text-xs ml-5">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="CityLocation">Location</label>
                    <input
                      type="text"
                      name="CityLocation"
                      id="CityLocation"
                      className={`border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500 ${
                        errors.CityLocation && "border-red-500"
                      }`}
                      {...register("CityLocation", {required: true})}
                      placeholder="City Location"
                    />
                    {errors.CityLocation && (
                      <span className="text-red-600 text-xs ml-5">
                        City is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Investors">Investors</label>
                    <input
                      type="text"
                      name="Investors"
                      id="Investors"
                      className={`border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500 ${
                        errors.Investors && "border-red-500"
                      }`}
                      {...register("Investors", {required: true})}
                      placeholder="Enter Investors"
                    />
                    {errors.Investors && (
                      <span className="text-red-600 text-xs ml-5">
                        City is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="AmountInUSD">Funding</label>
                    <input
                      type="number"
                      name="AmountInUSD"
                      id="AmountInUSD"
                      className={`border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500 ${
                        errors.AmountInUSD && "border-red-500"
                      }`}
                      {...register("AmountInUSD", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="Enter Amount in USD"
                    />
                    {errors.AmountInUSD && (
                      <span className="text-red-600 text-xs ml-5">
                        Funding is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="StartingDate">Founded</label>
                    <DatePicker
                      id="StartingDate"
                      selected={startingDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => setStartingDate(date)}
                      className="border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="EmployeesNo">No. of Employees</label>
                    <input
                      type="number"
                      name="EmployeesNo"
                      id="EmployeesNo"
                      className={`border border-gray-300 rounded-2xl p-2 hover:outline-none outline-none focus:border-blue-500 ${
                        errors.EmployeesNo && "border-red-500"
                      }`}
                      {...register("EmployeesNo", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="Employees No"
                    />
                    {errors.EmployeesNo && (
                      <span className="text-red-600 text-xs ml-5">
                        Employees No is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center  gap-4 mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black w-full hover:bg-blue-500 text-white rounded-2xl"
                  >
                    Add Startup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddStartupModal;
