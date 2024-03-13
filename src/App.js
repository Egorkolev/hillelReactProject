import './App.css';
import Content from './сomponent/content/Content';
import Header from './сomponent/header/Header';
import SideBar from './сomponent/sideBar/SideBar';

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
