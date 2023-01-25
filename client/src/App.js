import io from 'socket.io-client'
import Messages from "./Components/Messages/Messages";

const socket = io('http://localhost:5000')
function App() {
  return (
    <div className="App">
      <Messages socket={socket}></Messages>
    </div>
  );
}

export default App;
