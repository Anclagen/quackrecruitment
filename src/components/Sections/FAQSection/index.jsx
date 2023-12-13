import ExpandableSectionFAQ from "@/components/ExpandableSection/ExpandableSectionFAQ";

const FAQSection = ({ faqs = [], title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h2>
      <div className="mx-auto max-w-screen-lg">
        {faqs &&
          faqs.map((faq, index) => (
            <ExpandableSectionFAQ key={index} title={faq.question}>
              <p className="text-base leading-6 text-gray-700 mt-2">{faq.answer}</p>
            </ExpandableSectionFAQ>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;
