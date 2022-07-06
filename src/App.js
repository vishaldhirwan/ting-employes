import './App.css';
import Team from './components/team/Team';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import AllEmployes from './pages/AllEmployes';


function App() {

  return (
  <>
<h1>TING TEAM</h1>

<BrowserRouter>

      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/employes/:slug" element={<AllEmployes/>} />
      </Routes>



</BrowserRouter>

  </>
  );
}

export default App;
