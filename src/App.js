
import './App.css';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';
// import { useContext } from 'react';
// import { AppContext } from './components/Context';
// import { useGlobalContext } from "./components/Context";

function App() {
  // const data = useGlobalContext();
  return (
    <>
    <h1>HElooooo </h1>
    <Search />
    <Pagination />
    <Stories />
    </>
  );
}

export default App;
