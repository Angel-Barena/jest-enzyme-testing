export default ({dispatch})=> next => action =>{
    //Check to see if the action
    //has a promise on it's payload property
    //if it does, wait for it to resolve
    //if it doesn't, then send the action on to the next middleware
    
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    
    //We want to wait for the promise to resolve
    //(gets its data!!) and then create a new action
    //with  that data and dispatch it;
    action.payload.then(function(response){
        const newAction = {...action, payload: response}
        dispatch(newAction);
    })
};