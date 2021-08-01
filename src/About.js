function About() {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "inline-block"}}>
                    <img className="about-user-avatar" src={process.env.PUBLIC_URL + "/user.png"} alt="Me"></img>
                    <span style={{display: "block", textAlign: "center", marginTop: "12px", fontWeight: "bold"}}>Adeel Ahmed</span>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fermentum lectus. Praesent ornare diam lacus, ac interdum sem convallis nec. Vivamus vel nunc tincidunt, volutpat eros non, laoreet leo. Phasellus in nisi id nunc interdum imperdiet. Aliquam lacinia dictum blandit. In quis odio magna. Donec gravida purus eu quam suscipit porttitor eu non turpis. Ut ultrices non ante eu pharetra. Etiam mollis sapien velit, luctus accumsan purus luctus eu. Cras a mi nisi.</p>
                <p>Quisque at ullamcorper augue. Nunc consectetur pellentesque molestie. Ut sagittis felis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin in efficitur neque, eget dignissim lacus. Quisque lacus neque, iaculis eu nisl non, lacinia lacinia elit. Pellentesque in quam vel augue lobortis luctus eget eget ante. Duis et urna semper, pellentesque urna aliquet, rhoncus mauris. Maecenas vitae venenatis nisl, eget laoreet ipsum. Suspendisse id accumsan mauris. Integer lacinia, augue ut egestas accumsan, purus sapien maximus magna, vitae ullamcorper risus ante et nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero enim, sagittis in purus sit amet, interdum iaculis purus.</p>
            </div>
        </>
    );
}

export default About;