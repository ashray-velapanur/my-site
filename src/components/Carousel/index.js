import React from 'react';

import './index.css';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const Arrow = ({icon, clickFunction}) => (
  <div onClick={clickFunction}>
    <Icon>{icon}</Icon>
  </div>
)

const Indicators = ({slides, currentIndex}) => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {slides.map((slide, index) =>
        index == currentIndex
        ? <Icon>radio_button_checked</Icon>
        : <Icon>radio_button_unchecked</Icon>
      )}
    </div>
)

const Slide = ({ content, author }) => (
  <div style={{maxWidth: '800px'}}>
    <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>{content}</Typography>
    <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>- {author}</Typography>
  </div>
)

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.transitionLeft = this.transitionLeft.bind(this);
    this.transitionRight = this.transitionRight.bind(this);

    this.state = {
      currentIndex: 1,
    }
  }

  transitionLeft() {
      let oldIndex = this.state.currentIndex;
      let newIndex = oldIndex - 1 < 0 ? 0 : oldIndex - 1;

      this.setState({
        currentIndex: newIndex,
      });
  }

  transitionRight() {
      let oldIndex = this.state.currentIndex;
      let newIndex = oldIndex + 1 > this.props.slides.length - 1 ? this.props.slides.length - 1 : oldIndex + 1;

      this.setState({
        currentIndex: newIndex,
      });
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', minHeight: '200px', alignItems: 'center'}}>
        <Arrow clickFunction={this.transitionLeft} icon='keyboard_arrow_left'/>
        <div>
          <Slide content={ this.props.slides[this.state.currentIndex].content } author={ this.props.slides[this.state.currentIndex].author }/>
          <Indicators slides={this.props.slides} currentIndex={this.state.currentIndex} />
        </div>
        <Arrow clickFunction={this.transitionRight} icon='keyboard_arrow_right'/>
      </div>
    )
  }
}

export default Carousel;
