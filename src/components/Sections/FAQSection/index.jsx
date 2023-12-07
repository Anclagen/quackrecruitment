const FAQSection = ({ faqs = [], title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h2>
      <ul className="flex flex-wrap items-start">
        {faqs &&
          faqs.map((faq, index) => (
            <li key={index} className="w-1/2 p-8">
              <p className="text-lg font-medium leading-6 text-gray-900">{faq.question}</p>
              <p className="text-base leading-6 text-gray-700 mt-2">{faq.answer}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FAQSection;
