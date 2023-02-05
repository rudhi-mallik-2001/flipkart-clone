import './App.css';
import  Header  from "./components/header/Header.jsx";
import Home from './components/Home/Home';
import DataProvider from './DataProvider/DataProvider';
function App() {
  return (
    <DataProvider >
      hhhh
      <Header/>
      <Home/>
    </DataProvider>
  );
}

export default App;
