
import React, { Component } from 'react';

class DynamicProgressBar extends React.Component {
    constructor(props) {
      super(props);    
    }
   
    render() {  	
          const parent = this.props;
         
        let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>{item.value}%</span>
                    </div>
                )
            }
        }, this);
  
        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="graduation" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);
  
        let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>
  
                    </div>
                )
            }
        }, this);
  
        let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
              if(item.value > 0) {
                return (
                    <div className="legend" key={i}>
                        <span className="dot" style={{'color': item.color}}>●</span>
                        <span className="label">{item.name}</span>
                    </div>
             )
         }
      }, this);
  
      return (
        <div className="multicolor-bar">
            <div className="values">
                {values == ''?'':values}
            </div>
            <div className="scale">
                {calibrations == ''?'':calibrations}
            </div>
            <div className="bars">
                {bars == ''?'':bars}
            </div>
            <div className="legends">
                {legends == ''?'':legends}
            </div>
        </div>
        
      );
    }
  }
  
  
  let readings = [
      {
          name: 'Apples',
          value: 60,
          color: '#eb4d4b'
      },
      {
          name: 'Blueberries',
          value: 7,
          color: '#22a6b3'
      },
      {
          name: 'Guavas',
          value: 23,
          color: '#6ab04c'
      },
      {
          name: 'Grapes',
          value: 10,
          color: '#e056fd'
      }
  ];
  
//   React.render(<DynamicProgressBar readings={readings}/>, document.getElementById('root'));

  export default DynamicProgressBar;  