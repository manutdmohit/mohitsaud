'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Eye, Star, GitBranch, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A comprehensive full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and personalized user experiences.',
    longDescription: 'Built with Next.js 14, featuring server-side rendering for optimal SEO, integrated Stripe payment processing, real-time inventory updates, and a sophisticated admin dashboard for product management.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Updates'],
    stats: { stars: 45, forks: 12, views: 1200 },
    status: 'Live',
    year: '2024'
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    longDescription: 'Developed using React and Socket.io for real-time functionality, with PostgreSQL for data persistence. Features include task assignment, deadline tracking, priority management, and team collaboration tools.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Real-time Updates', 'Team Collaboration', 'Task Assignment', 'Progress Tracking'],
    stats: { stars: 32, forks: 8, views: 890 },
    status: 'Live',
    year: '2023'
  },
  {
    title: 'Blog Platform',
    description:
      'A modern content management system with rich text editing, SEO optimization, and comprehensive analytics for content creators.',
    longDescription: 'Built with Next.js and integrated with Sanity.io headless CMS. Features include rich text editing, image optimization, SEO tools, analytics dashboard, and a responsive design optimized for all devices.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Vercel', 'TypeScript', 'SEO'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Rich Text Editor', 'SEO Optimization', 'Analytics Dashboard', 'Responsive Design'],
    stats: { stars: 28, forks: 6, views: 750 },
    status: 'Live',
    year: '2023'
  },
  {
    title: 'API Gateway Service',
    description:
      'A high-performance API gateway built with Node.js, featuring rate limiting, authentication, and request routing for microservices architecture.',
    longDescription: 'Enterprise-grade API gateway with advanced features including JWT authentication, rate limiting, request/response transformation, logging, and monitoring. Designed for high scalability and reliability.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'Nginx'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Rate Limiting', 'Authentication', 'Request Routing', 'Monitoring'],
    stats: { stars: 56, forks: 15, views: 1500 },
    status: 'Live',
    year: '2024'
  },
  {
    title: 'Real-time Chat Application',
    description:
      'A modern chat application with real-time messaging, file sharing, and group chat capabilities built for seamless communication.',
    longDescription: 'Full-stack chat application using Socket.io for real-time messaging, with file upload capabilities, user presence indicators, and group chat functionality. Features end-to-end encryption for security.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS S3', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Real-time Messaging', 'File Sharing', 'Group Chats', 'End-to-end Encryption'],
    stats: { stars: 41, forks: 11, views: 1100 },
    status: 'Live',
    year: '2023'
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing professional work with smooth animations and optimal performance.',
    longDescription: 'Built with Next.js 15 and TypeScript, featuring Framer Motion animations, dark mode support, and optimized for performance and SEO. Includes contact forms, project showcases, and professional presentation.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'SEO Optimized'],
    stats: { stars: 23, forks: 5, views: 600 },
    status: 'Live',
    year: '2024'
  }
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-1/4 h-1/4 bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto container-padding">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Projects
          </Badge>
          <div className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full border-muted overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.stats.views}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                {/* Project Actions */}
                <CardFooter className="pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary"
                      asChild
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="btn-outline" asChild>
            <Link href="https://github.com/mohitsaud" target="_blank" rel="noopener noreferrer">
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
