// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const FlagIcon = ({ src, tooltip }) => {
//   const [showTip, setShowTip] = useState(false);

//   return (
//     <div
//       className="relative inline-block w-10 h-10 cursor-pointer"
//       onMouseEnter={() => setShowTip(true)}
//       onMouseLeave={() => setShowTip(false)}
//       onFocus={() => setShowTip(true)}
//       onBlur={() => setShowTip(false)}
//       tabIndex={0}
//     >
//       <Image
//         src={src}
//         alt={tooltip}
//         width={100}
//         height={100}
//         className="rounded-full border-2 border-white shadow-md"
//       />

//       {showTip && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap"
//         >
//           {tooltip}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default FlagIcon;










//new

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FlagIcon = ({ src, tooltip }) => {
  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className="relative inline-block w-12 h-12 cursor-pointer"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
      tabIndex={0}
    >
      <Image
        src={src}
        alt={tooltip}
        width={48}
        height={48}
        className="rounded-full border-2 border-white shadow-lg"
      />

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#333] text-white text-sm rounded-lg whitespace-nowrap shadow-lg"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlagIcon;
