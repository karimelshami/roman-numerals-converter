import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TranslatorContainer from 'Containers/TranslatorContainer'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TranslatorContainer} />
      {/* <Route path="/learn" component={} /> */}
    </Switch>
  )
}
export default Routes
