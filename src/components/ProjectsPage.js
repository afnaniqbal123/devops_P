import React, { useState } from 'react';
import './ProjectsPage.css';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 10px;
`;

const projectsData = [
  { title: 'Helpline', technology: 'C++' },
  { title: 'Library Management System', technology: 'C++' },
  { title: 'Movies Hub', technology: 'C++' },
  { title: 'Safarnama', technology: 'React-Native' },
  { title: 'Algorithm Visualizer', technology: 'ReactJs' },
  // Add more projects with different technologies
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('');
  
  const filteredProjects = projectsData.filter(project =>
    project.technology.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <ProjectsContainer>
        <div className="image-container">
          <div className="content">
            <h2>Projects</h2>
          </div>
        </div>
      <Input
        type="text"
        placeholder="Filter by technology"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ProjectList>
        {filteredProjects.map((project, index) => (
          <ProjectItem key={index}>{project.title} - {project.technology}</ProjectItem>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
}

export default ProjectsPage;