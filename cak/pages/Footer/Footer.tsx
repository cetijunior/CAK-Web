const Footer: React.FC = () => {
    return (
        <footer className="bg-emerald-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12 md:flex md:justify-between">
                <div>
                    <h5 className="text-xl font-bold mb-2">Our Company</h5>
                    <ul>
                        <li className="mb-2">
                            <a href="/about" className="hover:text-emerald-300 transition-colors">About Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="/services" className="hover:text-emerald-300 transition-colors">Our Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-emerald-300 transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                    <ul>
                        <li className="mb-2">
                            <a href="https://www.facebook.com" className="hover:text-emerald-300 transition-colors">Facebook</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.instagram.com" className="hover:text-emerald-300 transition-colors">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" className="hover:text-emerald-300 transition-colors">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-bold mb-2">Legal</h5>
                    <ul>
                        <li className="mb-2">
                            <a href="/privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-emerald-300 transition-colors">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-4 border-t border-emerald-700">
                <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
