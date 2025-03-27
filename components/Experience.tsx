'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const experiences = [
  {
    title: 'Freelance Software Engineer',
    company: 'Freelance',
    period: 'October 2023 - Present',
    duration: '',
    description:
      'Working on various web development projects using Next.js, Node.js, and other modern technologies.',
    skills: ['Next.js', 'Node.js', 'React', 'TypeScript'],
  },
  {
    title: 'Node.js Developer',
    company: 'Prabidhi Labs',
    location: 'Kathmandu, Nepal',
    period: 'March 2022 - August 2023',
    duration: '1 year 6 months',
    description:
      'Developed and maintained web applications using Node.js, Express, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
  },
  {
    title: 'Node.js Content Writer',
    company: 'Nikolavinci',
    location: 'Kathmandu, Nepal',
    period: 'June 2021 - December 2021',
    duration: '7 months',
    description:
      'Created technical content related to Node.js development, tutorials, and best practices.',
    skills: ['Technical Writing', 'Node.js', 'Content Creation'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Work Experience
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-muted overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} • {exp.period}{' '}
                        {exp.duration && <span> • {exp.duration}</span>}
                        {exp.location && <span> • {exp.location}</span>}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certifications
          </h3>
          <Card className="border border-muted">
            <CardHeader>
              <CardTitle>Generative AI</CardTitle>
              <CardDescription>
                <a
                  href="https://www.udemy.com/course/learn-complete-python-tutorial-in-simple-way/learn/lecture/14509708?start=630#overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Udemy
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
