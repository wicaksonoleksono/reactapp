import React from 'react';

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    window.location.reload();

  };

  return (
    <button onClick={handleLogout} className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
      Logout
    </button>
  );
};

export default LogoutButton;
