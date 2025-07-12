import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const portfolioData = {
  name: "Sonu Khajotiya",
  title: "Frontend & UI/UX Designer | B.Tech Student",
  bio: "I'm a passionate designer and developer with hands-on experience in UI/UX design, frontend development, and a keen interest in crafting smooth user experiences. Currently pursuing B.Tech at Poornima Institute of Engineering & Technology, Jaipur.",
  projects: [
    {
      name: "Quiz System",
      description: "A full-stack application built with frontend and backend functionalities.",
      link: "#"
    },
    {
      name: "Travel App Prototype",
      description: "An intuitive travel planning app designed as a UI/UX prototype.",
      link: "#"
    }
  ],
  contacts: {
    email: "sonukhajotiya01@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">{portfolioData.name}</h1>
          <p className="text-lg text-gray-600">{portfolioData.title}</p>
          <p className="mt-4 text-gray-700">{portfolioData.bio}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4">
          {portfolioData.projects.map((project, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <div className="flex gap-4">
          <a href={`mailto:${portfolioData.contacts.email}`}><Button><Mail className="mr-2" /> Email</Button></a>
          <a href={portfolioData.contacts.github} target="_blank"><Button><Github className="mr-2" /> GitHub</Button></a>
          <a href={portfolioData.contacts.linkedin} target="_blank"><Button><Linkedin className="mr-2" /> LinkedIn</Button></a>
        </div>
      </div>
    </div>
  );
}
