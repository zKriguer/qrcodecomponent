import logo from './logo.svg';
import './App.css';
import qrcode from './images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <img className="qrcode"src={qrcode}/>
      <h1> Improve your front-end skills by building projects </h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}

export default App;
