import react from "react";
import ConditionalRendering from "./components/ConditionalRendering";
function App() {
  return (
    <div>
      <ConditionalRendering isLoggedIn={true}></ConditionalRendering>
    </div>
  );
}

export default App;
