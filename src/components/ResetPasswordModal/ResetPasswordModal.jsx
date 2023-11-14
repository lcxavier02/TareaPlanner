import React, { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ResetPasswordModal({ showModal, closeModal, onSubmit, emailRef }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    if (showModal) {
      // eslint-disable-next-line react/prop-types
      emailRef.current.focus();
    }
  }, [showModal, emailRef]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
          <div className="bg-white p-8 rounded-md shadow-md z-10 w-96">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-700 hover:text-gray-900 text-3xl"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-lg font-semibold mb-4">
                Forgot your password?
              </h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="h-12 rounded-md px-4 border py-2 text-grey-darkest w-full"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-boardColor hover:bg-blue-800 text-white px-6 py-3 rounded-md w-full"
                >
                  Reset your password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ResetPasswordModal;
