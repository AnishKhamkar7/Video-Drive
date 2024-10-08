import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more projects as needed
];

const ProjectsGallery = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
