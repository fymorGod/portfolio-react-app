export function Contact() {
    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST " action="https://getform.io/f/a1f79b05-2e98-4ed3-b55b-cbd23d93cba0" className="flex flex-col max-w-[600px] w-full">
                <div className="ppb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or shoot me an email -  fymor6@gmail.com</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"/>
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email"/>
                <textarea name="" className="bg-[#ccd6f6] p-2 " placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300">Let's Collaborate</button>
            </form>
        </div>
    );
}