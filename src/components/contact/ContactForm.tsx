"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form schema validation with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Here you would typically make an API call
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   body: JSON.stringify(data),
        //   headers: { 'Content-Type': 'application/json' },
        // });

        setSubmitStatus("success");
        reset();
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset]
  );

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="contact-form"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Share your project details and we'll respond within 24 hours
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-amber-500">*</span>
                </label>
                <motion.input
                  {...register("name")}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50/50 transition-all duration-300"
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-amber-500">*</span>
                </label>
                <motion.input
                  {...register("email")}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50/50 transition-all duration-300"
                  placeholder="your@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <motion.input
                {...register("phone")}
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50/50 transition-all duration-300"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Type <span className="text-amber-500">*</span>
              </label>
              <motion.select
                {...register("projectType")}
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50/50 transition-all duration-300 appearance-none"
                aria-invalid={errors.projectType ? "true" : "false"}
              >
                <option value="">Select a project type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="interior">Interior Design</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </motion.select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-amber-500">*</span>
              </label>
              <motion.textarea
                {...register("message")}
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50/50 transition-all duration-300 resize-y"
                rows={5}
                placeholder="Tell us about your project..."
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:from-amber-600 hover:to-amber-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>

            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-start gap-3"
                >
                  <svg
                    className="h-5 w-5 mt-0.5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Success!</h4>
                    <p className="text-sm">
                      Your message has been sent. We'll reply soon!
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-start gap-3"
                >
                  <svg
                    className="h-5 w-5 mt-0.5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Oops!</h4>
                    <p className="text-sm">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
