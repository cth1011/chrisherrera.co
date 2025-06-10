"use client";

import React, { useMemo, useState } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PROJECTS } from "lib/constants";
import { Search, X } from "lucide-react";
import { Badge } from "components/ui/badge";
import Card from "components/Card";
import { Input } from "components/ui/input";
import type { Metadata } from "next";

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projectListRef] = useAutoAnimate<HTMLUListElement>();
  const [categoryFilterRef] = useAutoAnimate<HTMLDivElement>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const clearCategoryFilter = (category: string) => {
    setSelectedTags((prev) => prev.filter((cat) => cat !== category));
  };

  const displayedProjects = useMemo(() => {
    let filtered = [...PROJECTS];

    if (searchTerm.trim() !== "") {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(lowerSearchTerm) ||
          project.description.toLowerCase().includes(lowerSearchTerm) ||
          project.tags?.some((tag) =>
            tag.toLowerCase().includes(lowerSearchTerm),
          ),
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        project.tags?.some((tag) => selectedTags.includes(tag)),
      );
    }

    return filtered;
  }, [searchTerm, selectedTags]);
  return (
    <>
      <div className="mb-4 flex w-full flex-col items-center justify-between sm:flex-row">
        <h1 className="pb-2 text-center md:text-left">Projects</h1>
        <div className="relative w-full sm:w-1/3">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search projects..."
            className="rounded-md border border-gray-300 py-2 pl-10 pr-4"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search projects"
          />
        </div>
      </div>
      <div ref={categoryFilterRef} className="flex flex-wrap gap-2">
        {selectedTags &&
          selectedTags.map((category) => (
            <span key={category} className="text-sm text-white">
              <Badge
                className="group cursor-pointer"
                onClick={() => clearCategoryFilter(category)}
              >
                {category}
                <X className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-90" />
              </Badge>
            </span>
          ))}
      </div>

      <ul
        className="flex flex-row flex-wrap items-center justify-center gap-4 py-2"
        ref={projectListRef}
      >
        {displayedProjects.map((project, i) => (
          <Card
            key={project.title + i}
            {...project}
            priority={i < 2}
            onBadgeClick={(tag) =>
              setSelectedTags((prev) =>
                prev.includes(tag) ? prev : [...prev, tag],
              )
            }
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
