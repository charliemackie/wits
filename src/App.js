import './App.css';
import Login from './components/login.component';
import Form from "./components/form.component";
import Questions from './components/questions.component';
import Seating from './components/seating.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/seating" element={<Seating />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
