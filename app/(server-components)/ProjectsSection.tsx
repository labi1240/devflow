// app/server-components/ProjectsSection.tsx

import { fetchProjects } from "@/lib/data";
import Image from "next/image"; // Assuming you're using next/image for image optimization

const ProjectsSection = async () => {
  const projects = await fetchProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full">
            {project.images && project.images[1] && (
              <Image
                src={project.images[1].ImagePath}
                alt={project.images[1].ImageDescription}
                layout="fill" // Fill the container
                objectFit="cover" // Maintain aspect ratio and crop
              />
            )}
          </div>

          {/* Project Details */}
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700 text-sm mb-2">{project.summary}</p>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>Developer: {project.developer}</div>
              <div>Type: {project.buildingType}</div>
              <div>Bedrooms: {project.bedrooms}</div>
              <div>Units/Stories: {project.unitsStories}</div>
              <div>Completion: {project.estimatedCompletion}</div>
              <div>Status: {project.status}</div>
              <div>Province: {project.province}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
