import { ResumeButton } from "@/components/common/resume-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import { Briefcase, GraduationCap, Award, ToolCaseIcon } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Resume
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
              Experience & Expertise
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A track record of transforming words into results for brands
              across industries.
            </p>
            <ResumeButton />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-1">
                        {job.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="mr-2 text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Skills</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <ToolCaseIcon className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Tools</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {edu.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Certifications</h2>
          </div>

          <div className="space-y-6">
            {certifications.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">
                        {edu.name}
                      </h3>
                      <p className="text-muted-foreground">{edu.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {edu.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Let &apos;s Work Together
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Ready to bring strategic copy and compelling storytelling to your
            brand?
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
