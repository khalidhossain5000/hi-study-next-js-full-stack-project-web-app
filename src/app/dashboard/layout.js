import DashboardBanner from "@/components/Dashboard/layout/DashboardBanner/DashboardBanner";
import Sidebar from "@/components/Dashboard/layout/DashboardSIdebar/Sidebar";

export const metadata = {
  title: "Dashboard Page",
  description: "This is the dashboard layout",
};
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <DashboardBanner />
      </div>
      {/* route layout here */}
      <div className="hidden lg:flex container mx-auto pt-6 gap-6 justify-center ">
        <div className=" flex-1 h-full ">
          <Sidebar />
        </div>
        <main className=" flex-3 h-full">{children}</main>
      </div>
    </div>
  );
}
