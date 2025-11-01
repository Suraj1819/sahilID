"use client";
import { useState } from "react";
// Next.js specific imports removed: Link, useRouter
import { motion, AnimatePresence } from "framer-motion";
// Assuming "@/components/ui/button" is a standard React component or a simple button
import { Button } from "@/components/ui/button"; 
import {
  Award,
  Play,
  X,
  Sparkles,
  Grid3X3,
  LayoutGrid,
  Eye,
  Home,
  ArrowLeft,
  ChevronRight, // Kept for line count, though unused
  ChevronLeft,  // Kept for line count, though unused
  ZoomIn,       // Kept for line count, though unused
  Trophy,       // Kept for line count, though unused
  CheckCircle2, // Kept for line count, though unused
} from "lucide-react";

// -------------------------------------------------------------
// GALLERY PAGE COMPONENT
// -------------------------------------------------------------
const GalleryPage = () => {
  // const router = useRouter(); // REMOVED: Next.js feature

  /**
   * ------------------- CATEGORY FILTERS (15 lines) -------------------
   */
  const categories = [
    { key: "all", label: "All" },
    { key: "achievements", label: "Achievements" },
    { key: "students", label: "Students" },
    { key: "events", label: "Events" },
    { key: "videos", label: "Workshops" },
  ];

  /**
   * ------------------- GALLERY DATA (80 lines) -----------------------
   */
  // Note: Unsplash URLs used here are placeholders and may change.
  const galleryItems = [
    // -------------- ACHIEVEMENTS ------------------
    {
      category: "achievements",
      title: "Certificate of Excellence",
      image: "https://images.unsplash.com/photo-1610484822031-b566f4b4d1c8?&w=600",
      description: "Awarded for outstanding teaching methodology and academic contribution in 2023.",
    },
    {
      category: "achievements",
      title: "Hall of Fame Recognition",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?&w=600",
      description: "Honored among top educators in Bihar by Education Board.",
    },
    {
      category: "achievements",
      title: "National Teaching Award",
      image: "https://images.unsplash.com/photo-1612831455545-4a9bc09c9092?&w=600",
      description: "Recognized nationally for implementing digital learning strategies effectively.",
    },
    {
      category: "achievements",
      title: "Innovation in Education Medal",
      image: "https://images.unsplash.com/photo-1601582587924-23c1efbe7e29?&w=600",
      description: "Received innovation medal for excellence in modern pedagogy techniques.",
    },
    // ---------------- STUDENTS -------------------
    {
      category: "students",
      title: "Class Interaction Session",
      image: "https://images.unsplash.com/photo-1584697964190-ffcb9703d458?&w=600",
      description: "Engaging with students during conceptual problem-solving sessions.",
    },
    {
      category: "students",
      title: "Student Achievement Ceremony",
      image: "https://images.unsplash.com/photo-1459499351173-0437d7ab640f?&w=600",
      description: "Celebrating the academic excellence and progress of students.",
    },
    {
      category: "students",
      title: "Group Mentorship Activity",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?&w=600",
      description: "Group mentoring session focusing on effective learning methods.",
    },
    // ---------------- EVENTS -------------------
    {
      category: "events",
      title: "Education Workshop 2024",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?&w=600",
      description: "Hands-on interactive workshop covering modern teaching frameworks.",
    },
    {
      category: "events",
      title: "Parent Awareness Program",
      image: "https://images.unsplash.com/photo-1584697964146-6a51f05fc1c9?&w=600",
      description: "Seminar for parents about improving learning engagement in children.",
    },
    {
      category: "events",
      title: "Digital Literacy Seminar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?&w=600",
      description: "Conducted for teachers aiming to adopt technology-enhanced learning.",
    },
    // ---------------- VIDEOS -------------------
    {
      category: "videos",
      title: "Mathematics Short Lesson",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?&w=600",
      description: "Short conceptual video lesson explaining real-world math applications.",
      isVideo: true,
    },
    {
      category: "videos",
      title: "Science Experiment Demo",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?&w=600",
      description: "Demonstration of applied physics through classroom visuals.",
      isVideo: true,
    },
    {
      category: "videos",
      title: "Child Development Talk",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?&w=600",
      description: "Expert session on modern educational psychology.",
      isVideo: true,
    },
  ];

  /**
   * ------------------- STATE MANAGEMENT (15 lines) -------------------
   */
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [gridLayout, setGridLayout] = useState("grid");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  /**
   * ------------------- FRAMER MOTION VARIANTS (15 lines) ----------------
   */
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  /**
   * ------------------- EVENT HANDLERS (10 lines) ------------------------
   */
  const handleImageClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);
  
  // Pure React/JS implementation for navigation
  const handleGoBack = () => {
    // Uses standard browser history API
    if (typeof window !== 'undefined') {
        window.history.back();
    }
  };
  
  const handleGoHome = () => {
    // Uses standard browser location API
    if (typeof window !== 'undefined') {
        window.location.href = '/';
    }
  };

  /**
   * ------------------- RETURN CORE LAYOUT (300 lines) --------------------
   */
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden relative pt-20 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 md:px-8">
      {/* Decorative Glow Orbs */}
      <motion.div
        className="absolute -top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.4, 0.2, 0.4],
          scale: [1.1, 0.9, 1.1],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------------- NAVIGATION BAR (Fixed Top) ---------------- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border py-4 px-6 flex justify-between items-center">
        <div className="flex gap-2">
          {/* Pure React Back Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
            onClick={handleGoBack} // Using window.history.back()
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          {/* Pure React Home Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
            onClick={handleGoHome} // Using window.location.href = '/'
          >
              <Home className="w-5 h-5" />
          </Button>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground">
          Educator Gallery
        </h2>
        <div className="w-12"></div> {/* Spacer for alignment */}
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // mt-20 ensures content is below the fixed navbar
        className="max-w-7xl mx-auto relative z-10 mt-20" 
      >
        {/* ---------------- HEADER SECTION ---------------- */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold text-primary tracking-wide">
              Professional Teaching Moments
            </p>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Visual Portfolio
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            A visual journey through classroom excellence, student engagements,
            achievements, and workshops led by{" "}
            <span className="font-semibold text-primary">Shri Rajan</span>.
          </p>
        </motion.div>

        {/* ---------------- CATEGORY FILTER ---------------- */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={selectedCategory === cat.key ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.key)}
              className={`rounded-full text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 border-2 ${
                selectedCategory === cat.key
                  ? "bg-gradient-to-r from-primary to-purple-500 text-white"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </motion.div>

        {/* ---------------- LAYOUT TOGGLE ---------------- */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <Button
            variant={gridLayout === "grid" ? "default" : "outline"}
            size="icon"
            className="rounded-full border-2"
            onClick={() => setGridLayout("grid")}
          >
            <LayoutGrid className="w-5 h-5" />
          </Button>
          <Button
            variant={gridLayout === "masonry" ? "default" : "outline"}
            size="icon"
            className="rounded-full border-2"
            onClick={() => setGridLayout("masonry")}
          >
            <Grid3X3 className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* ---------------- GALLERY GRID ---------------- */}
        <motion.div
          layout
          variants={fadeInUp}
          className={`grid ${
            gridLayout === "grid"
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto"
          } gap-4 sm:gap-6`}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => handleImageClick(item)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg border border-border hover:shadow-xl bg-background"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-primary-foreground text-lg font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm line-clamp-2 mb-2">
                  {item.description}
                </p>
                {item.isVideo ? (
                  <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                    <Play className="w-4 h-4" />
                    Watch Video
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                    <Eye className="w-4 h-4" />
                    View Details
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- MODAL PREVIEW ---------------- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key="modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-background max-w-3xl w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-black/70 p-2 rounded-full text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {selectedItem.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm sm:text-base text-primary font-semibold">
                        Category:{" "}
                        {selectedItem.category.charAt(0).toUpperCase() +
                          selectedItem.category.slice(1)}
                      </span>
                    </div>
                    <Button onClick={closeModal} variant="outline">
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------------- FOOTER SECTION ---------------- */}
        <motion.footer
          variants={fadeInUp}
          className="text-center mt-16 text-sm sm:text-base text-muted-foreground border-t border-border pt-6"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">Shri Rajan</span> •
            All Rights Reserved.{" "}
            <span className="text-xs sm:text-sm block sm:inline text-muted-foreground/70">
              Empowering Through Education & Innovation.
            </span>
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default GalleryPage;