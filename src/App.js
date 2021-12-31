import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {StudentProvider} from './Components/StudentContext';
import Header from './Components/Header';
import './Components/style.css'
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Student from './Components/Student';
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';




function App() {
  return (
    <StudentProvider>
    
     <div className="App">
      
                <Router>
                          <Header/>
                          <Routes>
                              <Route path='/home' element={<Home/>}/>
                              <Route path='/student' element={<Student/>}/>
                              <Route path='/edit/:studentId' element={<Edit/>}/>
                              <Route path='/contact' element={<ContactUs/>}/>
                              <Route path='/addstudent' element={<AddStudent/>}/>
                          </Routes>

                
                </Router> 
     </div> 
    
     </StudentProvider>

  );
}

export default App;