import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
import Routes from './components/routing/Routes'

function App() {
  return (
      <Layout>
        <Router>
          <Routes />
        </Router>
      </Layout>
  )
}

export default App;
