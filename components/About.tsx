'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin, Mail, Phone, Calendar, Award, Code, Users } from 'lucide-react';

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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "25+" },
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: GraduationCap, label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Experiences with{' '}
              <span className="gradient-text">Passion & Precision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a dedicated full-stack developer who transforms ideas into exceptional digital solutions.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a background in <span className="text-primary font-medium">Electronics and Communication Engineering</span>, 
                  I bring a unique perspective to software development that combines technical precision with creative problem-solving.
                </p>
                <p>
                  Currently working as a <span className="text-primary font-medium">freelance software engineer</span>, I've previously 
                  contributed to teams at Prabidhi Labs and Nikolavinci, where I honed my skills in Node.js development and technical writing.
                </p>
                <p>
                  My approach centers on creating <span className="text-primary font-medium">clean, efficient, and maintainable code</span> 
                  that delivers exceptional user experiences. I believe in the power of technology to solve real-world problems and am 
                  constantly exploring new technologies to enhance my capabilities.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Node.js', 'TypeScript', 'React', 'MongoDB', 'PostgreSQL'].map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Personal Info */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">saudmohit@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">+977 9868551045</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Available for new opportunities</span>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Bachelor of Engineering - BE</h4>
                    <p className="text-sm text-muted-foreground">Electronics and Communication</p>
                    <p className="text-sm text-muted-foreground">Advanced College of Engineering and Management</p>
                    <p className="text-xs text-muted-foreground">2013 - 2017</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/20 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
