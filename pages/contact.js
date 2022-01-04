import { useState } from "react";

export default function Contact() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const [wrongEmail, setWrongEmail] = useState(false);

    const checkEmail = (email) => {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(email);
    }

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length === 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length === 0 && email.checkEmail(email)) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length === 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm && checkEmail(email)) {
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setFullname("");
            setEmail("");
            setMessage("");
        } else if (!checkEmail(email)) {
            setWrongEmail(true);
            setShowSuccessMessage(false);
            setShowFailureMessage(false);
        } else {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
        console.log(fullname, email, message);
    };
    return (
        <div>
            <div className="p-8 justify-center items-center h-96 flex flex-col mt-60">
                <form className="flex flex-col md:w-96">
                    <h1 className="text-center text-red-400 text-xl mb-3">Send Us A Message</h1>

                    {/* FULLNAME INPUT */}
                    <label htmlFor="fullname" className="text-red-400 mt-3">Full Name <span>*</span></label>
                    <input
                        name="fullname"
                        className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                        type="text"
                        placeholder="Enter your full Name"
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                    />

                    {/* EMAIL INPUT */}
                    <label htmlFor="email" className="text-red-400 mt-3">E-mail <span>*</span></label>
                    <input
                        name="email"
                        className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />


                    {/* MESSAGE INPUT */}
                    <label htmlFor="message" className="text-red-400 mt-3">Message <span>*</span></label>
                    <textarea
                        name="message"
                        className="form-control bg-gray-200 shadow-inner rounded p-2 border resize-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    ></textarea>


                    <button className="bg-red-400 hover:bg-red-600 duration-300 text-white shadow p-2 rounded-r mt-4" type="submit" onClick={handleSubmit}>{buttonText}</button>

                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 text-lg font-semibold my-2">
                                Thankyou! Your Message has been send.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-500 text-lg">
                                Oops! Something went wrong, please try again.
                            </p>
                        )}
                        {
                            wrongEmail && (
                                <p className="text-red-500 text-lg">
                                    Oops! Enter a Valid Email please.
                                </p>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
