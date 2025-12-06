import React from 'react';
import Marquee from "react-fast-marquee";

import women1 from "../assets/women1.jpeg"
import women2 from "../assets/women2.jpg"
import women3 from "../assets/women3.jpg"
import women4 from "../assets/women4.jpg"
import HeroCard from './HeroCard';

const Heroes = [
  {
    id: 1,
    name: "Anisha Rahman",
    role: "Cat Rescuer",
    image: women1,
    story: "Rescued 12 abandoned kittens in Dhaka."
  },
  {
    id: 2,
    name: "Nusrat Moon",
    role: "Dog Caregiver",
    image: women2,
    story: "Helps street dogs with food & medical care."
  },
  {
    id: 3,
    name: "Sonia Akter",
    role: "Bird Specialist",
    image: women3,
    story: "Helps injured parrots and sparrows recover."
  },
  {
    id: 4,
    name: "Atika Farin",
    role: "Pet Volunteer",
    image: women4,
    story: "Supports pet adoption events in Bangladesh."
  },
];
const PetHeroes = () => {
    
    return (
        <div className='mb-15 '>
            <h1 className='divider text-2xl font-bold text-primary mb-10'>Meet Our Pet Heroes</h1>
              <Marquee pauseOnHover={true} speed={50} gradient={false}>
  {/* Original list */}
  {Heroes.map(hero => (
    <HeroCard key={hero.id} hero={hero} />
  ))}

  {/* Duplicate list to remove gap */}
  {Heroes.map(hero => (
    <HeroCard key={hero.id + "-duplicate"} hero={hero} />
  ))}
</Marquee>

        </div>
    );
};

export default PetHeroes;