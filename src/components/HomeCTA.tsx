"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons"; // ✅ Correctly imported here

// Animation variants
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// CTA Button Props
interface CTAButtonProps {
  href: string;
  label: string;
  Icon: IconType;
  bg: string;
  text: string;
  newTab?: boolean;
}

// ContactItem Props
interface ContactItemProps {
  icon: IconType;
  href?: string;
  text: string;
}

const HomeCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/15 dark:bg-blue-900/40 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-200/25 dark:bg-teal-700/25 rounded-full blur-2xl opacity-15"
        animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight font-sans"
          variants={itemVariants}
        >
          Launch Your Next Big Idea
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90"
          variants={itemVariants}
        >
          Collaborate with Modern Tech Solutions to transform your vision into cutting-edge web, app, and school management systems.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <CTAButton
            href="#contact"
            label="Contact Us"
            Icon={FaEnvelope}
            bg="bg-white"
            text="text-blue-700"
          />
          <CTAButton
            href="mailto:technicalweb101@gmail.com"
            label="Email Us"
            Icon={FaEnvelope}
            bg="bg-blue-100"
            text="text-blue-800"
          />
          <CTAButton
            href="tel:+919352750570"
            label="Call: +91 9352750570"
            Icon={FaPhone}
            bg="bg-green-100"
            text="text-green-800"
          />
          <CTAButton
            href="https://www.linkedin.com/in/hemant-choudhary29"
            label="LinkedIn"
            Icon={FaLinkedin}
            bg="bg-blue-700"
            text="text-white"
            newTab
          />
          <CTAButton
            href="/team"
            label="Meet the Team"
            Icon={FaUsers}
            bg="bg-purple-600"
            text="text-white"
          />
        </motion.div>

        {/* Contact + Map */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="font-semibold text-lg">Get in Touch</span>
            <ContactItem
              icon={FaPhone}
              href="tel:+919352750570"
              text="+91 9352750570"
            />
            <ContactItem
              icon={FaEnvelope}
              href="mailto:technicalweb101@gmail.com"
              text="technicalweb101@gmail.com"
            />
            <ContactItem
              icon={FaMapMarkerAlt}
              text="88 C, Prempura, Vaishali Nagar, Jaipur, Rajasthan, India"
            />
          </div>
          <div className="w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[500px]">
            <iframe
              title="Modern Tech Solutions Location in Jaipur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8730755484164!2d75.7513161150837!3d26.90528398313584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzE5LjAiTiA3NcKwNDUnMDQuNyJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-2xl border-2 border-blue-200/30 shadow-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// CTA Button Component
const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  label,
  Icon,
  bg,
  text,
  newTab = false,
}) => (
  <a
    href={href}
    target={newTab ? "_blank" : "_self"}
    rel={newTab ? "noopener noreferrer" : undefined}
    className={`flex items-center px-6 py-3 ${bg} ${text} font-medium rounded-full shadow-md hover:scale-105 transition-all duration-300`}
  >
    <Icon className="mr-2" />
    {label}
  </a>
);

// Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, href, text }) => (
  <p className="text-base flex items-center gap-2 max-w-xs">
    <Icon className="text-blue-200" />
    {href ? (
      <a
        href={href}
        className="hover:text-blue-200 transition-colors duration-200"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </p>
);

export default HomeCTA;
