function Header({activeSection, setActiveSectionState}) {

    const onClickLink = (section) => {
        setActiveSectionState(section);
    }

    return (
        <header>
            <div className="logo">My Portfolio</div>
            <div className="nav-links">
                <span onClick={() => onClickLink("about")} className={(activeSection === "about") ? "active" : ""}>About Me</span>
                <span onClick={() => onClickLink("portfolio")} className={(activeSection === "portfolio") ? "active" : ""}>Portfolio</span>
                <span onClick={() => onClickLink("contact")} className={(activeSection === "contact") ? "active" : ""}>Contact</span>
                <span onClick={() => onClickLink("resume")} className={(activeSection === "resume") ? "active" : ""}>Resume</span>
            </div>
        </header>
    );
}

export default Header;