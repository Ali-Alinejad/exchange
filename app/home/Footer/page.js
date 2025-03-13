import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      className="bg-white   dark:bg-gradient-to-b from-gray-900 to-gray-950 border-t-2 border-gray-400"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <motion.div
          className="md:flex md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="/logos/logo-text-vertical.png" className="h-28 me-3" alt="Exchange Logo" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { title: "Products", links: ["Buy & Sell Crypto", "Digital Wallet", "Marketing"] },
              { title: "Support", links: ["Help Center", "Contact Us", "FAQs"] },
              { title: "Legal", links: ["Privacy Policy", "Terms & Conditions"] },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, i) => (
                    <li key={i} className="mb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.hr
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Copyright & Social Media */}
        <motion.div
          className="sm:flex sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <a href="#" className="hover:underline">Mojex Exchange </a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {[LuLinkedin, LuTwitter, LuGithub, LuInstagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
