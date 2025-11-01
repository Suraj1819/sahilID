import Navigation from "@/components/Navigation";
import Gallery from "@/components/Gallery";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Target, Heart, Lightbulb, BookOpen, Video, 
  Award, TrendingUp, Users, Sparkles, CheckCircle2, ArrowRight,
  Calendar, MapPin, Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "Educational Excellence",
      description: "Committed to delivering high-quality education through innovative and student-centered teaching methodologies.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation in Teaching",
      description: "Leveraging modern educational technology and creative approaches to enhance learning experiences and outcomes.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Student Development",
      description: "Focused on holistic development, addressing individual learning needs and fostering academic and personal growth.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Students Mentored", color: "text-blue-500" },
    { icon: BookOpen, value: "15+", label: "Courses Developed", color: "text-green-500" },
    { icon: Award, value: "98%", label: "Success Rate", color: "text-purple-500" },
    { icon: TrendingUp, value: "10+", label: "Years Experience", color: "text-orange-500" },
  ];

  const journey = [
    {
      year: "2024",
      title: "D.El.Ed Program Enrollment",
      description: "Commenced Diploma in Elementary Education at Pokhraira Government College, focusing on advanced pedagogical methods and contemporary educational practices.",
      icon: GraduationCap,
      color: "bg-blue-500"
    },
    {
      year: "2024",
      title: "Digital Education Initiative",
      description: "Launched comprehensive educational content creation program, developing multimedia resources for enhanced student engagement and accessibility.",
      icon: Video,
      color: "bg-purple-500"
    },
    {
      year: "2025",
      title: "Active Teaching Practice",
      description: "Currently mentoring and educating young learners with emphasis on creative, inclusive teaching approaches and personalized learning strategies.",
      icon: BookOpen,
      color: "bg-green-500"
    }
  ];

  const achievements = [
    "Specialized in Elementary Education Pedagogy",
    "Expert in Child Development Psychology",
    "Curriculum Design & Development Professional",
    "Digital Content Creation Specialist",
    "Inclusive Teaching Practices Advocate",
    "Educational Technology Integration Expert"
  ];

  // Professional Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scaleInVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Professional Educator</span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Dedicated educator committed to fostering academic excellence and nurturing 
            intellectual curiosity through innovative teaching methodologies
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-gradient-card border-none shadow-professional p-4 sm:p-6 text-center backdrop-blur-sm relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${stat.color}`} />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2 relative z-10">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium relative z-10">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleInVariants}
          className="mb-10 sm:mb-16"
        >
          <Card className="bg-gradient-card shadow-professional border-none p-5 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-xl"
                whileHover={{ 
                  rotate: 360, 
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Educational Philosophy
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  As a professional educator, my philosophy centers on creating an inclusive and stimulating learning environment 
                  that empowers every student to achieve their full potential. I believe education transcends mere knowledge 
                  transmission—it cultivates critical thinking, creativity, and a passion for lifelong learning. My approach 
                  integrates evidence-based pedagogical practices with innovative teaching strategies to ensure optimal learning 
                  outcomes for diverse student populations.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-3 sm:mb-4"
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Core Values</span>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 px-4"
              variants={fadeInUpVariants}
            >
              What Drives My{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Teaching</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-gradient-card shadow-professional border-none p-5 sm:p-6 h-full group relative overflow-hidden">
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5`}
                      initial={false}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <Gallery />

        {/* Journey Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
          className="mb-10 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-3 sm:mb-4"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">My Journey</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 px-4">
              Professional{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Timeline</span>
            </h2>
          </div>

          <Card className="bg-gradient-card shadow-professional border-none p-4 sm:p-6 md:p-10">
            <div className="space-y-6 sm:space-y-8">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 sm:gap-6 items-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.15, 
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${item.color} flex flex-col items-center justify-center text-white font-bold shadow-xl`}
                        whileHover={{ 
                          rotate: 360, 
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 sm:mb-1" />
                        <span className="text-xs">{item.year}</span>
                      </motion.div>
                    </div>
                    <div className="flex-grow bg-secondary/50 rounded-xl p-4 sm:p-6 hover:bg-secondary/70 transition-all duration-300 border border-transparent hover:border-primary/20">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Education Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleInVariants}
          className="mb-10 sm:mb-16"
        >
          <Card className="bg-gradient-card shadow-professional border-none p-5 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-xl"
                whileHover={{ 
                  rotate: 360, 
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  Academic Credentials & Expertise
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Comprehensive educational background focused on modern pedagogical practices
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                className="bg-secondary/50 rounded-xl p-4 sm:p-6 border border-border hover:border-primary/20 transition-all"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">
                      D.El.Ed - Diploma in Elementary Education
                    </h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        Pokhraira Government College
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        2024 - 2026
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Comprehensive program specializing in elementary education pedagogy, child development psychology, 
                      curriculum design, and contemporary teaching methodologies. Focus on integrating educational technology 
                      and inclusive teaching practices for diverse learning environments.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-secondary/50 rounded-xl p-4 sm:p-6 border border-border hover:border-primary/20 transition-all"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                      Digital Educational Content Development
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      Specialized in creating engaging multimedia educational resources that enhance student comprehension 
                      and retention. Expertise in video production, instructional design, and digital pedagogy to deliver 
                      accessible and impactful learning experiences across various educational platforms.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.08,
                            duration: 0.5
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleInVariants}
        >
          <Card className="bg-gradient-primary border-none shadow-professional p-6 sm:p-8 md:p-12 text-center text-primary-foreground">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
              Let's discuss how I can help you or your child achieve academic excellence 
              through personalized education and innovative teaching methods.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default About;