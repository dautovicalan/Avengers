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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
              <Route exact path = "/">
                <MainPic/>
                <Boxes/>
                <InfinityStones>
                </InfinityStones>
                <CharacterList/>
                <Footer/>
              </Route>
              <Route path = "/character">
                <CharacterPage />
              </Route>
              <Route path = "/story">
                <StoryPage/>
              </Route>
              <Route exact path="*">
                <NotFound/>
              </Route>
          </Switch>
      </div>
    </Router>
  );
}
export default App;
