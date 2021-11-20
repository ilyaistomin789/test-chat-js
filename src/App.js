import './App.css';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router'
import Chat from "./pages/chat";
function App() {
  return (
      <div className="wrapper">
        <Routes>
          <Route path={'/chat'} element={<Chat />} />
            <Route path={'/chat/dialog/:id'} element={<Chat/>}/>
        </Routes>
      </div>
  );
}

export default App;
