// eslint-disable-next-line react/prop-types
const SidebarItem = ({ label, href, icon: Icon, onClick }) => {
  return (
    <>
      <a
        className="flex items-center justify-center w-full py-2 space-x-4 transition duration-200 rounded-full cursor-pointer md:px-4 md:justify-start hover:bg-secondary"
        href={href}
        onClick={onClick}
      >
        <div className="text-lg">
          <Icon />
        </div>
        <div className="hidden text-sm md:flex">{label}</div>
      </a>
    </>
  );
};

export default SidebarItem;
