import React from 'react'

const Skills = ({ points }) => {
    const skillPoints = Array.from({ length: 10 }, (_, i) => i + 1)
    return (
        <>
            {skillPoints.map((skill, i) => {
                return skill <= points ? <div key={i} className="dots"><img src="/Black circle.png" alt="Black circle" className='icon' /></div> : <div key={i} className="dots"><img src="/Gray Circle.png" alt=" gray circle" className='icon' /></div>
            })}
        </>
    )
}

export default Skills