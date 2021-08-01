function Portfolio() {
    return (
        <>
            <div>
                <h2 className="page-title">My Projects</h2>
                <div className="grid-container">
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/my-tech-blog.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://thetechblog2.herokuapp.com/" target="_blank">The Tech Blog</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/TechBlog" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/online-marketing.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://volchenok89.github.io/MyQuizzer/" target="_blank">Quizzer</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/MyQuizzer" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/password-generator.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://volchenok89.github.io/HoriseonOnlineMarketingServices/" target="_blank">Horiseon Marketing</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/HoriseonOnlineMarketingServices" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>  
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/quizzer.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://volchenok89.github.io/MyRandomPasswordGenerator/" target="_blank">Password Generator</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/MyRandomPasswordGenerator" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/scheduler.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://volchenok89.github.io/MilitaryHourScheduler/" target="_blank">Military Scheduler</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/MilitaryHourScheduler" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/projects/weather.PNG')`}}>
                        <div className="overlay">
                            <div className="text-center">
                                <a href="https://volchenok89.github.io/WeatherCast/" target="_blank">WeatherCast</a>
                                <br/>
                                <a href="https://github.com/Volchenok89/WeatherCast" target="_blank">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;