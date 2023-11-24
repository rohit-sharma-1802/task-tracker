import React from "react";

const HelpAndSupport = () => {
  return (
    <div>
      <div>
        <div className="flex items-center py-4">
          <h4 className="text-3xl font-bold text-gray-600">Help & Support</h4>
        </div>
        <section className="bg-white rounded-2xl">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
            <h5 className="text-xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h5>
            <div className="mb-6">
              <h6 className="text-lg font-semibold mb-2 text-gray-700">
                How do I create a new task?
              </h6>
              <p className="text-gray-600">
                To create a new task, log in to your account, navigate to the
                dashboard, and click on the "New Task" button. Fill in the
                required details, such as task name, description, and category.
                Click "Save" to add the task to your list.
              </p>
            </div>
            <div className="mb-6">
              <h6 className="text-lg font-semibold mb-2 text-gray-700">
                Can I add categories to organize my tasks?
              </h6>
              <p className="text-gray-600">
                Absolutely! To add a new category, go to the "Categories"
                section in the dashboard. Click on the "Add Category" button,
                enter the category name, and save it. You can then assign tasks
                to specific categories for better organization.
              </p>
            </div>
            <div className="mb-6">
              <h6 className="text-lg font-semibold mb-2 text-gray-700">
                I forgot my password. How can I reset it?
              </h6>
              <p className="text-gray-600">
                If you've forgotten your password, click on the "Forgot
                Password" link on the login page. Follow the instructions sent
                to your registered email address to reset your password.
              </p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpAndSupport;
