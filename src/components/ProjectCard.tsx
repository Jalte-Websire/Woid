import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  type: 'Webshop' | 'Hjemmeside';
  image: string;
  logo: string;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ type, image, logo, title, description, link }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <span className={styles.type}>{type}</span>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <Image 
          src={logo} 
          alt={`${title} logo`} 
          width={120} 
          height={30} 
          className={styles.logo}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={link} className={styles.cta}>
          Gå til case
        </Link>
      </div>
    </div>
  );
} 