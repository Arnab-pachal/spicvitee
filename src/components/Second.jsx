import React from 'react';
import TeamImg from './TeamImg';

function Second() {
  const members = [
    { name: "Prasun Biswas", src: "prasun" },
    { name: "Prottoy Saha Hridoy", src: "prottoy" },
    { name: "Amarnath Kumar", src: "amarnath" },
    { name: "Sutanuka Das", src: "sutanuka" },
    { name: "Prerana Banik", src: "prerana" },
    { name: "Vikash Choudhary", src: "vikash" },
    { name: "Arnab Maji", src: "maji" },
    { name: "Arnab Pachal", src: "pachal" },
    { name: "Soumitrisha Dutta", src: "soumi" },
    { name: "Mayukh Das", src: "mayukh" },
    { name: "Ananya Adhikary", src: "ananya" },
    { name: "Antara Mondal", src: "antara" },
    { name: "Arnab Paul", src: "arnabpaul" },
    { name: "Mahi Kaithwar", src: "mahi" },
    { name: "Archita Sarkar", src: "archita" },
    { name: "Sayantika Sen", src: "sayantika" },
    { name: "Puja Basuli", src: "puja" },
    { name: "Suchandra Nandi", src: "suchandra" },
    { name: "Sandip Roy", src: "sandip" },
    { name: "Saheli Mahanty", src: "saheli" },
    { name: "Aiswarya Mohan", src: "mohan" },
    { name: "Pradipta Narayan Pal", src: "pradipta" },
    { name: "Sukanya Naskar", src: "sukanya" },
    { name: "Swapnil Sinha", src: "swapnil" },
    { name: "Deba Arpita Karan", src: "deba" },
    { name: "Anwesha Panda", src: "anwesha" },
    { name: "Snehanshu Ghatak", src: "snehanshu" }
  ];

  return (
    <>
      {members.map((member, idx) => (
        <DynamicTeamImg
          key={idx}
          year="2023"
          name={member.name}
          src={member.src}
        />
      ))}
    </>
  );
}

function DynamicTeamImg({ name, src, year }) {
  const [linkedin, setLinkedin] = React.useState('');
  const [insta, setInsta] = React.useState('');

  React.useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch(`https://spicmacayback.vercel.app/getmembers?name=${name}&year=${year}`);
        const data = await res.json();
        console.log(data);
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
console.log(linkedin, insta);
  return (
    <TeamImg
      name={name}
      src={src}
      post="" // Empty string since post is not provided
      year={year}
      linkedin={linkedin}
      insta={insta}
    />
  );
}

export default Second;
