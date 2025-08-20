'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Wrench, Zap, Layers } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: Palette,
    description: 'Modern UI/UX development with cutting-edge frameworks',
    skills: [
      { name: 'React.js', level: 90, experience: '3+ years', projects: 25 },
      { name: 'Next.js', level: 85, experience: '2+ years', projects: 20 },
      { name: 'TypeScript', level: 80, experience: '2+ years', projects: 18 },
      { name: 'Tailwind CSS', level: 85, experience: '2+ years', projects: 22 },
      { name: 'shadcn/ui', level: 90, experience: '1+ year', projects: 15 },
    ],
  },
  {
    category: 'Backend Development',
    icon: Code,
    description: 'Robust server-side development and API design',
    skills: [
      { name: 'Node.js', level: 90, experience: '3+ years', projects: 30 },
      { name: 'Express.js', level: 85, experience: '3+ years', projects: 28 },
      { name: 'REST APIs', level: 85, experience: '3+ years', projects: 25 },
      { name: 'GraphQL', level: 75, experience: '1+ year', projects: 8 },
    ],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    description: 'Data management and optimization expertise',
    skills: [
      { name: 'MongoDB', level: 85, experience: '2+ years', projects: 20 },
      { name: 'SQL', level: 80, experience: '2+ years', projects: 15 },
      { name: 'PostgreSQL', level: 75, experience: '1+ year', projects: 12 },
      { name: 'Redis', level: 70, experience: '1+ year', projects: 8 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: Wrench,
    description: 'Development operations and deployment expertise',
    skills: [
      { name: 'Git & GitHub', level: 85, experience: '3+ years', projects: 40 },
      { name: 'Docker', level: 75, experience: '1+ year', projects: 10 },
      { name: 'Vercel', level: 90, experience: '2+ years', projects: 25 },
      { name: 'CI/CD', level: 70, experience: '1+ year', projects: 8 },
    ],
  },
  {
    category: 'Performance & Testing',
    icon: Zap,
    description: 'Optimization and quality assurance',
    skills: [
      { name: 'Performance Optimization', level: 80, experience: '2+ years', projects: 15 },
      { name: 'Unit Testing', level: 75, experience: '2+ years', projects: 12 },
      { name: 'E2E Testing', level: 70, experience: '1+ year', projects: 8 },
      { name: 'SEO Optimization', level: 85, experience: '2+ years', projects: 18 },
    ],
  },
  {
    category: 'Architecture & Design',
    icon: Layers,
    description: 'System design and architectural patterns',
    skills: [
      { name: 'Microservices', level: 75, experience: '1+ year', projects: 6 },
      { name: 'API Design', level: 85, experience: '2+ years', projects: 20 },
      { name: 'System Architecture', level: 80, experience: '2+ years', projects: 15 },
      { name: 'Problem Solving', level: 85, experience: '3+ years', projects: 35 },
    ],
  },
];

const expertiseAreas = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end application development with modern technologies',
    icon: Code,
    color: 'text-blue-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and efficiency',
    icon: Zap,
    color: 'text-green-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces',
    icon: Palette,
    color: 'text-purple-500',
  },
  {
    title: 'Database Design',
    description: 'Designing efficient and scalable database structures',
    icon: Database,
    color: 'text-orange-500',
  },
];

export default function Skills() {
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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl" />
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
            Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set developed through years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center p-6 h-full">
                <area.icon className={`w-8 h-8 mx-auto mb-4 ${area.color}`} />
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card className="border-muted h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="w-6 h-6 text-primary" />
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, width: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, width: 'auto' }
                          : { opacity: 0, width: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + skillIndex * 0.1,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{skill.projects} projects</span>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress
                        value={isInView ? skill.level : 0}
                        className="h-2"
                        translate="yes"
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Additional Skills & Tools</h3>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'Python', 'HTML5', 'CSS3', 'SASS', 'Webpack',
              'Jest', 'Cypress', 'AWS', 'Firebase', 'Nginx', 'Linux',
              'Figma', 'Adobe XD', 'Postman', 'Swagger', 'Jira', 'Slack'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover p-4 text-center">
                  <span className="text-sm font-medium">{skill}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
