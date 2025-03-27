import { Github, Instagram, Linkedin } from 'lucide-react';

function SocialIcons() {
  const socialLinks = [
    { name: 'Github', icon: <Github />, link: 'https://github.com/SaiBalaji469' },
    { name: 'LinkedIn', icon: <Linkedin />, link: 'https://www.linkedin.com/in/sai-balaji-40b695291/' },
    { name: 'Instagram', icon: <Instagram />, link: '#' },
  ];

  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
