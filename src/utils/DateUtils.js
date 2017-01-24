import React from 'react'
import Time from 'react-time'  //https://github.com/andreypopp/react-time


export default{
  formattedDate: (date) =>
  {
    // if(  <Time value={this.props.tasks[task.id].timestamp}titleFormat="YYYY/MM/DD HH:mm" relative />=='5 days ago'){
    //
    // }
    //if date is within 24 hours
    var rightNow = Date.now()
    var orderDate = Date.parse(date)
    var twentyFourHours = '86400000'
    if((rightNow-orderDate)>twentyFourHours){
      return <Time value={date} format="MMM DD, YYYY"/>
    }
    else{
      return <Time value={date}titleFormat="YYYY/MM/DD HH:mm" relative />
    }


  }
}
