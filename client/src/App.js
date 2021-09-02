import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Layout>
  )
}

export default App;
