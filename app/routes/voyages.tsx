import { Outlet } from "@remix-run/react";

export default function voyages() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white"></header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50"></div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
