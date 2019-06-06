import React from "react";
import { Link } from "gatsby";

const authors = [
  {
    name: 'Ana Makarochkina',
    bio: 'After a long journey in cultural studies and management science, Ana realized that code speaks louder than words. Since that time her major areas of focus are Vim, React, and Tachyons. She likes to write overviews of approaches to frontend development and cats.',
    imgSrc:'/ana.png'
  },
  {
    name: 'Takako Nakajima',
    bio: 'Cat person. Gluten-free. Oil painting major, 4 years of design work experience. People in Web development are self-driven, she is an eager learner as well, she likes people in the industry. Her current favorites are JavaScript and SVG animation.',
    imgSrc:'/takako.jpg'
  },
  {
    name: 'Kate Venedyukhina',
    bio: 'Kate is a graphic designer and digital illustrator. After studying business management at Langara, she decided to pursue a more creative career and learn graphic design and web development. In her free time, she likes baking, drawing, and playing guitar.',
    imgSrc:'/kate.jpg'
  },
  {
    name: 'Annie Phan',
    bio: 'Annie Phan is a computer science graduate from Kwantlen Polytechnic University where she has studied setting networks in businesses; computer hardware and architecture; web servers and code. Presently, she is at BCIT for New Media and Web Applications programs where she is now learning design principles, front-end coding, and knowledge of Adobe products. She also enjoys late night gaming and bubble tea!',
    imgSrc:'/annie.jpg'
  }
];

const Bio = ({bio, small, name}) => {
  if (small) {
    return (
      <p className='mt0'>
        {bio.substring(0, 200) + '...'} <Link to="/about/">more about {name}</Link>
      </p>
    );
  }
  return (
    <p className='mt0'>
      {bio}
    </p>
  );

};

const Author = ({imgSrc, name, bio, small}) => (
  <div className={small ? 'pb3 mw7 flex flex-row-ns flex-column' : 'pb6-l pb4 mw50-l flex flex-row-ns flex-column'}>
    <div className="fl mr4 mb2" style={{minWidth: '12rem'}}>
      <h2 className={small ? 'tc mt1' : 'mb4 tc mt1'}>{name}</h2>
      <div className="center br-pill mb4" style={{backgroundImage: `url(${imgSrc})`, backgroundSize: '100% 100%', backgroundPosition: 'center', height: '9rem', width: '9rem'}} />
    </div>
    <Bio
      bio={bio}
      small={small}
      name={name}
    />
  </div>
);

export {
  authors,
  Author
};
