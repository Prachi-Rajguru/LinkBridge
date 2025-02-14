import { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare} from 'react-icons/fa';

interface Post {
  id: number;
  author: {
    name: string;
    title: string;
    avatar: string;
    profileImage?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Feed = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: {
        name: "John Doe",
        title: "Senior Software Engineer at Tech Corp",
        avatar: "JD",
        profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
      },
      content: "Excited to share that I've just completed the Advanced React Patterns course on LinkBridge! The knowledge gained is invaluable. #Learning #React #WebDevelopment",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      likes: 42,
      comments: 8,
      timestamp: "2h ago"
    },
    {
      id: 2,
      author: {
        name: "Jane Smith",
        title: "Product Manager",
        avatar: "JS",
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      },
      content: "Looking for talented frontend developers to join our team. Great opportunity to work on cutting-edge projects! #Hiring #WebDevelopment",
      likes: 28,
      comments: 15,
      timestamp: "4h ago"
    },
    {
      id: 3,
      author: {
        name: "Alice Johnson",
        title: "UX Designer at Creative Studio",
        avatar: "AJ",
        profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
      },
      content: "Just wrapped up an exciting usability study. Amazing insights into how users interact with digital interfaces! #UXDesign #Research",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800&h=400&fit=crop",
      likes: 34,
      comments: 12,
      timestamp: "6h ago"
    },
    {
      id: 4,
      author: {
        name: "Michael Lee",
        title: "Data Scientist at Analytics Hub",
        avatar: "ML",
        profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop"
      },
      content: "Data-driven decisions are the future. Excited to explore deep learning techniques! #AI #MachineLearning #DataScience",
      likes: 50,
      comments: 20,
      timestamp: "1d ago"
    }
  ]);

  return (
    <div className="max-w-2xl mx-auto space-y-6 text-white bg-black">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-900 rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
              {post.author.profileImage ? (
                <img src={post.author.profileImage} alt={post.author.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold">{post.author.avatar}</span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-white">{post.author.name}</h3>
              <p className="text-sm text-gray-400">{post.author.title}</p>
              <p className="text-xs text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{post.content}</p>
          {post.image && (
            <div className="mb-4">
              <img src={post.image} alt="Post content" className="w-full rounded-lg" />
            </div>
          )}
          <div className="flex items-center space-x-6 text-gray-400 border-t border-gray-700 pt-4">
            <button className="flex items-center space-x-2 hover:text-white">
              <FaThumbsUp />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <FaComment />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
