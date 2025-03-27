import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      "Hello! I am Sai Balaji, a passionate Full-Stack Developer with expertise in the MERN stack, React,Node.js and MongoDB.",
    experience:
      'At Raudra EduServices, I designed and developed the company’s website, optimized the Edutech LMS, and built web projects using React, Node.js, and MongoDB. My expertise includes Redux, Firebase, and UI frameworks like Tailwind CSS and Material UI.',
  };
  
  const desktopText = {
    intro:
      'Hello! I am Sai Balaji, a Full-Stack Developer with a strong foundation in web development and a keen interest in building scalable, high-performance applications. I hold a Bachelor of Technology in Mechanical Engineering from RGUKT-IIIT Ongole and have hands-on experience with modern web technologies.',
    experience:
      'At Raudra EduServices, I played a key role in developing and optimizing the company’s Edutech platform, integrating advanced features like progress tracking, course management, and authentication. My expertise spans React, Redux, Node.js, Express.js, MongoDB, Firebase, and UI frameworks like Tailwind CSS and Material UI. I have developed projects like a Full-Stack Bookstore, a Netflix Clone, and a URL Shortener, demonstrating my ability to create efficient and user-friendly applications.',
  };
  

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">Google Cloud</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/image.webp"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
