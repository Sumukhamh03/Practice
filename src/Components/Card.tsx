import ReactMarkdown from "react-markdown";

interface ICard {
  id:number
  username:string 
  title:string
  content:string
}

export default function Card({  username, title, content,id }:ICard) {
    return (
      <article key={id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-700/50">
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors line-clamp-2">
            {title}
          </h2>
          
          {/* Author */}
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-400">
              By <span className="font-medium text-blue-300">{username}</span>
            </span>
          </div>
  
          {/* Content */}
          <ReactMarkdown>{content}</ReactMarkdown>
  
          {/* Read More Link */}
          
        </div>
      </article>
    );
  }