function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">

        <h2 className="text-2xl font-bold text-blue-400 mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-5">

          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Users
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Analytics
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Settings
          </li>

        </ul>

      </aside>


      {/* Main Content */}

      <main className="flex-1">

        {/* Top Navbar */}

        <header className="bg-white shadow p-5 flex justify-between">

          <h2 className="font-bold text-xl">
            Dashboard
          </h2>

          <div>
            🔔 Profile
          </div>

        </header>


        <div className="p-8">
          {children}
        </div>


      </main>

    </div>
  );
}

export default DashboardLayout;