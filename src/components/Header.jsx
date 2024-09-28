import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import LogoIcon from "../assets/shared/desktop/logo.svg";

const Header = (props) => {
    const boolean = true;
    return (
        <header className={`${boolean ? 'bg-black' : 'bg-[#191919]'}`}>
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="" aria-label="Audiophile Logo">
                    <img src={LogoIcon.src} alt="Audiophile Logo" />
                </a>
                <nav className="hidden lg:flex">
                    <ul className="flex items-center justify-between gap-[2.12rem]">
                        <li><a href="/" className="text-white font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[0.125rem] uppercase  hover:text-[#D87D4A] cursor-pointer transition-colors duration-500">Home</a></li>
                        <li><a href="/headphones" className="text-white font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[0.125rem] uppercase  hover:text-[#D87D4A] cursor-pointer transition-colors duration-500">Headphones</a></li>
                        <li><a href="/speakers" className="text-white font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[0.125rem] uppercase  hover:text-[#D87D4A] cursor-pointer transition-colors duration-500">Speakers</a></li>
                        <li><a href="/earphones" className="text-white font-bold text-[0.8125rem] leading-[1.5625rem] tracking-[0.125rem] uppercase  hover:text-[#D87D4A] cursor-pointer transition-colors duration-500">Earphones</a></li>
                    </ul>
                </nav>
                <a href="/checkout" className="" aria-label="Cart">
                    <img src={CartIcon.src} alt="Cart Icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;
