// src/app/contact/page.tsx
import styles from '../../styles/ContactForm.module.css';


const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactFormContainer}>
      <h1 className={styles.title}>FEEDBACK FORM</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="First name" className={styles.input} />
          <input type="text" placeholder="Last name" className={styles.input} />
        </div>
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea placeholder="Leave us a message here..." className={styles.textarea} />
        <button type="submit" className={styles.button}>Send message</button>
      </form>
    </div>
  );
};

export default ContactPage;
