import { useState } from 'react';
import { FaBookmark, FaSearch, FaFilter } from 'react-icons/fa';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  posted: string;
}

const Jobs = () => {
  const [jobs] = useState<Job[]>([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹15L - ₹25L per annum",
      description: "We're looking for an experienced Frontend Developer with strong React skills...",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Remote",
      type: "Full-time",
      salary: "₹18L - ₹30L per annum",
      description: "Seeking a Product Manager to lead our core product development...",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Cloud Systems",
      location: "Hyderabad, India",
      type: "Contract",
      salary: "₹12L - ₹20L per annum",
      description: "Join our backend team to build scalable cloud solutions...",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "Creative Studio",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹10L - ₹18L per annum",
      description: "We need a talented UX/UI Designer to enhance user experiences...",
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹20L - ₹35L per annum",
      description: "Looking for a data scientist to work on machine learning models...",
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudOps Pvt Ltd",
      location: "Chennai, India",
      type: "Full-time",
      salary: "₹14L - ₹22L per annum",
      description: "Hiring a DevOps Engineer to manage our cloud infrastructure...",
      posted: "4 days ago"
    },
    {
      id: 7,
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹16L - ₹28L per annum",
      description: "Looking for a Cybersecurity Analyst to strengthen our security measures...",
      posted: "2 weeks ago"
    },
    {
      id: 8,
      title: "Marketing Manager",
      company: "BrandBoost",
      location: "Kolkata, India",
      type: "Full-time",
      salary: "₹12L - ₹20L per annum",
      description: "Seeking an experienced Marketing Manager for brand strategy and execution...",
      posted: "3 days ago"
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto text-white bg-black p-6">
      {/* Search and Filters */}
      <div className="bg-gray-900 rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg bg-gray-800 text-white hover:bg-gray-700">
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">{job.title}</h2>
                <p className="text-gray-400">{job.company}</p>
                <p className="text-gray-500">{job.location} • {job.type}</p>
                <p className="text-gray-300 font-semibold mt-2">{job.salary}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-200">
                <FaBookmark className="text-xl" />
              </button>
            </div>
            <p className="text-gray-400 mt-4">{job.description}</p>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
              <span className="text-sm text-gray-500">Posted {job.posted}</span>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
