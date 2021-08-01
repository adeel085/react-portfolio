import { useState } from "react";

function Contact() {

    const [formMsg, setFormMsg] = useState("");

    const onClickSend = () => {
        document.querySelectorAll("form input, form textarea").forEach((element, index) => {
            element.value = "";
        });
        setFormMsg("");
    };

    const handleEmailKeyUp = (e) => {
        let email = e.target.value;
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            setFormMsg("Email address is not valid!");
        }
        else {
            setFormMsg("");
        }
    }

    const onLoseFocus = (e) => {
        let value = e.target.value;
        let field = e.target.getAttribute("data-field");
        if (value === "") {
            setFormMsg(field + " can not be empty!");
        }
    }

    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <div>
                    <h2 className="page-title text-center">Get in Touch with Me</h2>

                    <form className="contact-form">
                        <label>Name</label>
                        <input type="text" onBlur={onLoseFocus} data-field="Name" />

                        <label>Email</label>
                        <input type="email" onKeyUp={handleEmailKeyUp} onBlur={onLoseFocus} data-field="Email" />

                        <label>Message</label>
                        <textarea onBlur={onLoseFocus} data-field="Message"></textarea>

                        <div style={{overflow: "hidden"}}>
                            <button style={{float: "right"}} className="primary-btn" type="button" onClick={onClickSend}><i className="fa fa-send"></i>&nbsp;&nbsp;Send</button>
                        </div>

                        <span className="form-msg" style={{textAlign: "center"}}>{formMsg}</span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;