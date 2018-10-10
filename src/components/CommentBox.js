import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const FetchButton = withStyles({
    root: {
        marginTop: '10px'
    }       
})(Button);


class CommentBox extends Component {
    state = {comment: ""};

    handleChange = event =>{
        this.setState({comment: event.target.value});
    };

    handleSubmit = event =>{
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({comment: ""});
    };

    render(){
        return(
            <Grid item xs={12} sm={12} md={4}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl fullWidth>
                        <TextField  
                            multiline
                            rows="4"
                            label="Add a comment"
                            onChange={this.handleChange} 
                            value={this.state.comment}
                            fullWidth 
                            margin="normal"/>
                        <Button type="submit" variant="contained" color="primary" >Submit Comment</Button>
                    </FormControl>
                </form>
                <FormControl>
                    <FetchButton  
                    variant="contained" 
                    className="fetch-comments" 
                    onClick={this.props.fetchComments}>Fetch Comments</FetchButton>
                </FormControl>
            </Grid>
        );
    }
}




export default connect(null, actions) (CommentBox);
//export default withStyles(styles)(connect(null, actions)(CommentBox))