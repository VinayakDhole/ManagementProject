import { Project } from './Project';
import React from 'react';
import ProjectCard from './ProjectCard';


function ProjectList ({ projects } : {projects:any}) {
const items = projects.map((project: Project) => (
    <div key={project.id} className="cols-sm">
        <ProjectCard project={project}></ProjectCard>
            </div>
        ));
        return <div className="row">{items}
    </div>;
}
export default ProjectList;