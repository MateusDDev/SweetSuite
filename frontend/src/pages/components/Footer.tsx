import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import style from './Footer.module.css';

function Footer() {
  return (
    <footer className={ style.footer }>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <BsInstagram className={ style.socialIcon } />
      </a>
      <a href="/" rel="noopener noreferrer">
        <BsWhatsapp className={ style.socialIcon } />
      </a>
    </footer>
  );
}

export default Footer;
