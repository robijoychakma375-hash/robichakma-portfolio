/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Code, 
  Megaphone, 
  Monitor, 
  Cpu, 
  MessageSquare, 
  MessageCircle,
  Menu, 
  X, 
  ChevronRight,
  Globe,
  Award
} from 'lucide-react';

// Typing Animation Hook
const useTypingEffect = (phrases: string[], speed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases, speed, pause]);

  return phrases[index].substring(0, subIndex);
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const roles = useMemo(() => [
    "Civil Engineering Student",
    "Digital Skills Practitioner",
    "Web App Enthusiast",
    "Future-focused Learner"
  ], []);
  
  const currentRole = useTypingEffect(roles);

  const whatsappUrl = "https://wa.me/8801617549828?text=Hello%20Robi%20Joy%20Chakma%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20contact%20you.";

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ];

  const languages = [
    { name: "Chakma", level: "Native / First Language", percentage: 100 },
    { name: "Bangla", level: "Fluent", percentage: 95 },
    { name: "English", level: "Intermediate and improving", percentage: 70 },
  ];

  const skillCategories = [
    {
      title: "Digital Skills & Tech",
      icon: <Megaphone className="w-6 h-6 text-blue-400" />,
      skills: ["Online Platform Promotion", "Digital Content Strategy", "Social Media Management", "Facebook Ads Knowledge", "Audience Research"]
    },
    {
      title: "Web & Technical",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: ["Basic Web Design", "Personal Website Setup", "Web App Interest", "GitHub Basic Knowledge", "Responsive Website Understanding"]
    },
    {
      title: "Computer Skills",
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      skills: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Internet Research", "File Management"]
    }
  ];

  const projects = [
    {
      title: "Digital Promotion Projects",
      description: "Worked on digital promotional tasks, including platform-based reaching and online engagement activities.",
      role: "Digital Services Practitioner",
      tools: ["Facebook Ads Manager", "Digital Platforms"],
      icon: <Megaphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Personal Website Projects",
      description: "Created and managed some personal website-related projects to learn web design, online presence, and digital branding.",
      role: "Website Planner and Customizer",
      tools: ["GitHub", "HTML", "CSS", "JavaScript", "AI website builders"],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my education, skills, projects, contact information, and online professional profile.",
      role: "Owner and Portfolio Developer",
      tools: ["React", "Tailwind CSS", "Motion", "GitHub"],
      icon: <Award className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-page z-[-1]" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            ROBI<span className="text-cyan-400">JOY</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden glass pt-24 px-6 flex flex-col space-y-6 text-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-semibold hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyan-400 font-mono tracking-widest uppercase mb-4">Welcome to my world</h2>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                I'm <span className="text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Robi Joy Chakma</span>
              </h1>
              <div className="h-12 md:h-16 text-2xl md:text-3xl text-slate-400 font-display typing-cursor">
                {currentRole}
              </div>
              <p className="mt-8 text-lg text-slate-400 max-w-lg leading-relaxed">
                A passionate Civil Engineering student from the hills, exploring web technology, 
                digital marketing, and freelancing to build a better future.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 rounded-full bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  Hire Me
                </a>
                <a href="#cv" className="px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all">
                  View CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0] 
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1 },
                y: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                
                {/* Glow/Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-40 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                {/* Profile Image Wrapper */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.2)] mx-auto hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/9XwqwBk7/IMG-0084.jpg" 
                    alt="Robi Joy Chakma" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-20 items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-4xl font-display font-bold mb-8 flex items-center gap-4">
                  <span className="w-16 h-[2px] bg-cyan-400" /> Living the Dream
                </h3>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    I am <span className="text-white font-semibold">Robi Joy Chakma</span>, a Civil Engineering student at Eastern University. 
                    Originating from the serene hills of Bangladesh, I moved to the vibrant city of Dhaka with a clear vision: 
                    to bridge the gap between traditional engineering and modern digital innovation.
                  </p>
                  <p>
                    My journey is fueled by a dual passion. On one hand, I am mastering the complexities of structural integrity; 
                    on the other, I am navigating the fast-paced world of <span className="text-cyan-400">digital marketing</span> and 
                    web technology. I don't just study engineering—I apply analytical thinking to everything I build online.
                  </p>
                  <p>
                    Currently, I focus on helping brands grow through precision-targeted Facebook Ads while continuously 
                    sharpening my skills in web development. My goal is to become an independent professional who builds 
                    meaningful solutions at the intersection of architecture and the internet.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-10">
                  <div className="flex flex-col">
                    <span className="text-5xl font-display font-black text-white">B.Sc.</span>
                    <span className="text-xs text-cyan-400 uppercase tracking-widest font-bold mt-1">Civil Eng.</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-5xl font-display font-black text-white">Expert</span>
                    <span className="text-xs text-purple-400 uppercase tracking-widest font-bold mt-1">Digital Skills</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <div className="col-span-2 h-72 rounded-[2.5rem] overflow-hidden group relative border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Civil Engineering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                    <div>
                      <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Academic Path</p>
                      <h4 className="text-white text-xl font-bold">Civil Engineering</h4>
                    </div>
                  </div>
                </div>
                <div className="h-56 rounded-[2.5rem] overflow-hidden group relative border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Marketing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                    <h4 className="text-white text-sm font-bold">Digital Ads</h4>
                  </div>
                </div>
                <div className="h-56 rounded-[2.5rem] overflow-hidden group relative border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" alt="Web Dev" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                    <h4 className="text-white text-sm font-bold">Web Technology</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-slate-900/50 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-12 text-center">Education Journey</h3>
            <div className="relative space-y-12">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-500/20 hidden md:block" />
              
              {/* University */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0"
              >
                <div className="absolute left-[-33px] md:left-auto md:right-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,1)] z-10" />
                <div className="glass p-8 rounded-3xl border-t-2 border-cyan-500/30">
                  <span className="text-cyan-400 font-mono text-sm mb-2 block">2024 - Present</span>
                  <h4 className="text-xl font-bold text-white mb-1">B.Sc. in Civil Engineering</h4>
                  <p className="text-slate-400 mb-4">Eastern University</p>
                  <p className="text-sm text-slate-500">Running Student • Dhaka, Bangladesh</p>
                </div>
              </motion.div>

              {/* HSC */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:ml-auto md:pl-12 ml-8"
              >
                <div className="absolute left-[-33px] md:left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)] z-10" />
                <div className="glass p-8 rounded-3xl border-t-2 border-purple-500/30">
                  <span className="text-purple-400 font-mono text-sm mb-2 block">Passing Year: 2022</span>
                  <h4 className="text-xl font-bold text-white mb-1">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-slate-400 mb-4">Khagrachari Govt. College</p>
                  <p className="text-sm text-slate-500">Background: Science</p>
                </div>
              </motion.div>

              {/* SSC */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0"
              >
                <div className="absolute left-[-33px] md:left-auto md:right-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,1)] z-10" />
                <div className="glass p-8 rounded-3xl border-t-2 border-cyan-500/30">
                  <span className="text-cyan-400 font-mono text-sm mb-2 block">Passing Year: 2020</span>
                  <h4 className="text-xl font-bold text-white mb-1">Secondary School Certificate (SSC)</h4>
                  <p className="text-slate-400 mb-4">Panchari Govt. Model High School</p>
                  <p className="text-sm text-slate-500">Background: Science</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-16 text-center">Core Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl hover:border-white/20 transition-all group"
                >
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-6 text-white">{category.title}</h4>
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-slate-400">
                        <ChevronRight className="w-4 h-4 text-cyan-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            {/* Languages Section */}
            <h3 className="text-3xl font-display font-bold mt-24 mb-16 text-center">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-xl font-bold text-white">{lang.name}</h4>
                    <span className="text-xs text-cyan-400 font-mono">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-900/50 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-16 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-slate-950/40 rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-8 pb-0">
                    <div className="mb-6">{project.icon}</div>
                    <h4 className="text-2xl font-display font-bold mb-4">{project.title}</h4>
                    <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Role</p>
                      <p className="text-cyan-400 font-medium">{project.role}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto p-8 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-12 text-center">Experience & Journey</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem]"
            >
              <h4 className="text-2xl font-bold mb-2">Digital Skills Practitioner & Technology Learner</h4>
              <p className="text-cyan-400 mb-8 font-mono">Present Status</p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I have practical experience in applying digital skills, including online platform management and promotional techniques. 
                I have worked on various personal and practice-based digital projects to improve my capacity in coordination, 
                platform handling, and online communication.
              </p>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                I am continuously learning new tools and digital strategies to become more versatile in technology, 
                professional coordination, and online systems management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="cv-section py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-12 text-center underline decoration-cyan-500/50 underline-offset-8">Curriculum Vitae</h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cv-card glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              {/* Header Accent Line */}
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />
              
              <div className="p-8 md:p-16">
                {/* CV Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-40 blur transition duration-1000 group-hover:opacity-75"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                        <img 
                          src="https://i.postimg.cc/9XwqwBk7/IMG-0084.jpg" 
                          alt="Robi Joy Chakma" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-3 uppercase tracking-tight">ROBI JOY CHAKMA</h2>
                      <p className="text-cyan-400 font-bold tracking-widest text-sm md:text-base uppercase flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span>Civil Engineering Student</span>
                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span>Digital Skills Enthusiast</span>
                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span>Future Professional</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 space-y-3 text-slate-400 text-sm w-full md:w-auto font-medium">
                    <p className="flex items-center gap-3 justify-center md:justify-start hover:text-cyan-400 transition-colors"><Mail size={16} className="text-cyan-500"/> robijoychakma375@gmail.com</p>
                    <p className="flex items-center gap-3 justify-center md:justify-start hover:text-cyan-400 transition-colors"><Phone size={16} className="text-cyan-500"/> 01410549828</p>
                    <p className="flex items-center gap-3 justify-center md:justify-start hover:text-cyan-400 transition-colors"><MessageSquare size={16} className="text-cyan-500"/> 01617549828 (WhatsApp)</p>
                    <p className="flex items-center gap-3 justify-center md:justify-start hover:text-cyan-400 transition-colors"><MapPin size={16} className="text-cyan-500"/> Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  <div className="md:col-span-2 space-y-16">
                    {/* Career Objective */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-cyan-400/30" /> Career Objective
                      </h5>
                      <p className="text-slate-300 leading-relaxed text-lg italic border-l-4 border-cyan-500/20 pl-6 py-2">
                        A motivated and hardworking Civil Engineering student with strong interest in learning, technology, communication, and professional development. I aim to build a successful career by applying my academic knowledge, computer skills, digital knowledge, and problem-solving ability in a responsible organization. I am eager to work in a professional environment where I can learn, contribute, and grow as a skilled and dependable professional.
                      </p>
                    </section>

                    {/* Education */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-cyan-400/30" /> Education
                      </h5>
                      <div className="space-y-10">
                        <div className="relative pl-8 border-l-2 border-white/5">
                          <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                          <div className="flex justify-between items-start mb-2">
                            <h6 className="font-bold text-white text-xl">B.Sc. in Civil Engineering</h6>
                            <span className="text-[10px] font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-400">2024 - PRESENT</span>
                          </div>
                          <p className="text-cyan-400 font-medium mb-2">Eastern University</p>
                          <p className="text-sm text-slate-500">Dhaka, Bangladesh • Running Student</p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-white/5">
                          <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500" />
                          <div className="flex justify-between items-start mb-2">
                            <h6 className="font-bold text-white text-xl">Higher Secondary Certificate (HSC)</h6>
                            <span className="text-[10px] font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-400">2022</span>
                          </div>
                          <p className="text-purple-400 font-medium mb-2">Khagrachari Govt. College</p>
                          <p className="text-sm text-slate-500">Science Group</p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-white/5">
                          <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500" />
                          <div className="flex justify-between items-start mb-2">
                            <h6 className="font-bold text-white text-xl">Secondary School Certificate (SSC)</h6>
                            <span className="text-[10px] font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-400">2020</span>
                          </div>
                          <p className="text-blue-400 font-medium mb-2">Panchari Govt. Model High School</p>
                          <p className="text-sm text-slate-500">Science Group</p>
                        </div>
                      </div>
                    </section>

                    {/* Experience */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-cyan-400/30" /> Experience
                      </h5>
                      <div className="glass p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-start mb-4">
                          <h6 className="font-bold text-white text-xl">Freelance & Personal Digital Work</h6>
                          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">PRACTICAL</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          I have practical experience in personal and practice-based digital work, including social media promotion, basic Facebook Ads campaign handling, online content promotion, and personal website-related projects. These experiences helped me improve my computer skills, communication ability, online platform management, and problem-solving capacity.
                        </p>
                      </div>
                    </section>

                    {/* Projects */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-cyan-400/30" /> Professional Projects
                      </h5>
                      <div className="space-y-6">
                        <div className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                            <Globe className="text-cyan-400" size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-white mb-2">Personal Portfolio Website</h6>
                            <p className="text-sm text-slate-400">Created a personal online CV and portfolio website to present education, skills, experience, and contact information.</p>
                          </div>
                        </div>
                        <div className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                            <Monitor className="text-purple-400" size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-white mb-2">Personal Website Practice Projects</h6>
                            <p className="text-sm text-slate-400">Worked on personal website-related projects to improve basic web design, online presence, and digital platform understanding.</p>
                          </div>
                        </div>
                        <div className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                            <Megaphone className="text-blue-400" size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-white mb-2">Digital Promotion Practice</h6>
                            <p className="text-sm text-slate-400">Practiced basic online promotion and Facebook Ads campaign setup for learning and freelancing skill development.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-16">
                    {/* Skills Grouping */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-8">
                         Personal Skills
                      </h5>
                      <div className="space-y-8">
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Computer Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Internet browsing and research", "File management"].map(s => (
                              <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Digital Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {["Basic web design", "GitHub basic knowledge", "Social media platform management", "Basic online promotion", "Basic website handling"].map(s => (
                              <span key={s} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-xs text-cyan-400">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Communication & Professional Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {["Communication", "Teamwork", "Problem solving", "Quick learning", "Time management", "Responsibility"].map(s => (
                              <span key={s} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-400">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Languages */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-6">Languages</h5>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <p className="flex justify-between font-bold text-white mb-1">Chakma <span className="text-cyan-400 text-[10px]">Native</span></p>
                          <div className="w-full h-1 bg-white/5 rounded-full"><div className="w-full h-full bg-cyan-500 rounded-full" /></div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <p className="flex justify-between font-bold text-white mb-1">Bangla <span className="text-purple-400 text-[10px]">Fluent</span></p>
                          <div className="w-full h-1 bg-white/5 rounded-full"><div className="w-[95%] h-full bg-purple-500 rounded-full" /></div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <p className="flex justify-between font-bold text-white mb-1">English <span className="text-blue-400 text-[10px]">Intermediate</span></p>
                          <div className="w-full h-1 bg-white/5 rounded-full"><div className="w-[70%] h-full bg-blue-500 rounded-full" /></div>
                        </div>
                      </div>
                    </section>

                    {/* Personal Strengths */}
                    <section>
                      <h5 className="text-sm font-black uppercase text-cyan-400 tracking-[0.2em] mb-6">Personal Strengths</h5>
                      <ul className="space-y-3">
                        {[
                          "Hardworking",
                          "Honest and responsible",
                          "Quick learner",
                          "Interested in technology",
                          "Team player",
                          "Highly adaptable"
                        ].map((strength) => (
                          <li key={strength} className="flex items-center gap-3 text-slate-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* CV content ends */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-16 text-center">Let's Connect</h3>
            
            <div className="flex justify-center mb-12">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="whatsapp-main-btn"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 animate-pulse-slow">
                  <MessageCircle size={28} />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Instantly Active</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Contact on WhatsApp</p>
                </div>
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Mail />, label: "Email", info: "robijoychakma375@gmail.com", href: "mailto:robijoychakma375@gmail.com", color: "blue" },
                { icon: <Phone />, label: "Call", info: "01410549828", href: "tel:01410549828", color: "cyan" },
                { icon: <MessageSquare />, label: "WhatsApp", info: "01617549828", href: "https://wa.me/8801617549828", color: "green" },
                { icon: <Linkedin />, label: "LinkedIn", info: "Robijoy Chakma", href: "https://bd.linkedin.com/in/robijoy-chakma-1b66b8224", color: "indigo" },
                { icon: <Facebook />, label: "Facebook", info: "Robi Joy Chakma", href: "https://www.facebook.com/robijoychakma01", color: "blue" },
                { icon: <Github />, label: "GitHub", info: "@robijoychakma375-hash", href: "https://github.com/robijoychakma375-hash", color: "slate" },
              ].map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass p-6 rounded-3xl flex items-center gap-6 group hover:border-cyan-500/50 transition-all"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                    <p className="text-slate-200 group-hover:text-cyan-400 transition-colors truncate max-w-[150px] md:max-w-full">
                      {item.info}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileActive={{ scale: 0.9 }}
        className="whatsapp-float group"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat with me</span>
        <MessageCircle size={32} />
      </motion.a>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold mb-2 tracking-tighter">ROBI<span className="text-cyan-400">JOY</span></h4>
            <p className="text-slate-500 text-sm max-w-xs">
              Building a brighter future through engineering excellence and digital innovation.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/robijoychakma375-hash" className="text-slate-500 hover:text-white transition-colors"><Github /></a>
            <a href="https://bd.linkedin.com/in/robijoy-chakma-1b66b8224" className="text-slate-500 hover:text-white transition-colors"><Linkedin /></a>
            <a href="https://www.facebook.com/robijoychakma01" className="text-slate-500 hover:text-white transition-colors"><Facebook /></a>
          </div>

          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Robi Joy Chakma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
