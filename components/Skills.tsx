'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'shadcn/ui', level: 90 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'mail-trap', level: 90 },
      { name: 'Problem Solving', level: 85 },
    ],
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
    <section id="skills" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills & Expertise
        </motion.h2>

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
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
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
      </div>
    </section>
  );
}
