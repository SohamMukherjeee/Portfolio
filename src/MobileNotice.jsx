import { useEffect, useState } from "react";

function MobileNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2  bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10  rounded-lg  z-50 max-w-sm text-center">
      <p className="text-sm font-medium">
        This website is best viewed on a desktop for full experience.
      </p>
      <button
        className="mt-2 text-xs underline text-orange-400 "
        onClick={() => setShow(false)}
      >
        Dismiss
      </button>
    </div>
  );
}

export default MobileNotice;
