import Boxes from './Components/Boxes';
import CharacterList from './Components/CharacterList';
import InfinityStones from './Components/InfinityStones';
import MainPic from './Components/MainPic';

function App() {
  return (
    <div className="App">
      <MainPic/>
      <Boxes/>
      <InfinityStones>
      </InfinityStones>
      <CharacterList/>
    </div>
  );
}
export default App;
