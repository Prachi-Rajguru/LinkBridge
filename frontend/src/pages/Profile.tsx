import { FaEdit, FaGraduationCap, FaBriefcase, FaCamera } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative mb-8">
          <div className="h-32 bg-gradient-to-r from-primary to-accent rounded-t-lg"></div>
          <div className="absolute left-6 -bottom-6">
            <div className="relative group">
              <div className="w-24 h-24 bg-secondary rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                  <FaCamera className="text-white text-xl" />
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="absolute right-6 bottom-6">
            <button className="bg-accent hover:bg-dark text-white px-4 py-2 rounded-lg flex items-center">
              <FaEdit className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <p className="text-gray-600">Senior Software Engineer</p>
          <p className="text-accent">San Francisco, CA</p>
        </div>

        <div className="border-t mt-6 pt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaGraduationCap className="mr-2 text-dark" />
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold">Master's in Computer Science</h3>
              <p className="text-gray-600">Stanford University</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-dark" />
            Experience
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold">Senior Software Engineer</h3>
              <p className="text-gray-600">Tech Corp</p>
              <p className="text-sm text-gray-500">2020 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile