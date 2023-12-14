import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "Quack Recruitment, your local recruitment specialist.",
};

const NoPage = () => {
  return (
    <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800 grow">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h1 className="mb-8 font-extrabold text-9xl text-gray-400">
            <span className="sr-only">Error</span>404
          </h1>
          <p className="text-2xl font-semibold md:text-3xl">{"Sorry, we couldn't find this page."}</p>
          <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
          <Link prefetch={false} rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-quackred-600 text-gray-50">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
