import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/style";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? 0 : tab);
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* Single FAQ */}
        {faqData.map((item, index) => (
          <div className="border-b border-gray-200 pb-4" key={index}>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(index + 1)}
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>
              {activeTab === index + 1 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === index + 1 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at seifeddine.mechergui.tech@gmail.com with your order number and a brief explanation of why you're returning the item.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team by emailing us at seifeddine.mechergui.tech@gmail.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only offer shipping within the United States.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal payment methods. Also, we have a cash on delivery system.",
  },
];

export default FAQPage;
