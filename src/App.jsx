import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          <Header />
        </main>
      </div>
    </>
  );
}

export default App;
