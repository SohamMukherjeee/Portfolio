function TechIcon({ icon: Icon, label }) {
  return (
    <div className="relative group inline-block text-3xl mx-2">
      <Icon className="cursor-pointer text-[#757A83]" />
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {label}
      </span>
    </div>
  );
}

export default TechIcon;
