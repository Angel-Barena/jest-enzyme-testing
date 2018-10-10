import React from 'react';
//import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

import { createMount } from '@material-ui/core/test-utils';
let mount;

beforeEach(()=>{
    mount = createMount();
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments?postId=1', {
        status: 200,
        response: [
            {name: "Fetched #1"},
            {name: "Fetched #2"}
        ]
    });
});

afterEach(()=>{
    mount.cleanUp();
    moxios.uninstall();
});

it('can fetch a list of comments and display them,', (done)=>{
    //Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find(".fetch-comments").simulate('click');
    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});