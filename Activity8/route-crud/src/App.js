import {Switch, Route, Link} from "react-router-dom";
import About from "./components/About";
import FormCreate from "./components/FormCreate";
import GridDisplay from "./components/GridDisplay";
import Help from "./components/Help";
import Home from "./components/Home";
import Update from "./components/Update";
import {Navbar, Container, Nav} from "react-bootstrap";
function App() {
  return (
    <div className="container">
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/create">Start fundraiser</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/all">See all fundraisers</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/help" component={Help}></Route>
      <Route exact path="/create" component={FormCreate}></Route>
      <Route exact path="/update/:id" component={Update}></Route>
      <Route exact path="/all" component = {GridDisplay}></Route>
    </Switch>
    
    </div>
    // <Router>
    //   <div className="container">
    //     <h3>A fundraising website :</h3>
    //     <ContentComponent />

    //     <Card func = "Start a fundraiser" body = "Make a fundraiser for your cause!" url = "/create"/>
    //     <Card func = "View all" body = "See all the fundraisers" url = "/all"/>
    //   </div>
    // </Router>
  );
}

export default App;
