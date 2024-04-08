// Header.jsx

import Button from "./Button";

function Header(props) {
    return (
        <section className="header h-screen w-full flex items-center text-white px-6 md:px-12 lg:px-16">
            <div className="space-y-6">
                <h2 className="text-lg">{props.subtitle}</h2>
                <h1 className="text-5xl md:text-6xl font-bold">{props.title}</h1>
                <p className="text-base max-w-[550px] leading-6">{props.description}</p>
                <Button buttonText="CHECK OUR MENU" />
            </div>
        </section>
    );
}

export default Header;
