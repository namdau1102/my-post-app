import React from 'react';

import PostFrom from '../../src/Components/PostForm/PostForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/PostForm',
    component: PostFrom,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
    return <PostFrom

    />
}

export const Default = Template.bind({});
