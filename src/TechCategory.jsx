function TechCategory({ title, items }) {
  return (
    <div className="w-full sm:w-[500px]  p-5 m-4 transition ">
      <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2 text-white">
        {items.map((item, idx) => (
          <span
            key={idx}
            className=" bg-[#18181B] text-white px-3 py-1  text-sm font-medium hover:cursor-pointer hover:bg-[#26262B]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechCategory;
