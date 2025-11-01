import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Video, Users, Award } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engaging classroom sessions with hands-on activities",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    },
    {
      icon: Video,
      title: "Educational Content",
      description: "Creating impactful video lessons for digital learning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Student Engagement",
      description: "Building strong connections with young learners",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
    },
    {
      icon: Award,
      title: "Achievement Focus",
      description: "Celebrating student success and growth milestones",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Teaching <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my educational approach and teaching methodologies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {galleryItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-card shadow-card border-none overflow-hidden h-full group cursor-pointer">
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-primary/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-12 h-12 text-primary-foreground" />
                  </motion.div>
                </motion.div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Gallery;
