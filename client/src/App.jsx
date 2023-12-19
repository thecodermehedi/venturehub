import Banner from "./components/Banner";
import GridContainer from "./components/GridContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <div className="lg:h-16" />
      <Banner />
      <GridContainer/>
    </main>
  );
};

export default App;
