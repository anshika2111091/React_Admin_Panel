
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import { userInputs,productInputs } from './formSource';



function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route path="/"> 
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="users">
    <Route index element={<List/>}></Route>
    <Route path=":userId" element={<Single/>}></Route>
    <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}></Route>
    </Route>
    <Route path="products">
    <Route index element={<List/>}></Route>
    <Route path=":productId" element={<Single/>}></Route>
    <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}></Route>
    </Route>
    </Route>
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
