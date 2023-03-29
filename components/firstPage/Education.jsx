import { useResumeContext } from '@/context/resumeContext'
import React from 'react'

const Education = () => {
    const { education, achievements } = useResumeContext();
    return (
        <div className="this education-section">
            <h2>Education</h2>
            {education.map((e, i) => {
                return <div key={i}>
                    <p>{e.time}</p>
                    <h2 classNameName="this">{e.degree}</h2>
                    <p>{e.university}</p>
                    <ul>
                        {e.note.map((n, i) => {
                            return <li key={i}>{n}</li>
                        })}
                    </ul>
                </div>
            })}

            <h2 className="this">Achievements</h2>
            <ul>
                {achievements.map((a, i) => {
                    return <li key={i}>{a}</li>
                })}
            </ul>
        </div>
    )
}

export default Education