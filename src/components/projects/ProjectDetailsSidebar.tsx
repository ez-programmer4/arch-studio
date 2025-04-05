import { motion } from "framer-motion";

interface ProjectDetailsSidebarProps {
  project: {
    details: Record<string, string | string[]>;
  };
}

export default function ProjectDetailsSidebar({
  project,
}: ProjectDetailsSidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:col-span-1"
    >
      <div className="bg-white rounded-2xl p-6 sticky top-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-amber-100/50 backdrop-blur-sm">
        {/* Header */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent pb-1">
          Project Details
        </h3>

        {/* Details List */}
        <div className="space-y-6">
          {Object.entries(project.details).map(([key, value]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="group relative p-4 rounded-lg hover:bg-amber-50/80 transition-all duration-300 ease-in-out hover:shadow-sm"
            >
              {/* Key */}
              <p className="text-xs font-medium text-amber-500 uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-amber-600">
                {key}
              </p>

              {/* Value */}
              <p className="text-gray-800 text-sm leading-relaxed">
                {Array.isArray(value) ? (
                  <ul className="list-none space-y-2">
                    {value.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 group-hover:text-amber-600 transition-colors duration-200"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-amber-400 rounded-full group-hover:bg-amber-500 transition-colors duration-200" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="block text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors duration-200">
                    {value}
                  </span>
                )}
              </p>

              {/* Subtle Hover Effect Line */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
