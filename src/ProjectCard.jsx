import React, { useState } from 'react';

function ProjectCard({ projectName, projectDescription, projectLink }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    return (
        <div className="project-card">
            <h3>{projectName}</h3>
            {isDetailsVisible ? (
                <div>
                    <p>{projectDescription}</p>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ) : (
                <p>Click to see details</p>
            )}
            <button onClick={toggleDetails}>
                {isDetailsVisible ? 'Hide Details' : 'Show Details'}
            </button>
        </div>
    );
}

export default ProjectCard;
