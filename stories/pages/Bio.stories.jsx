import React from 'react';

import Bio from '../../src/Components/Bio/Bio';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/Bio',
    component: Bio,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
    return <Bio
        headshot="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/274450527_686455959061577_8143687573055724049_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=iaAsDnX0djAAX8eMPcJ&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_Oz1n96DH05B89CnmjnQSzs6fTpZ0Z0OxW_svFjfu65w&oe=627AD00D"
        name="Colby Fayock"
        tagline="Helping others to leanrn by doing"
        role="Developer Advocate @ Applitools"
    />

}

export const Default = Template.bind({});
