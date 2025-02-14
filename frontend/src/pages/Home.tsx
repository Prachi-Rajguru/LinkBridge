import { FaUserPlus, FaBriefcase, FaComments } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="space-y-8 text-white bg-black">
      <section className="bg-gray-900 rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to LinkBridge</h1>
        <p className="text-xl text-gray-400">Connect, Learn, and Grow Professionally</p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <FaUserPlus className="text-4xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">Connect</h2>
          <p className="text-gray-400">Build your professional network with like-minded individuals</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <FaBriefcase className="text-4xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">Opportunities</h2>
          <p className="text-gray-400">Discover job opportunities and career growth paths</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <FaComments className="text-4xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">Engage</h2>
          <p className="text-gray-400">Share insights and participate in professional discussions</p>
        </div>
      </div>
    </div>
  );
}

export default Home;