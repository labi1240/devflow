// app/project/[slug]/page.tsx
import { Project } from "@/types/project";
import { fetchProjects, fetchProjectBySlug } from "@/lib/data";
import Image from "next/image";
export async function generateStaticParams() {
  const projects = await fetchProjects();

  return projects.map((project) => ({
    params: { slug: project.slug },
  }));
}

export default async function Page({ params }: { params: any }) {
  // Fetch data directly within the Server Component
  const project = await fetchProjectBySlug(params.slug);

  return (
    <main>
      <div key={project._id}>
        {/* Use project data here */}
        <h2>{project.name}</h2>
        <div>{project.summary}</div>
        <h2>{project.name}</h2>
        <div>{project.summary}</div>
        <div>Developer: {project.developer}</div>
        <div>Type: {project.buildingType}</div>
        <div>Bedrooms: {project.bedrooms}</div>
        <div>Units/Stories: {project.unitsStories}</div>
        <div>Completion: {project.estimatedCompletion}</div>
        <div>Status: {project.status}</div>
        <div>Province: {project.province}</div>
        <div>Images:</div>
        <div>Images:</div>

        <div>
          {project.images && project.images[1] && (
            <Image
              src={project.images[1].ImagePath}
              alt={project.images[1].ImageDescription}
              width={500}
              height={300}
            />
          )}
        </div>
        {/* ... */}
      </div>
    </main>
  );
}
