import Calendar from "./components/Calendar/Calendar";
import Postit from "./components/Post-it/Post-it";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Calendar />
      </div>
      <Footer />
    </>
  );
}

export default App;
