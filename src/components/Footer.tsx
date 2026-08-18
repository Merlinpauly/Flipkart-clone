import "../styles/index.css";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>About</h4>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Careers</p>
            </div>

            <div className="footer-section">
                <h4>Help</h4>
                <p>Payments</p>
                <p>Shipping</p>
                <p>FAQ</p>
            </div>

            <div className="footer-section">
                <h4>Consumer Policy</h4>
                <p>Cancellation & Returns</p>
                <p>Terms Of Use</p>
                <p>Privacy</p>
            </div>

            <div className="footer-section">
                <h4>Social</h4>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>YouTube</p>
            </div>
        </footer>
    );
}

export default Footer;