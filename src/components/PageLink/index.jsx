import Link from "next/link";

const PageLink = ({ label, href, arrow = false, color = "quackred" }) => {
  const bgClass = `bg-${color}-800 hover:bg-${color}-600`;
  const hoverClass = color === "quackred" ? "hover:bg-quackred-600" : "hover:bg-othercolor-200"; // Add other conditions as needed

  return (
    <Link
      prefetch={false}
      href={href}
      className={`py-4 px-6 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto ${bgClass} ${hoverClass} text-white font-semibold rounded w-fit flex`}
    >
      {label}
      {arrow && (
        <span className="w-6 h-6 rounded-full ps-3">
          <span className="material-symbols-outlined">arrow_circle_right</span>
        </span>
      )}
    </Link>
  );
};

export default PageLink;
