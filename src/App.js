import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item"><Header/></div>
      <div className="grid-item"><Main/></div>
      <div className="grid-item"><Footer/></div>
    </div>
  );
}

export default App;
