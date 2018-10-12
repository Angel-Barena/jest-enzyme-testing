import React, {Component, Fragment} from 'react';
import {Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from 'actions';

import Grid from '@material-ui/core/Grid';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const StyledGrid = withStyles({
    container: {
        height: '100vh'
    }       
})(Grid);

class App extends Component{

    componentDidMount(){
        this.props.fetchComments();
    }

    renderButton(){
        if(this.props.auth){
            return <Button onClick={()=>this.props.changeAuth(false)}>Sign Out</Button>
        } else {
            return <Button onClick={()=>this.props.changeAuth(true)}>Sign In</Button>
        }
    }   
    
    linkHome = props => <Link to="/" {...props} />
    linkNewPost = props => <Link to="/post" {...props} />

    renderNavBar(){
        return(
            <AppBar>
                <Toolbar>
                    <Button component={this.linkHome}>Home</Button>
                    <Button component={this.linkNewPost}>Post A Comment</Button>
                    {this.renderButton()}
                </Toolbar>
            </AppBar>
        );
    }

    render(){
        return(
            <Fragment>
                {this.renderNavBar()}}
                <StyledGrid container direction="row" justify="center" alignItems="center" spacing={16}>
                    <Route path="/post"component={CommentBox}/>
                    <Route exact path="/" component={CommentList}/>
                </StyledGrid>
            </Fragment>
        );
    }
};

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);