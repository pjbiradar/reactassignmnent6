import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addstudent from './Components/Addstudent';
import Header from './Components/Header';
import Students from './Components/Student';


function App() {
  return (

   
    <div className="App">
      <div className='main'>
        <Router>
        <Header/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/student/des' element={<Addstudent/>}>
              <Route path=':id' element={<Addstudent/>}></Route>
            </Route>


            
            



          </Routes>

        </Router>

       


      </div>
      
    </div>
  );
}

export default App;