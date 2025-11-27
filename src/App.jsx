import './App.css';
import Header from './components/Header/Header';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import SideBar from './components/SideBar/SideBar';
import useTask from './hooks/useTask';

function App() {
  const data = useTask();
  console.log(data);
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          <Header />
          {/* Kanban Board */}
          <KanbanBoard />
        </main>
      </div>
    </>
  );
}

export default App;
