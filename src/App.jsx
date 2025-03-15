import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routers/Login';
import Cart from './routers/cart';
import Home from './routers/home';
import Bracelet from './routers/Bracelet';
import Necklace from './routers/Necklace';
import Rings from './routers/Rings';
import Earring from './routers/Earring';
import Pendant from './routers/Pendant';
import Sunglasses from './routers/Sunglasses';
import Signup from './routers/Signup';
import Watches from './routers/Watches';
import Brooches from './routers/Brooches';
import Wigs from './routers/Wigs';
import Upload from './routers/Upload';
import Pass from './routers/Pass';
import Entrybo from './routers/Entrybracelet';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/pass' element = {<Pass/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/bracelet' element = {<Bracelet/>}/>
          <Route path='/necklace' element = {<Necklace/>}/>
          <Route path='/rings' element = {<Rings/>}/>
          <Route path='/earrings' element = {<Earring/>}/>
          <Route path='/pendant' element = {<Pendant/>}/>
          <Route path='/sunglasses' element = {<Sunglasses/>}/>
          <Route path='/signup' element = {<Signup/>}></Route>
          <Route path='/watches' element = {<Watches/>}></Route>
          <Route path='/brooches' element = {<Brooches/>}></Route>
          <Route path='/wigs' element = {<Wigs/>}></Route>
          <Route path='/upload' element={<Upload />} />
          <Route path='/entrybracelet' element={<Entrybo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
