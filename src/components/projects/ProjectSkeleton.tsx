import { motion } from "framer-motion";

export default function ProjectSkeleton() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse space-y-8 w-full max-w-4xl">
        <div className="h-96 bg-gray-200 rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
