import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, Phone, Instagram, MapPin, Send, CheckCircle2, 
  Sparkles, ArrowRight, Loader2, Clock, MessageCircle, User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "srsrajan000@gmail.com",
      link: "mailto:srsrajan000@gmail.com",
      description: "Drop me an email anytime",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 8002567368",
      description: "Available 9 AM - 9 PM IST",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@srsrajan1",
      link: "https://instagram.com/srsrajan1",
      description: "Follow for updates",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Muzaffarpur, Bihar",
      link: "https://share.google/qdXfdfzH5atxfMt09",
      description: "India",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "I respond to all inquiries within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Professional Support",
      description: "Get detailed answers to your questions"
    },
    {
      icon: User,
      title: "Personalized Attention",
      description: "Every message receives my personal attention"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const message = encodeURIComponent(
        `🎓 *New Contact Form Submission*
` +
        `👤 *Name:* ${formData.name}
` +
        `📧 *Email:* ${formData.email}
` +
        `${formData.phone ? `📱 *Phone:* ${formData.phone}
` : ''}` +
        `📌 *Subject:* ${formData.subject}
` +
        `💬 *Message:*
${formData.message}`
      );
      
      setSubmitted(true);
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "⚠️ Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Get in Touch</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Let's Start a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about tutoring, collaboration, or educational services? 
            I'm here to help you achieve your goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 bg-gradient-card border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar - Shows second on mobile (order-2), first on desktop (lg:order-1) */}
          <motion.div 
            className="lg:col-span-1 space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-card border-none shadow-xl">
              <h2 className="text-xl font-bold mb-5">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                        <p className="font-semibold text-sm truncate mb-1">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-2" />
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-primary text-primary-foreground border-none shadow-xl">
              <h3 className="font-bold text-lg mb-3">Response Time</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Email responses within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>WhatsApp responses within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Available Monday - Saturday</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-none shadow-xl">
              <h3 className="font-bold text-lg mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9 AM - 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form - Shows first on mobile (order-1), second on desktop (lg:order-2) */}
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 md:p-8 bg-gradient-card border-none shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16"
                  >
                    <motion.div 
                      className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. I'll respond to your inquiry within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          required
                          className={`h-11 transition-all duration-300 ${
                            focusedField === 'name' ? 'ring-2 ring-primary/20 border-primary' : ''
                          }`}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@example.com"
                          required
                          className={`h-11 transition-all duration-300 ${
                            focusedField === 'email' ? 'ring-2 ring-primary/20 border-primary' : ''
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">
                          Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+91 XXXXX XXXXX"
                          className={`h-11 transition-all duration-300 ${
                            focusedField === 'phone' ? 'ring-2 ring-primary/20 border-primary' : ''
                          }`}
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-sm font-semibold mb-2 block">
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="What's this about?"
                          required
                          className={`h-11 transition-all duration-300 ${
                            focusedField === 'subject' ? 'ring-2 ring-primary/20 border-primary' : ''
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold mb-2 block">
                        Your Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        required
                        className={`resize-none transition-all duration-300 ${
                          focusedField === 'message' ? 'ring-2 ring-primary/20 border-primary' : ''
                        }`}
                      />
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-muted-foreground">
                          Minimum 10 characters required
                        </p>
                        <p className={`text-xs ${formData.message.length > 900 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                          {formData.message.length}/1000
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 h-12 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Your information will be kept confidential and used only to respond to your inquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;