"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/2BeReal.png",
    title: "2BeReal",
    description:
      "A fresh take on the beloved BeReal concept. This redesign revitalizes the original idea of authentic, unfiltered moments with interactive prompts and engaging challenges. With engaging prompts and spontaneous challenges, reconnect with your surroundings and rediscover the joy of social media. It’s not just about posting—it’s about living, sharing, and being present.",
    skills: ["COMING SOON!"],
    // link: "",
  },
  {
    imagePath: "/lung.png",
    title: "Lung Cancer Detection Tool",
    description:
      "This Python project uses transfer learning to build a deep learning model that classifies normal and cancerous lung tissues from medical images, leveraging a pre-trained neural network for improved accuracy and efficiency.",
    skills: [
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Sklearn",
      "OpenCV",
      "TensorFlow",
    ],
    link: "https://github.com/aryapatel14/lung-cancer-detection",
  },
  {
    imagePath: "/cycle.png",
    title: "Cycle",
    description:
      "Cycle is your go-to solution for seamlessly tracking your menstrual cycle, enhancing mood insights, and planning your schedule with precision. ",
    skills: [
      "React Native",
      "Next.js",
      "Typescript",
      "JavaScript",
      "Docker",
      "Tailwind CSS",
      "Expo",
      "Flask API",
      "DynamoDB",
      "AWS",
      "Figma",
    ],
    link: "https://github.com/aryapatel14/cycle",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
