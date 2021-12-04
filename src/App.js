import Boxes from './Components/Boxes';
import CharacterList from './Components/CharacterList';
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
      <CharacterList/>
    </div>
  );
}
export default App;
