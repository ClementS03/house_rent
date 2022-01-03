export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Votre message à été envoyé");
    }
    return (
        <div>
            <div className="p-8 justify-center items-center h-96 flex flex-col mt-60">
                <form action="" className="flex flex-col md:w-96">
                    <h1 className="text-center text-red-400 text-xl mb-3">Send Us A Message</h1>

                    <label htmlFor="fullname">Full Name <span>*</span></label>
                    <input name="fullname" className="bg-gray-200 shadow-inner rounded p-2 flex-1" type="text" placeholder="Enter your full Name" />

                    <label htmlFor="email">E-mail <span>*</span></label>
                    <input name="email" className="bg-gray-200 shadow-inner rounded p-2 flex-1" id="email" type="email" placeholder="Enter your email address" />

                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea
                        name="message"
                        class="form-control bg-gray-200 shadow-inner rounded p-2 border resize-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                    ></textarea>
                    <button className="bg-red-400 hover:bg-red-600 duration-300 text-white shadow p-2 rounded-r mt-4" type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}
