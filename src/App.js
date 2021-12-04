import Boxes from './Components/Boxes';
import InfinityStones from './Components/InfinityStones';
import MainPic from './Components/MainPic';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPic/>
      <Boxes/>
      <InfinityStones>
      </InfinityStones>
    </div>
  );
}
export default App;
