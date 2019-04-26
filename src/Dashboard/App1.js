import React from 'react';
import { Grid,Container} from 'semantic-ui-react';
import './App1.css';
import {connect} from 'react-redux'
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel'
import NavBar from './nav/NavBar/NavBar'
import Messages from './Messages/Messages';

const App1 = ({currentUser}) => (
<Grid columns='equal' className='app1' style={{ background: "#eee", paddingTop: '20px' }}>
 {/*<ColorPanel />*/}
 <SidePanel currentUser={currentUser}/>
 {/*<NavBar />*/}
 <Grid.Column style={{ marginLeft: 320 }}>
 <Messages />
 </Grid.Column>
 <Grid.Column width={4}>
 </Grid.Column>
</Grid>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(App1);
