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
import { Calendar, MapPin, ExternalLink, Award, Code, Users } from 'lucide-react';

const experiences = [
  {
    title: 'Freelance Software Engineer',
    company: 'Freelance',
    period: 'October 2023 - Present',
    duration: '1+ year',
    description:
      'Working on diverse web development projects using cutting-edge technologies. Specializing in full-stack development with Next.js, Node.js, and TypeScript. Delivering scalable solutions for clients across various industries.',
    skills: ['Next.js', 'Node.js', 'React', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    achievements: ['50+ projects completed', '25+ satisfied clients', '95% client satisfaction rate'],
  },
  {
    title: 'Node.js Developer',
    company: 'Prabidhi Labs',
    location: 'Kathmandu, Nepal',
    period: 'March 2022 - August 2023',
    duration: '1 year 6 months',
    description:
      'Developed and maintained robust web applications using Node.js, Express, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented RESTful APIs and database optimizations.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'Git'],
    achievements: ['Improved API performance by 40%', 'Reduced database query time by 60%', 'Mentored 3 junior developers'],
  },
  {
    title: 'Node.js Content Writer',
    company: 'Nikolavinci',
    location: 'Kathmandu, Nepal',
    period: 'June 2021 - December 2021',
    duration: '7 months',
    description:
      'Created comprehensive technical content related to Node.js development, tutorials, and best practices. Authored articles that helped developers improve their skills and understanding of modern web development.',
    skills: ['Technical Writing', 'Node.js', 'Content Creation', 'Documentation', 'SEO'],
    achievements: ['Published 25+ technical articles', 'Generated 50K+ monthly page views', 'Built community of 10K+ developers'],
  },
];

const certifications = [
  {
    name: 'Generative AI & Machine Learning',
    platform: 'Udemy',
    url: 'https://www.udemy.com/course/learn-complete-python-tutorial-in-simple-way/',
    description: 'Comprehensive course covering AI fundamentals and practical applications',
  },
  {
    name: 'Advanced React & Next.js',
    platform: 'Frontend Masters',
    url: '#',
    description: 'Deep dive into modern React patterns and Next.js optimization',
  },
  {
    name: 'Node.js Microservices',
    platform: 'Pluralsight',
    url: '#',
    description: 'Building scalable microservices architecture with Node.js',
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
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path reflects continuous growth and adaptation to emerging technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover border-l-4 border-l-primary/20 hover:border-l-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        {exp.duration && (
                          <Badge variant="secondary" className="text-xs">
                            {exp.duration}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Certifications & Learning</h3>
            <p className="text-muted-foreground">Continuous learning to stay ahead in technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="w-5 h-5 text-primary" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span className="font-medium">{cert.platform}</span>
                      <ExternalLink className="w-4 h-4" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
