'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>

          <div className="space-y-6 text-muted-foreground">
            <motion.p variants={itemVariants}>
              I'm a passionate web developer with expertise in modern JavaScript
              frameworks and libraries. With a background in Electronics and
              Communication Engineering, I bring a unique perspective to
              software development that combines technical knowledge with
              creative problem-solving.
            </motion.p>

            <motion.p variants={itemVariants}>
              Currently working as a freelance software engineer, I previously
              worked at Prabidhi Labs as a Node.js Developer and at Nikolavinci
              as a Node.js Content Writer. I'm constantly learning and exploring
              new technologies to enhance my skills.
            </motion.p>

            <motion.p variants={itemVariants}>
              My approach to development focuses on creating clean, efficient,
              and maintainable code. I believe in the power of technology to
              solve real-world problems and am dedicated to building
              applications that provide exceptional user experiences.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              className="bg-card rounded-lg p-6 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow:
                  '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium w-24">Name:</span>
                  <span className="text-muted-foreground">Mohit Saud</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Email:</span>
                  <span className="text-muted-foreground">
                    saudmohit@gmail.com
                  </span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Phone:</span>
                  <span className="text-muted-foreground">+977 9868551045</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Location:</span>
                  <span className="text-muted-foreground">
                    Kathmandu, Nepal
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow:
                  '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium mb-4">Education</h3>
              <div>
                <h4 className="font-medium">Bachelor of Engineering - BE</h4>
                <p className="text-muted-foreground">
                  Electronics and Communication
                </p>
                <p className="text-muted-foreground">
                  Advanced College of Engineering and Management
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  2013 - 2017
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
