import React from 'react'
import * as images from '../../../../@exampleAssets'
import moment from 'moment'
/* eslint-disable max-len */
export default [
    {
        time: moment().subtract(60 * 39, 'seconds'),
        user: {
            id: 3,
            imgUrl: images.a05,
            name: 'Callie Greene',
        },
        message: 'Do you have anything else in mind?',
    },
    {
        time: moment().subtract(60 * 40, 'seconds'),
        user: {
            id: 3,
            imgUrl: images.a05,
            name: 'Callie Greene',
        },
        message: 'We have lake-front vacation rentals. No specific liability waiver for that, but house rules stipulate risks, we assume no liability, etc. We also offer SUP/kayaks; each guest must e-sign liability waiver to get access to those. We also stock PFDs in all sizes for guests. 💁🏻‍♂️',

    },
    {
        time: moment().subtract(60 * 59, 'seconds'),
        user: {
            id: 1,
            isSelf: true,
            imgUrl: images.a12,
            name: 'Carolyn Chandler',
        },
        images: [
            images.b01,
            images.b02,
            images.b03,
        ],
    },
    {
        time: moment().subtract(60 * 60, 'seconds'),
        user: {
            id: 1,
            isSelf: true,
            imgUrl: images.a12,
            name: 'Carolyn Chandler',
        },
        message: (
            <React.Fragment> {/* eslint-disable-line */}
                Had considered making kayak available but 🤦🏻‍♂️
                <br />

                - will make people stay beyond checkout if they use them, then want to change, shower etc :(
                <br />
                - if they get in trouble, you know who they will call...
                <br />
                - adds more work, need to brief guests on what to do, where to go, life jackets in different sizes blah blah 😅
                <br />
            </React.Fragment>
        ),
    },
    {
        time: moment().subtract(1.2, 'hours'),
        user: {
            id: 2,
            imgUrl: images.a12,
            name: 'Carolyn Chandler',
        },
        message: `Hey y’all! 
      We own Hidden Lake Forest which is in a private lake community. We wanted to see how others handle a waiver of liability to use of Kayaks, boats, swimming. 🛶🏖`,

    },
    {
        time: moment().subtract(1.5, 'hours'),
        user: {
            id: 1,
            isSelf: true,
            imgUrl: images.a12,
            name: 'Carolyn Chandler',
        },
        message: 'I always think teenagers must hate my place as there is nothing to do but relax and enjoy the sea view and sunsets and read books which is not a very teenagery thing to do (my idea of paradise when I was a teen though). No shops or even a park to hang out in. I had one lady stay with her young daughter who wanted to come back at Xmas for a month with husband and teenage daughter from over 1500km away but the teen nixed it as the oldest girls who live here are only about 10.',

    },
]
