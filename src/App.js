import './App.css';
import Content from './Component/Content';
import Header from './Component/Header';
import SideBar from './Component/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
