import Boxes from './Components/Boxes';
import CharacterList from './Components/CharacterList';
import InfinityStones from './Components/InfinityStones';
import MainPic from './Components/MainPic';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import CharacterPage from './Pages/CharacterPage';
import NotFound from './Pages/NotFound';
import StoryPage from './Pages/StoryPage';
import InfinityStonesPage from './Pages/InfinityStonesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
              <Route exact path = "/">
                <MainPic/>
                <Boxes/>
                <InfinityStones/>
                <CharacterList/>
                <Footer/>
              </Route>
              <Route path = "/characters">
                <CharacterPage />
                <Footer/>
              </Route>
              <Route path = "/infinityStonesPage">
                <InfinityStonesPage/>
              </Route>
              <Route path = "/story">
                <StoryPage/>
                <Footer/>
              </Route>
              <Route exact path="*">
                <NotFound/>
                <Footer/>
              </Route>
          </Switch>
      </div>
    </Router>
  );
}
export default App;
