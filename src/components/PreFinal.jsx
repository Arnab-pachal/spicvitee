import React from 'react';
import TeamImg from './TeamImg';

function PreFinal() {
  const members = [
    { name: "Aishika Pal", src: "aishika", post: "Art Wing" },
    { name: "Ananya Chatterjee", src: "ananya", post: "Art & Dance Wing" },
    { name: "Anubhav Mondal", src: "anubhav", post: "Content Wing" },
    { name: "Laxmi Mondal", src: "laxmi", post: "Art Wing" },
    { name: "Durba Sinha", src: "durba", post: "Content Wing" },
    { name: "Ashmita Dhar", src: "ashmita", post: "Dance Wing" },
    { name: "Ishani Sarkar", src: "ishani", post: "Art Wing" },
    { name: "Bishakha Sen", src: "bishakha", post: "Music Wing" },
    { name: "Pratyusha Barman", src: "pratyusha", post: "Dance Wing" },
    { name: "Ojoshmi Dey", src: "ojoshmi", post: "Dance Wing" },
    { name: "Shrestha Mondal", src: "shrestha", post: "Content Wing" },
    { name: "Ritayan Mukherjee", src: "ritayan", post: "Music Wing" },
    { name: "Joyjit Rajbanshi", src: "joyjit", post: "Music Wing" },
    { name: "Samikshya Panda", src: "samikshya", post: "IT & Music Wing" },
    { name: "Abhirup Chattopadhyay", src: "abhirup", post: "Music Wing" },
    { name: "Pratham Nandy", src: "pratham", post: "IT Wing" },
    { name: "Rahul Mondal", src: "rahul", post: "IT Wing" },
    { name: "Lena Joshy M", src: "lena", post: "Dance Wing" },
    { name: "Rubel Gayen", src: "rubel", post: "IT Wing" },
    { name: "Bishal Biswas", src: "bishal", post: "IT Wing" },
  ];

  return (
    <>
      {members.map((member, idx) => (
        <DynamicTeamImg
          key={idx}
          year="2022"
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
        const res = await fetch(`http://localhost:8080/getmembers?name=${encodeURIComponent(name)}&year=${year}`);
        const data = await res.json();
        if (data.linkedin) setLinkedin(data.linkedin);
        if (data.insta) setInsta(data.insta);
      } catch (err) {
        console.error(`Failed to fetch links for ${name}:`, err);
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

export default PreFinal;
