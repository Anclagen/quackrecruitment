import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Check Out Our Other Services</h2>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
          <h3 className="mt-4 text-xl font-semibold leading-6">On-Site Managed Services Recruitment</h3>
          <p className="mt-4 text-lg leading-6 flex-grow">
            Transform your recruitment process with our On-Site Managed Services. Benefit from dedicated teams that integrate seamlessly with your HR department, offering scalable and cost-efficient
            staffing solutions. We specialize in tailoring recruitment strategies for continuous improvement and operational effectiveness, ensuring your workforce needs are met with precision and
            agility.
          </p>
          <Link
            prefetch={false}
            href="/recruitment/on-site-managed"
            className="mt-6 py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
          >
            Learn More
          </Link>
        </div>
        <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
          <h3 className="mt-4 text-xl font-semibold leading-6">Temporary Recruitment Services</h3>
          <p className="mt-4 text-lg leading-6 flex-grow">
            {`Elevate your workforce with Quack Recruitment & Training's Temporary Recruitment Services. Experience unparalleled flexibility with our customized staffing solutions, tailored to meet project demands and adapt to workload fluctuations. Benefit from swift placements, industry-specific expertise, and cost-effective workforce management, ensuring efficiency and quality in every hire.`}
          </p>
          <Link
            prefetch={false}
            href="/recruitment/temporary"
            className="py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-6"
          >
            Learn More
          </Link>
        </div>
        <div className="md:w-1/2 xl:w-1/3 p-6  flex flex-col">
          <h3 className="mt-4 text-xl font-semibold leading-6">Permanent Recruitment</h3>
          <p className="mt-4 text-lg leading-6 flex-grow">
            {
              "Quack Recruitment & Training specializes in strategic permanent hiring. Our comprehensive candidate vetting and tailored recruitment strategies align with your company's culture and values, ensuring a perfect fit. Leverage our deep industry knowledge for high-quality, long-term placements, backed by our commitment to excellence and placement guarantees."
            }
          </p>
          <Link
            prefetch={false}
            href="/recruitment/permanent"
            className="py-2 px-4 block bg-quackred-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-6"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurServices;
