import Link from "next/link";

const PageLink = ({ label, href, arrow = false, color = "quackred" }) => {
  return (
    <Link
      href={href}
      className={`py-4 px-6 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-auto bg-${color}-800 hover:bg-${color}-600 hover:text-white text-white py-2 px-5 font-semibold rounded w-fit flex`}
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
