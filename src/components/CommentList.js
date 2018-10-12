import React, {Component} from 'react';
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

class CommentList extends Component {

    renderComments(){
        return this.props.comments.map(comment=>{
            return (
            <ListItem key={comment}>{comment}
            </ListItem>
            );
        });
    }
    render(){
        return(
            <Grid item xs={12} sm={12} md={4} >
                <Typography variant="h4" align="center">Comment List</Typography>
                <List>
                    {this.renderComments()}
                </List>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);