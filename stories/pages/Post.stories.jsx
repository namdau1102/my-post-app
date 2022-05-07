import React from 'react';

import Post from '../../src/Components/Post/Post';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/Post',
    component: Post,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
    return <Post
        content="Hello xin chào mọi người mình tên là đậu văn nam"
        date={"3/3/2021"}
    />
}

export const Default = Template.bind({});
