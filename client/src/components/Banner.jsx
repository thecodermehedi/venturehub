import useStartups from "../hooks/useStartups";
import {useForm, ValidationError} from "@formspree/react";
import toast from "react-hot-toast";

const Banner = () => {
  const {totalStartups} = useStartups();
  const [state, handleSubmit] = useForm("moqgadnl");
  if (state.succeeded) {
    toast.success("Thanks for subscribing! 🎉");
  }
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[32rem] lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Uncover Profitable Ventures
            <span className="sm:block text-blue-600"> and Side-Hustles. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed md:text-2xl font-medium">
            Join our Exclusive Weekly Newsletter: Uncover the Strategies Behind
            Profitable Projects and Online Success Stories!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-2xl outline-none focus:outline-none focus:border-blue-600"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center px-4 py-2 text-base font-medium bg-blue-600 rounded-2xl text-white hover:bg-black transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-5">
            Join <span className="font-semibold">{totalStartups || 0}</span>{" "}
            other startup founders
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
