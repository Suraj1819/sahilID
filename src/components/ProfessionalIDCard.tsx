import { Mail, Phone, Instagram, GraduationCap, MapPin, Award, BookOpen, Shield, CheckCircle2, Calendar, Users, Target, Globe, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProfessionalIDCard = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const statsData = [
    { icon: Users, value: "500+", label: "Students Taught" },
    { icon: BookOpen, value: "10+", label: "Years Experience" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: Award, value: "15+", label: "Certifications" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 pt-16 sm:pt-24 pb-6 sm:pb-12 bg-gradient-to-br from-background via-secondary/20 to-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl"
      >
        <Card className="bg-gradient-card shadow-2xl border border-primary/20 sm:border-2 overflow-hidden relative">
          {/* Security Watermark */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(var(--primary), 0.03) 20px,
                  rgba(var(--primary), 0.03) 40px
                )`
              }}
            />
          </div>

          {/* Header with Security Elements */}
          <motion.div
            className="bg-gradient-primary text-primary-foreground px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-10 relative overflow-hidden"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)',
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <Shield className="w-6 sm:w-8 md:w-10 md:h-10" />
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                      CERTIFIED PROFESSIONAL EDUCATOR
                    </h1>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm md:text-lg font-medium mt-1">
                      Government Recognized • Accredited Institution
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-primary-foreground/80 text-xs sm:text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 sm:w-4" />
                    Registration ID: EDU-2024-SR-001
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3 sm:w-4" />
                    Valid Until: December 2026
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center border-2 border-primary-foreground/30"
              >
                <CheckCircle2 className="w-6 sm:w-8 md:w-10 md:h-10 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 md:p-10 relative z-10">
            <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[380px_1fr] gap-4 sm:gap-8 md:gap-16">

              {/* Left Section - Photo & Basic Info */}
              <motion.div
                className="flex flex-col items-center space-y-4 sm:space-y-6"
                variants={itemVariants}
              >
                {/* Professional Circular Photo */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Main circular photo container */}
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-primary/20 relative bg-gradient-primary">
                      {/* Photo placeholder with initials */}
                      <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl sm:text-4xl md:text-6xl font-bold">
                        SR
                      </div>

                      {/* Photo upload overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6">
                        <div className="text-white text-center">
                          <Camera className="w-6 sm:w-8 mx-auto mb-2" />
                          <p className="text-xs sm:text-sm font-medium">Upload Photo</p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative rings around photo */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-2 border-dashed border-primary/40"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 sm:-inset-3 md:-inset-4 w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76 xl:w-88 xl:h-88 rounded-full border border-dotted border-primary/30"
                    />
                  </div>

                  {/* Verification Badge - positioned after the rings */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base font-bold shadow-2xl border-2 sm:border-4 border-background rounded-full">
                      <CheckCircle2 className="w-3 sm:w-4 mr-1 sm:mr-2" />
                      VERIFIED
                    </Badge>
                  </motion.div>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                  className="text-center space-y-2 sm:space-y-3 mt-12 sm:mt-16"
                  variants={itemVariants}
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-foreground tracking-wide">
                      Shri Rajan
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-primary font-bold">
                      Professional Educator & Academic Mentor
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground italic font-medium bg-secondary/30 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      "Transforming Lives Through Quality Education"
                    </p>
                  </div>

                  {/* Professional Credentials */}
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-4">
                    {["D.El.Ed Certified", "10+ Years Exp", "500+ Students", "98% Success"].map((credential, index) => (
                      <motion.span
                        key={credential}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full border border-primary/20"
                      >
                        {credential}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Professional Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-2 sm:gap-4 w-full mt-4 sm:mt-6"
                  variants={itemVariants}
                >
                  {statsData.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 sm:p-4 bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-xl sm:rounded-2xl border border-primary/10 shadow-lg"
                      >
                        <Icon className="w-5 sm:w-6 md:w-8 mx-auto mb-1 sm:mb-2 text-primary" />
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Right Section - Professional Information */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Contact Information */}
                <motion.div
                  className="bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10 sm:border-2 shadow-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-gradient-primary rounded-full"></div>
                    Professional Contact
                    <CheckCircle2 className="w-4 sm:w-5 text-green-500 ml-auto" />
                  </h3>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <motion.a
                      href="mailto:srsrajan000@gmail.com"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/80 rounded-xl sm:rounded-2xl hover:bg-background transition-all group shadow-lg border border-blue-500/20"
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-blue-500/20 sm:border-2">
                        <Mail className="w-5 sm:w-6 text-blue-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Email Address</p>
                        <p className="text-sm sm:text-base font-bold text-foreground truncate">srsrajan000@gmail.com</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+918002567368"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/80 rounded-xl sm:rounded-2xl hover:bg-background transition-all group shadow-lg border border-green-500/20"
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20 sm:border-2">
                        <Phone className="w-5 sm:w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Phone Number</p>
                        <p className="text-sm sm:text-base font-bold text-foreground">+91 8002567368</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/srsrajan1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/80 rounded-xl sm:rounded-2xl hover:bg-background transition-all group shadow-lg border border-pink-500/20"
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors border border-pink-500/20 sm:border-2">
                        <Instagram className="w-5 sm:w-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Instagram</p>
                        <p className="text-sm sm:text-base font-bold text-foreground">@srsrajan1</p>
                      </div>
                    </motion.a>

                    <motion.div
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/80 rounded-xl sm:rounded-2xl shadow-lg border border-purple-500/20"
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 sm:border-2">
                        <MapPin className="w-5 sm:w-6 text-purple-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Location</p>
                        <p className="text-sm sm:text-base font-bold text-foreground truncate">Marwan Bhoj, Muzaffarpur, Bihar</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Education & Qualifications */}
                <motion.div
                  className="bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10 sm:border-2 shadow-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-gradient-primary rounded-full"></div>
                    Academic Credentials
                    <Award className="w-4 sm:w-5 text-yellow-500 ml-auto" />
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-3 sm:p-4 bg-background/80 rounded-xl sm:rounded-2xl shadow-lg border border-primary/10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 sm:border-2">
                        <GraduationCap className="w-6 sm:w-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
                          <h4 className="font-bold text-base sm:text-lg text-foreground">D.El.Ed - Elementary Education</h4>
                          <Badge className="bg-blue-500/10 text-blue-600 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-0.5 sm:py-1">Pursuing</Badge>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground font-semibold mb-2 sm:mb-3">Pokhraira Government College, Muzaffarpur</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1 sm:gap-2">
                            <Calendar className="w-3 sm:w-4" />
                            Academic Year: 2024 - 2026
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <MapPin className="w-3 sm:w-4" />
                            Bihar, India
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Comprehensive program in elementary education pedagogy, child psychology, and modern teaching methodologies. Specialized training in curriculum development and educational assessment techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Professional Competencies */}
                <motion.div
                  className="bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10 sm:border-2 shadow-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-gradient-primary rounded-full"></div>
                    Professional Competencies
                    <Target className="w-4 sm:w-5 text-green-500 ml-auto" />
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      "Curriculum Development",
                      "Student Assessment",
                      "Digital Teaching Tools",
                      "Child Psychology",
                      "Educational Leadership",
                      "Parent Communication",
                      "Academic Counseling",
                      "Content Creation",
                      "Exam Preparation"
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + index * 0.05 }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full justify-center bg-primary/10 text-primary hover:bg-primary/20 text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 font-semibold border border-primary/20 rounded-lg sm:rounded-xl"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Experience & Achievements */}
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-500/20 sm:border-2 shadow-xl"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <BookOpen className="w-4 sm:w-5 text-blue-500" />
                      Teaching Experience
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Specialized educator with extensive experience in elementary pedagogy, innovative teaching methodologies, and student-centered learning approaches. Expert in creating engaging educational content.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-purple-500/15 to-fuchsia-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-purple-500/20 sm:border-2 shadow-xl"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Award className="w-4 sm:w-5 text-purple-500" />
                      Key Achievements
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Developed comprehensive educational content, successfully mentored 500+ students, and maintained an exceptional 98% success rate in academic excellence and student development.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Footer */}
          <motion.div
            className="bg-gradient-primary text-primary-foreground px-4 sm:px-8 md:px-12 py-4 sm:py-6 relative overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-3 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-lg md:text-xl font-bold">
                  Committed to Educational Excellence & Student Development
                </p>
                <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1 sm:mt-2">
                  Licensed Educator • Certified Professional • Quality Assured • Government Recognized
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-primary-foreground/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Globe className="w-4 sm:w-5" />
                <span className="text-sm sm:text-base font-bold">srsrajan.edu</span>
              </div>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfessionalIDCard;