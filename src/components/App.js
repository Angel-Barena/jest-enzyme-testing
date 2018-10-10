import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import Grid from '@material-ui/core/Grid';

export default ()=>{
    return(
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={16}>
            <CommentBox/>
            <CommentList />
        </Grid>
    );
}