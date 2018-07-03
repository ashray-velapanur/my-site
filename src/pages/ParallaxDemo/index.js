import React from 'react';
import ReactDOM from 'react-dom';

import image from './assets/background-image.jpg'

import './index.css';
import FeatureBox from '../../components/FeatureBox/index.js'
import Carousel from '../../components/Carousel/index.js'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#9162e4',
      main: '#5e35b1',
      dark: '#280680',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 16,
  },
});

function Navbar() {
    return (
      <div style={{display: 'flex', height: '80px', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Typography variant='subheading' style={{marginLeft: '32px'}}>SECTION A</Typography>
        <Typography variant='subheading' style={{marginLeft: '32px'}}>SECTION B</Typography>
      </div>
    );
}

function Footer() {
    return (
      <div style={{backgroundColor: '#f2f2f2', borderBottom: '1px solid #f2f2f2', display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '10% 0 10% 0', width: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginLeft: '20px', marginRight: '20px'}}>
        </div>
      </div>
    );
}

const sectionWrapper = (Content) => (props) => (
  <div className='section-container-outer' id={props.id} style={props.style}>
    <div className='section-container-inner'>
      <Content {...props} />
    </div>
  </div>
)

function LandingSection() {
  return (
    <div className='parallax-background'>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '1000px', margin: '100px 48px 100px 48px'}}>
          <Typography variant='headline' align='center' style={{color: '#ffffff'}} gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div>
      <div>
        <Typography variant='headline' align='center' gutterBottom>Lorem ipsum dolor sit amet, consectetur elit.</Typography>
        <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '60px 0 0 0'}}>
        <FeatureBox image='alarm' title={'Title'} backgroundColor='#f5f5f5' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
        <FeatureBox image='star' title={'Title'} backgroundColor='#f5f5f5' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
        <FeatureBox image='star' title={'Title'} backgroundColor='#f5f5f5' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
      </div>
    </div>
  )
}

function ImagesSection() {
  return (
    <div>
      <div>
        <Typography variant='headline' align='center' gutterBottom>Lorem ipsum dolor sit amet, consectetur elit.</Typography>
        <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '60px 0 0 0'}}>
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
        <img src={image} style={{objectFit: 'cover', width: '300px', height: '225px', padding: '32px', borderRadius: '48px'}} />
      </div>
    </div>
  )
}

let carouselData = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe'
  },
  {
    content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    author: 'John Doe'
  },
  {
    content: 'Lorem ipsum dolor sit amet Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe'
  },
]

function ReviewsSection() {
  return (
    <div>
      <Carousel slides={carouselData}/>
    </div>
  )
}

function MapSection() {
    return (
      <div>
      </div>
    )
}

const WrappedFeaturesSection = sectionWrapper(FeaturesSection);
const WrappedImagesSection = sectionWrapper(ImagesSection);
const WrappedReviewsSection = sectionWrapper(ReviewsSection);
const WrappedMapSection = sectionWrapper(MapSection);

function ParallaxDemo() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <LandingSection />
        <WrappedFeaturesSection id='services-section' style={{backgroundColor: '#fff'}} />
        <WrappedImagesSection id='images-section' style={{backgroundColor: '#fff'}} />
        <WrappedReviewsSection style={{backgroundColor: '#fff'}} />
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default ParallaxDemo;
