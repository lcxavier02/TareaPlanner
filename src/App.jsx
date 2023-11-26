import Calendar from "./components/Calendar/Calendar";
import Postit from "./components/Post-it/Post-it";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import { TaskManager } from "./components/TaskManager/TaskManager.jsx";
import { KanbanBoard } from "./components/TaskManager/KanbanBoard.jsx";


function App() {
  return (
    <>
      <div className="flex">
        <Sidemenu />
        <div className="w-full">
          <Navbar />
          <div className="container mx-auto mt-10 h-auto">
            <h1 className="container text-3xl m-auto mb-4">Your Dashboard</h1>
            <Dashboard />
            <KanbanBoard />
            <TaskManager/>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
