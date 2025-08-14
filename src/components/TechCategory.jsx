function TechCategory({ title, items }) {
  return (
    <div className="w-full sm:w-[500px] p-5 m-4 transition">
      <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2 text-white">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-2 bg-[#0f0f0f] p-3 shadow-md border border-white/10 text-white text-sm font-medium hover:cursor-pointer hover:bg-[#26262B] rounded-md"
          >
            <item.icon size={20} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
export default TechCategory;
