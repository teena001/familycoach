import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';
import tourImg5 from './images/tour-5.jpeg';
import tourImg6 from './images/tour-6.jpeg';

export const pagelinks = [
    {id:1, href:'#home', text: 'home'},
    {id:2, href:'#about', text: 'about'},
    {id:3, href:'#services', text: 'services'},
    {id:4, href:'#tours', text: 'tours'}
];

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
  ];

export const services = [
    {
        id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id:2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id:3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }
];

export const tours = [
    {
        id:1,
        img:tourImg1,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'china',
        duration:'6',
        price:2100
    },
    {
        id:2,
        img:tourImg2,
        date:'october 1th, 2020',
        title:'best of java',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'indonesia',
        duration:'11',
        price:1400
    },
    {
        id:3,
        img:tourImg3,
        date:'september 15th, 2020',
        title:'explore hong kong',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'hong kong',
        duration:'8',
        price:5000
    },
    {
        id:4,
        img:tourImg4,
        date:'december 5th, 2019',
        title:'kenya highlights',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'kenya',
        duration:'20',
        price:4000
    },
    {
        id:5,
        img:tourImg5,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'china',
        duration:'6',
        price:2100
    },
    {
        id:6,
        img:tourImg6,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourIcon:'fas fa-map',
        location:'china',
        duration:'6',
        price:2100
    }
]