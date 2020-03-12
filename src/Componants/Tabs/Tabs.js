import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useStyles } from './Tabs.style'
const SwitchingTabs = props => {
  const { tabs, handleChange, value, disabled } = props
  const classes = useStyles()

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      disabled={disabled}
    >
      {tabs && tabs.map(tab => <Tab key={tab.key} label={tab.label} />)}
    </Tabs>
  )
}
export default SwitchingTabs
