const ContactSection = () => {
  return (
    <section className="flex justify-center my-12 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Left Box - Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-bold text-[#233875] mb-2">Contact Info</h3>
          <p className="text-gray-700 text-lg">📍 123 Hope Street, Addis Ababa, Ethiopia</p>
          <p className="text-gray-700 text-lg">📞 +251 912 345 678</p>
          <p className="text-gray-700 text-lg">✉ info@hopeethiopia.org</p>
        </div>

        {/* Right Box - Message Us Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-[#233875] mb-2">Message Us</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffde59]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffde59]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffde59]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ffde59] text-[#233875] font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
