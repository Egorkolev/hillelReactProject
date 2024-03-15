import './App.css';
// import Content from './сomponent/content/Content';
import Header from './сomponent/header/Header';
import SideBar from './сomponent/sideBar/SideBar';
import { Smiles } from './сomponent/smileRange/Smiles';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Smiles />
    </div>
  );
}

export default App;
