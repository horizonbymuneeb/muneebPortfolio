import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'horizonbymuneeb.com',
    href: 'https://horizonbymuneeb.com',
  },
  {
    social: 'email',
    link: 'horizonbymuneeb@gmail.com',
    href: 'mailto:horizonbymuneeb@gmail.com',
  },
  {
    social: 'github',
    link: 'horizonbymuneeb',
    href: 'https://github.com/horizonbymuneeb',
  },
  {
    social: 'linkedin',
    link: 'tmuneebanjum',
    href: 'https://www.linkedin.com/in/tmuneebanjum/',
  },
  {
    social: 'twitter',
    link: 'horizonbymuneeb',
    href: 'https://www.twitter.com/horizonbymuneeb',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
