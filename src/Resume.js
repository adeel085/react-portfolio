function Resume() {
    return (
        <>
            <h2 className="page-title">Profeciencies</h2>
            <div style={{marginTop: "20px"}}>
                <div className="skill-box">
                    <h4 className="skill-name">JavsScript</h4>
                    <div className="skill-bar">
                        <div style={{width: "90%"}} className="skill-percentage"></div>
                    </div>
                </div>

                <div className="skill-box">
                    <h4 className="skill-name">HTML</h4>
                    <div className="skill-bar">
                        <div style={{width: "80%"}} className="skill-percentage"></div>
                    </div>
                </div>

                <div className="skill-box">
                    <h4 className="skill-name">CSS</h4>
                    <div className="skill-bar">
                        <div style={{width: "70%"}} className="skill-percentage"></div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "40px"}}>
                <a href="#" className="primary-btn">See My Resume</a>
            </div>
        </>
    );
}

export default Resume;