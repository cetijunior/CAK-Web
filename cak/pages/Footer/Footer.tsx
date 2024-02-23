const Footer: React.FC = () => {

    const scrollToSection = (sectionId) => (e) => {
        e.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <footer className="bg-[#f8edeb] text-[#381d1d]">
            <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
                <div>
                    <h5 className="text-xl font-bold mb-2">Our Company</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" onClick={scrollToSection('#about')} className="hover:text-[#df5c5c] transition-colors">About Us</a>
                        </li>
                        <li>
                            <a href="#services" onClick={scrollToSection('#services')} className="hover:text-[#df5c5c] transition-colors">Our Services</a>
                        </li>
                        <li>
                            <a href="#contacts" onClick={scrollToSection('#contacts')} className="hover:text-[#df5c5c] transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://www.facebook.com" className="hover:text-[#df5c5c] transition-colors">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" className="hover:text-[#df5c5c] transition-colors">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" className="hover:text-[#df5c5c] transition-colors">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-bold mb-2">Legal</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="/privacy" className="hover:text-[#df5c5c] transition-colors">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-[#df5c5c] transition-colors">Terms of Use</a>
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
