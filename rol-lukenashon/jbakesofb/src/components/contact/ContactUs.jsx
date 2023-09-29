import React from 'react'
import { connect } from 'react-redux'

export const ContactUs = (props) => {
  return (
    <div>Leave us a message. We'll be in touch with you</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)