import './App.css';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <SideBar />
      </div>
    </>
  );
}

export default App;
