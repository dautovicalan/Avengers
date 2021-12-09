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
import AOS from 'aos';

function App() {
  AOS.init({
    // Global settings:
       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
       initClassName: 'aos-init', // class applied after initialization
       animatedClassName: 'aos-animate', // class applied on animation
       useClassNames: false, // if true, will add content of data-aos as classes on scroll
       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


       // Settings that can be overridden on per-element basis, by data-aos-* attributes:
       offset: 120, // offset (in px) from the original trigger point
       delay: 0, // values from 0 to 3000, with step 50ms
       duration: 300, // values from 0 to 3000, with step 50ms
       easing: 'linear', // default easing for AOS animations
       once: false, // whether animation should happen only once - while scrolling down
       mirror: false, // whether elements should animate out while scrolling past them
       anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
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
