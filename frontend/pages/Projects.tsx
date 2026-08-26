// Projects page, fetches project data from the backend and displays it in a grid layout

import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../src/utils/api';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Waking server & loading projects...</div>;


  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "cyan" }}>
  My Projects
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              View Project
            </a>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-cyan-950 text-cyan-300 text-xs rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//To Do: 
// change colors using Tailwind
// add more projects
// image generation thing 