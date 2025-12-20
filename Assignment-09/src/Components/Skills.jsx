import React from 'react';
import useSkillData from '../Hooks/useSkillData';
import SkillCard from './SkillCard';
import GlobalSpinner from '../Spinner/GlobalSpinner';

const Skills = () => {
     const {skillData,loading}=useSkillData();
     if(loading) return <GlobalSpinner></GlobalSpinner>
    return (
        <div className='text-center  '>
            <h1 className='font-bold text-4xl mb-3 text-gray-700'>Popular Skills</h1>
            <p className='text-lg text-gray-500'>Creative Skills Taught by the Best Creative Pros</p>
            <div className='grid  lg:grid-cols-3  gap-4  p-2 pt-5'>
                {
                    skillData.map((skill)=><SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;