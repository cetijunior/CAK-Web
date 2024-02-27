const Footer: React.FC = () => {

    const scrollToSection = (sectionId: string) => (e: { preventDefault: () => void; }) => {
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
                    <h5 className="text-2xl font-bold mb-2 font-grimes ">Unsere Firma</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" onClick={scrollToSection('#about')} className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Über Uns</a>
                        </li>
                        <li>
                            <a href="#services" onClick={scrollToSection('#services')} className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Unsere Services</a>
                        </li>
                        <li>
                            <a href="#contacts" onClick={scrollToSection('#contacts')} className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Kontaktieren</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-2xl font-bold mb-2 font-grimes">Sozial</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://www.facebook.com" className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-2xl font-bold mb-2 font-grimes">Legal</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="#hero" onClick={scrollToSection('#hero')} className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Datenschutzklärung</a>
                        </li>
                        <li>
                            <a href="#hero" onClick={scrollToSection('#hero')} className="hover:text-[#df5c5c] transition-colors font-typewriter font-semibold">Benutzerbedinungen</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-4 border-t border-[#932b2dab]">
                <p className="font-typewriter font-bold">© {new Date().getFullYear()} CAK Web Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
