import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none md:w-64 w-full">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto md:p-12 p-6">{children}</div>
    </div>
  );
}
