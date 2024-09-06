import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const LinksVisit = () => {
  const onCopy = () => {
    navigator.clipboard.writeText(`+918089869111`);
    toast.success("Phone number copied");
  };

  return (
    <div className="self-end border border-cyan-900 items-center w-40 p-5 rounded-md flex justify-between">
      <motion.div
        className="cursor-pointer"
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        onClick={() => {
          window.location.href =
            "https://www.facebook.com/profile.php?id=61556661787474&mibextid=kFxxJD";
        }}
      >
        <SiGmail />
      </motion.div>

      <motion.div
        className="cursor-pointer"
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        onClick={() => {
          window.location.href =
            "https://www.facebook.com/profile.php?id=61556661787474&mibextid=kFxxJD";
        }}
      >
        <FaFacebook />
      </motion.div>

      <motion.div
        className="cursor-pointer"
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
      >
        <FaPhoneAlt onClick={onCopy} className="cursor-pointer" />
      </motion.div>
    </div>
  );
};

export default LinksVisit;
