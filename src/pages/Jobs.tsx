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
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "We're looking for an experienced Frontend Developer with strong React skills...",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Seeking a Product Manager to lead our core product development...",
      posted: "1 week ago"
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-dark">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500">{job.location} • {job.type}</p>
                <p className="text-accent font-semibold mt-2">{job.salary}</p>
              </div>
              <button className="text-gray-400 hover:text-accent">
                <FaBookmark className="text-xl" />
              </button>
            </div>
            <p className="text-gray-600 mt-4">{job.description}</p>
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <span className="text-sm text-gray-500">Posted {job.posted}</span>
              <button className="bg-accent hover:bg-dark text-white px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs