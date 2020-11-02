import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from './components/search'
import {MyForm} from './components/orders'
import {MyApp} from './components/myapp'
import {Report} from './components/report'
import {Report1} from './components/report1'

import AppMenu from './AppMenu'

const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>
const PageCustomers = () => <Typography variant="h3" component="h1">Customers Page</Typography>
const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={Link} />
              <Route path="/orders"  component={MyForm} />
              <Route path="/customers" component={MyApp} />
              <Route path="/reports" component={Report} />
              <Route path="/reports1" component={Report1} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default App

