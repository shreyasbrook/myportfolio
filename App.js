import './App.css';
import Drawer from './Components/Drawer';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Drawer name="Shreyas B Bhat" avatarSrc="/logo192.png" />
      <main style={{ marginLeft: 360, width: '100%', background: '#ffffff' }}>
        <Aboutus />
      </main>
    </div>
  );
}

export default App;
