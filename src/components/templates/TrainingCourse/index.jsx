import PageLink from "@/components/PageLink";

const TrainingCourse = ({ course }) => {
  return (
    <div className="lg:flex col p-10 xl:px-10 mx-auto ">
      <div className="lg:w-2/3 ps-5 lg:pe-20 xl:pe-32">
        <h2 className="text-4xl font-bold text-center mb-10">{course.title}</h2>
        <div>
          {course &&
            course.openingMessages.map((message, index) => (
              <p className="text-lg font-semibold leading-6 text-gray-900 mb-6" key={index}>
                {message}
              </p>
            ))}
          <PageLink label={"Enquire Now"} href={"/training/enquiry"} />
        </div>
        <h3 className="text-4xl font-bold mb-6 mt-10">What You Learn</h3>
        <div>
          {course &&
            course.whatYouLearn.map(({ title, points }, index) => (
              <div key={index}>
                <h4 className="text-2xl font-bold">{title}</h4>
                <ul className="mb-6 mt-3 ms-6">
                  {points.map((point, index) => (
                    <li className=" font-bold list-disc" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <h3 className="text-4xl font-bold mb-10">Why Choose Us</h3>
        <div>
          {course &&
            course.whyChoose.map(({ title, description }, index) => (
              <div key={index}>
                <h4 className="text-2xl font-bold">{title}</h4>
                <p className="mb-6 mt-3">{description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="lg:w-1/3 bg-quackred-50 mt-10 lg:mt-16 p-5 xl:p-10 rounded-xl h-fit shadow-xl">
        <h3 className="text-4xl font-bold text-center mb-6">Course Information</h3>
        <p className="mb-3  text-lg">
          <b>Course duration: </b>
          {course.timeToComplete}
        </p>
        <p className="mb-3  text-lg">
          <b>Course Locations:</b> {course.locations.join(", ")}
        </p>
        <p className="mb-1  text-lg">
          <b>Course Cost:</b> {course.price}
        </p>
        <p className="text-lg lg:mb-10"> {course.priceInfo}</p>
        <div className="hidden lg:block">
          <PageLink label={"Enquire Now"} href={"/training/enquiry"} />
        </div>
      </div>
    </div>
  );
};

export default TrainingCourse;
