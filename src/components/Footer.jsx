function Footer() {
  return (
    <div>
      <footer className="styles.footer">
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
