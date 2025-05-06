import React from 'react';
import TeamImg from './TeamImg';

function Passout24() {
  const members = [
    { name: "Saikat Sarkar", src: "saikat", post: "President" },
    { name: "Hridikalpa Das", src: "hridikalpa", post: "Vice President and Music Wing Head" },
    { name: "Ankon Ghosh", src: "ankon", post: "General Secretary" },
    { name: "Abhinandan Mandal", src: "abhinandan", post: "Assistant General Secretary" },
    { name: "Biswanath Chakraborty", src: "biswanath", post: "Treasurer" },
    { name: "Pritasmi Bhattacharya", src: "pritasmi", post: "Treasurer" },
    { name: "Drishita Nag", src: "drishita", post: "Sponsorship Head" },
    { name: "Dipranjan Dey", src: "dipranjan", post: "Sponsorship Head" },
    { name: "Debrup Chakroborty", src: "debrup", post: "Publicity Head" },
    { name: "Prativa Sahu", src: "prativa", post: "Publicity Head" },
    { name: "Joyraj Longjam", src: "joyraj", post: "ATH Head" },
    { name: "Harshita Yenna", src: "harshitha", post: "ATH Head" },
    { name: "Souvik Pal", src: "souvik", post: "IT Wing Head" },
    { name: "Debasmita Das", src: "debasmita", post: "IT Wing Head" },
    { name: "Harsh Guha", src: "harsh", post: "Music Wing Head" },
    { name: "Pratiti Pradhan", src: "pratiti", post: "Dance Wing Head" },
    { name: "Boddu Harika", src: "harika", post: "Dance Wing Head" },
    { name: "Adarsh Arya", src: "adarsh", post: "Content Wing Head" },
    { name: "Sharvani Reddy", src: "sharvani", post: "Content Wing Head" },
    { name: "Arpan Sardar", src: "arpan", post: "Art Wing Head" },
    { name: "Priyanshi Singh", src: "priyanshi", post: "Art Wing Head" },
  ];

  return (
    <>
      {members.map((member, idx) => (
        <DynamicTeamImg
          key={idx}
          year="2020"
          name={member.name}
          src={member.src}
          post={member.post}
        />
      ))}
    </>
  );
}

function DynamicTeamImg({ name, src, post, year }) {
  const [linkedin, setLinkedin] = React.useState('');
  const [insta, setInsta] = React.useState('');

  React.useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch(`https://localhost:8080/getmembers?name=${name}&year=${year}`);
        const data = await res.json();
        if (data.linkedin) setLinkedin(data.linkedin);
        if (data.insta) setInsta(data.insta);
      } catch (err) {
        console.error(`Failed to fetch for ${name}`, err);
      }
    };

    fetchLinks();
  }, [name, year]);

  return (
    <TeamImg
      name={name}
      src={src}
      post={post}
      year={year}
      linkedin={linkedin}
      insta={insta}
    />
  );
}

export default Passout24;
