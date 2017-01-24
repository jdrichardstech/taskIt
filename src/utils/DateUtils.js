import React from 'react'
import Time from 'react-time'  //https://github.com/andreypopp/react-time


export default{
  formattedDate: (date) =>
  {

    //if date is within 24 hours
    return <Time value={date} format="MMM DD, YYYY"/>
  }
}
