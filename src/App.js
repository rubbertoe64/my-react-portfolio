import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { About, Portfolio, Contact, Resume } from "./components/pages"
import { ChakraProvider } from "@chakra-ui/react";
import "./styles.css"




function App() {
  return (
    <div>
    <Router>
      <ChakraProvider>

        <Header />
        <div className="main-body">
          <Switch >
          <Route exact path="/" render={() => {
            return(
              <Redirect to="/About" />
            )
          }} />
          <Route exact path="/About" component={About} />
            {/* <About/> */}
          {/* </Route> */}
          <Route exact path="/Portfolio" component={Portfolio}/>
            {/* <h1>portfolio</h1> */}
          {/* </Route> */}
          <Route exact path="/Contact" component={Contact} />
          
          
          <Route exact path="/Resume" component={Resume}/>

          <Route path="*" render={() => {
            return(
              <Redirect to="/" />
            )
          }} />
        </Switch>
        </div>
        
        <Footer />
      </ChakraProvider>
      
       
      
    </Router>
    </div>
  );
}

export default App;
