import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'
import { useStyles } from './Dialog.style'

const CustomDialog = props => {
  const classes = useStyles()
  const { open, handleClose, content } = props
  return (
    <Dialog onClose={handleClose} open={open}>
      <MuiDialogTitle disableTypography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent>{content}</MuiDialogContent>
    </Dialog>
  )
}
CustomDialog.propTypes = {
  content: PropTypes.node,
  handleClose: PropTypes.func,
  open: PropTypes.bool
}

export default CustomDialog
