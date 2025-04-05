import Link from "next/link";
import { motion } from "framer-motion";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center"
    >
      <p className="text-red-600 text-lg mb-6">{message}</p>
      <Link
        href="/projects"
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Back to Projects
      </Link>
    </motion.div>
  );
}
