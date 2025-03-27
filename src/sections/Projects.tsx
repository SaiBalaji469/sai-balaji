import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = 
  [
    {
      image: '/projects/project1.webp',
      projectName: 'Bookstore Application',
      projectLink: 'https://book-app-frontend-silk.vercel.app/',
      projectDescription:
        'A full-stack bookstore application built with the MERN stack, featuring secure authentication, an admin dashboard, an inventory management system, and a seamless checkout process with a cash-on-delivery option.',
      projectTech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT',],
      projectExternalLinks: {
        github: 'https://github.com/SaiBalaji469/Book-Store-Fullstack-Project',
        externalLink: 'https://book-app-frontend-silk.vercel.app/',
      },
    },
    {
      image: '/projects/project2.webp',
      projectName: 'Netflix Clone Application',
      projectLink: 'https://netflix-react-tailwind-tau.vercel.app/',
      projectDescription:
        'A Netflix-inspired streaming platform using React and Firebase, integrated with the TMDB API to fetch real-time movie data. Features user authentication, a watchlist, and a modern, responsive UI.',
      projectTech: ['React', 'Firebase', 'TMDB API', 'Tailwind CSS', 'Firestore'],
      projectExternalLinks: {
        github: 'https://github.com/SaiBalaji469/netflix-react-tailwind-',
        externalLink: 'https://netflix-react-tailwind-tau.vercel.app/',
      },
    },
    {
      image: '/projects/project3.webp',
      projectName: 'Food App',
      projectLink: 'https://food-app-six-omega.vercel.app/',
      projectDescription:
        'A responsive React.js website built with Tailwind CSS, following a mobile-first design approach. It dynamically fetches and filters data from a simulated API (data.js), providing an interactive and seamless user experience.',
      projectTech: ['React', 'Tailwind CSS'],
      projectExternalLinks: {
        github: 'https://github.com/SaiBalaji469/Food-App',
        externalLink: 'https://food-app-six-omega.vercel.app/',
      },
    },
  ];
  
  
  

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link>
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
