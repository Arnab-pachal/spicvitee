import React from 'react';
import TeamImg from './TeamImg';

function Final() {
  const members = [
    { name: "Sagar Das", src: "Sagar", post: "President" },
    { name: "Debarpan Bandyopadhay", src: "Debarpan2", post: "Vice President" },
    { name: "Prajnan Karmakar", src: "Prajnan1", post: "General Secretary" },
    { name: "Bedabrata Brahma", src: "Bedabrata1", post: "Assistant General Secretary" },
    { name: "Antara Shaw", src: "Antara", post: "Assistant General Secretary and IT wing head" },
    { name: "Sohan Bera", src: "Sohan", post: "Treasurer" },
    { name: "Alangkrita Mandal", src: "Alangkrita", post: "Treasurer" },
    { name: "Soumyadeep Mahato", src: "Soumyadip", post: "Ops Head" },
    { name: "Soham Singha", src: "Soham", post: "Ops Head" },
    { name: "Souro Chatterjee", src: "Souro1", post: "Sponsorship Head" },
    { name: "Satarupa Ray", src: "Satarupa ray", post: "Sponsorship Head" },
    { name: "Chandra Prakash Singh", src: "CP", post: "Publicity Head and Content Wing Head" },
    { name: "Satarupa Roy", src: "Satarupa roy", post: "Publicity Head" },
    { name: "Jai Khanna", src: "Jai khanna", post: "ATH Head and Content Wing Head" },
    { name: "Madhurima Mondal", src: "Madhurima", post: "ATH Head and Dance Wing Head" },
    { name: "Prerna Sharma", src: "Prerna", post: "Dance wing Head" },
    { name: "Subhajeet Mukherjee", src: "Subhajit", post: "Music wing Head" },
    { name: "Anusurya Bhowmick", src: "Anusurya", post: "Music wing Head" },
    { name: "Hiresh Shah", src: "Hiresh2", post: "Art wing Head" },
    { name: "Sujata Rajak", src: "Sujata", post: "Art wing Head" },
    { name: "Aditya Singh Bisht", src: "Aditya", post: "IT wing Head" },
    { name: "Arjo Kundu", src: "Arjo", post: "IT wing Head" },
    { name: "Aniruddha Bandyopadhyay", src: "Aniruddha", post: "IT wing Head" },
    { name: "Aniket Ghosh", src: "Aniket", post: "Music wing" },
    { name: "Aparajita Paul", src: "Aparajita", post: "Art wing" },
    { name: "Sneha Ghosh", src: "Sneha", post: "Content wing" },
    { name: "Mohaimenul Hok Porag", src: "Porag", post: "Music wing" },
    { name: "Soumyajit Majumdar", src: "Soumyajit1", post: "Music wing" },
    { name: "Subhabrata Das", src: "Subhabrata", post: "IT wing" },
    { name: "Meghna Bhattacharya", src: "Meghna", post: "Content wing" },
  ];

  return (
    <>
      {members.map((member, idx) => (
        <DynamicTeamImg
          key={idx}
          year="2021"
          name={member.name}
          src={member.src}
          post={member.post}
        />
      ))}
    </>
  );
}

function DynamicTeamImg({ name, src, year, post }) {
  const [linkedin, setLinkedin] = React.useState('');
  const [insta, setInsta] = React.useState('');

  React.useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch(`http://localhost:8080/getmembers?name=${name}&year=${year}`);
        const data = await res.json();
        const linkedin = data[0]?.Linkedinurl;
        const insta = data[0]?.Instaurl;
        if (linkedin) setLinkedin(linkedin);
        if (insta) setInsta(insta);
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

export default Final;
