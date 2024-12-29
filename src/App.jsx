const App = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Rectangle-1.png')" }}
    >
      {/* Sol Üst Daire */}
      <img
        src="/images/Ellipse-1.svg"
        alt="Ellipse"
        className="absolute top-20 left-80 w-64 h-64 opacity-75"
      />

      {/* Login Kartı */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg opacity-90 rounded-xl shadow-lg p-8 w-1/3 space-y-6">
          <h1 className="text-4xl font-semibold text-white text-center tracking-widest">
            LOGIN
          </h1>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full p-3 bg-white bg-opacity-30 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 bg-white bg-opacity-30 text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </form>
          {/* Button ve Forgot Password ve Register */}
          <div className="flex justify-between pb-10 text-sm text-gray-300">
            <button
              type="submit"
              id="submit"
              className="w-1/2 py-2 bg-black bg-opacity-50 text-white font-bold text-xl rounded-lg hover:bg-opacity-70 transition"
            >
              LOGIN
            </button>
            <div className="flex flex-col justify-between space-y-2 text-gray-200 text-right">
              <a href="#" className="hover:underline">
                Forgot password
              </a>
              <a href="#" className="hover:underline">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
