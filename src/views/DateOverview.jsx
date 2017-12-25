import React from 'react'

export default class DateOverview extends React.Component {
  render () {
    let date = new Date()
    return (
      <div>
        <h1>Willkommen auf der DateOverview Seite</h1>
        <div>Es ist { date } Uhr</div>
      </div>
    )
  }
}