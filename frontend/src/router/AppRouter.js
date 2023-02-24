import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { getUser } from 'utils/getUser'
import Index from 'pages'
import Login from 'pages/auth'
import Home from 'pages/home'
import Profile from 'pages/profile'
import TweetView from 'pages/tweet/tweetView'
import Search from 'pages/search'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/'
          component={Index}
          Authenticated={!!getUser}
        />
        <PublicRoute
          exact
          path='/auth'
          component={Login}
          Authenticated={!!getUser}
        />
        <PrivateRoute
          exact
          path='/search'
          component={Search}
          Authenticated={!!getUser}
        />
        <PrivateRoute
          exact
          path='/home'
          component={Home}
          Authenticated={!!getUser}
        />
        <PrivateRoute
          exact
          path='/profile/:username'
          component={Profile}
          Authenticated={!!getUser}
        />
        <PrivateRoute
          exact
          path='/:username/status/:id'
          component={TweetView}
          Authenticated={!!getUser}
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}
