import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CountMachine from './components/CountClassComponent'
import Clock from './components/ClockClassComponent'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'
import Post from './pages/Post'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="sign-in" />

          <Route path='/posts/:id' component={Post} />
          <Route path="/posts" component={Posts} />
          <Route path="/home" component={HomePage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
