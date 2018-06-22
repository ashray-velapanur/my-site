import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import FeatureBox from '../../components/FeatureBox/index.js'

import FontAwesome from 'react-fontawesome';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
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
    headline: {
      color: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
      color: 'rgba(0, 0, 0, 0.7)',
      fontSize: 20,
    }
  },
});

class Work extends React.Component {
  render() {
    return (
      <div style={{padding: '2%', width: '240px', height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{backgroundSize: 'cover', height: '160px', backgroundImage: "url('http://via.placeholder.com/1000x1000')"}} />
        <div style={{backgroundColor: '#fafafa', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Oztinate</Typography>
        </div>
      </div>
    )
  }
}

class Showcase extends React.Component {
  render() {
    return (
      <div style={{margin: '12px'}}>
        <div style={this.props.style}>
        </div>
      </div>
    )
  }
}

function WorkSection() {
  return (
    <div>
      <div>
        <Typography variant='headline' align='center' gutterBottom>Work</Typography>
        <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '60px 0 0 0', flexWrap: 'wrap'}}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Showcase style={{width: '300px', height: '300px', backgroundColor: 'red'}} />
          <Showcase style={{width: '300px', height: '420px', backgroundColor: 'blue'}} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Showcase style={{width: '300px', height: '420px', backgroundColor: 'green'}} />
          <Showcase style={{width: '300px', height: '360px', backgroundColor: 'yellow'}} />
        </div>
      </div>
    </div>
  )
}

function DownloadSection() {
    return (
      <div>
        <Typography variant='subheading' align='center' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome name='apple' size='3x' style={{padding: '12px'}}/>
          <FontAwesome name='android' size='3x' style={{padding: '12px'}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button variant='raised' color='primary' style={{width: '200px', height: '60px', marginTop: '24px'}}>Download</Button>
        </div>
      </div>
    );
}

function ContactSection() {
    return (
      <div>
        <div>
          <Typography variant='headline' align='center' gutterBottom>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.</Typography>
          <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '60px 0 0 0'}}>
          <TextField
            label='Email'
            margin='normal'
            style={{width: '60%'}}
            />
          <TextField
            label='Message'
            margin='normal'
            multiline
            rows='4'
            style={{width: '60%'}}
            />
            <Button variant='raised' color='primary' style={{width: '200px', height: '60px', marginTop: '24px'}}>Send</Button>
        </div>
      </div>
    );
}

function Navbar() {
    return (
      <div>
        <AppBar position='static' color='primary' style={{boxShadow: 'none'}}>
          <Toolbar>
            <FontAwesome name='adn' size='2x'/>
            <Button color="inherit" href='#services-section'>Section A</Button>
            <Button color="inherit" href='#contact-section'>Section B</Button>
          </Toolbar>
        </AppBar>
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
    <div>
      <Typography variant='headline' align='center' style={{color: '#ffffff'}} gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    </div>
  )
}

function ServicesSection() {
  return (
    <div>
      <div>
        <Typography variant='headline' align='center' gutterBottom>Lorem ipsum dolor sit amet, consectetur elit.</Typography>
        <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '60px 0 0 0'}}>
        <FeatureBox image='archive' title={'Title'} backgroundColor='#1976d2' textColor='#ffffff' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
        <FeatureBox image='beer' title={'Title'} backgroundColor='#5e35b1' textColor='#ffffff' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
        <FeatureBox image='comments' title={'Title'} backgroundColor='#004ba0' textColor='#ffffff' description={'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
      </div>
    </div>
  )
}

const WrappedLandingSection = sectionWrapper(LandingSection);
const WrappedServicesSection = sectionWrapper(ServicesSection);
const WrappedWorkSection = sectionWrapper(WorkSection);
const WrappedDownloadSection = sectionWrapper(DownloadSection);
const WrappedContactSection = sectionWrapper(ContactSection);

function Home() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <WrappedLandingSection style={{height: '100vh', backgroundColor: '#5e35b1'}}/>
        <WrappedServicesSection id='services-section' style={{backgroundColor: '#fff'}}/>
        <WrappedDownloadSection id='download-section' style={{backgroundColor: '#fafafa'}}/>
        <WrappedContactSection id='contact-section' style={{backgroundColor: '#fff'}}/>
        <WrappedWorkSection id='work-section' style={{backgroundColor: '#fafafa'}}/>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default Home;
