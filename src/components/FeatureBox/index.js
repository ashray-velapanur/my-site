import React from 'react';

import './index.css';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class FeatureBox extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.backgroundColor, width: '280px', height: '320px', marginBottom: '24px', borderRadius: '16px'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0 5% 0 5%'}}>
          <div style={{height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: this.props.textColor}}>
            <Icon style={{fontSize: '72px', color: this.props.textColor}}>{this.props.image}</Icon>
          </div>
          <Typography variant='title' align='center' style={{color: this.props.textColor}} gutterBottom>{this.props.title}</Typography>
          <Typography variant='body1' align='center' style={{color: this.props.textColor}} gutterBottom>{this.props.description}</Typography>
        </div>
      </div>
    )
  }
}

export default FeatureBox;
