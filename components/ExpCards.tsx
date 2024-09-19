"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Aug 2024 — Present",
    currentPosition: "Software Engineer",
    place: "Internship",
    previousPositions: [
      "Hitachi",
      "",
    ],
    description:
      "Spearheaded the Polarion Software Deployment operations, driving the successful transition from IBM Rational DOORS, and achieving seamless integration that enhanced project tracking and compliance within Global Transportation Systems.",
    skills: [
      "Python Scripting", 
      "Power Bi Analytics",
      "EDM",
      "ISO Compliance",
      "Engineering Management",
      "Requirement Assessment",
        ],
  },
  {
    timeline: "Jan 2024 — April 2024",
    currentPosition: "Software Analyst & Product Operations",
    place: "Internship",
    previousPositions: [
      "Wind River (APTIV)",
      "",
    ],
    description:
      "Spearheaded version update of the scripting platform for the VxWorks and Wind River Studio, encompassing product reports, database analytics & performance scripts. Managed automated cloud CI/CD pipelines for tailored workflows in assembling embedded software systems.",
    skills: [
      "RTOS", 
      "Cloud Dev",
      "Python",
      "Linux Shell",
      "JIRA Optimization",
      "Confluence Management",
      "Tableau Analytics",
      "CI/CD Pipeline Automation",
      "UAT Testing",
      "UI/UX Design (Figma)",
    ],
  },
  {
    timeline: "May 2023 — Aug 2023",
    currentPosition: "Product Management",
    place: "Externship",
    previousPositions: [
      "Support Mozilla",
      "",
    ],
    description:
      "Led the development of a product roadmap for Mozilla’s Technical Support platform, improving customer query resolution across multiple systems. Collaborated with various teams to enhance features and user experience, resulting in a significant increase in customer satisfaction.",
    skills: [
      "Product Roadmap Development",
      "Data Organization",
      "SQL",
      "Excel",
      "Cross-Functional Collaboration",
      "ISO 27001 Compliance",
      "User Experience Improvement",
      "Customer ROI",

    ],
  },
  {
    timeline: "Sept 2021 — Aug 2022",
    currentPosition: "Development Operations",
    place: "Entrepreneurship Program",
    previousPositions: [
      "Junior Achievement North",
      "",
    ],
    description:
      "Co-Found Humble Inc., a service platform delivering websites and portfolios for clients to showcase products and personal brands. Program funded and supported by the Royal Bank of Canada.",
    skills: [
      "Typescript",
      "JavaScript",
      "Tailwind CSS",
      "Vercel",
      "Next.js",
      "Figma",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
{/*       <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/am-resume-2024.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div> */}
    </section>
  );
}
