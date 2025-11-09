import DashboardBanner from "@/components/Dashboard/layout/DashboardBanner/DashboardBanner";
import Sidebar from "@/components/Dashboard/layout/DashboardSIdebar/Sidebar";

export const metadata = {
  title: "Dashboard Page",
  description: "This is the dashboard layout",
};
export default function DashboardLayout({children}){
    return(
        <div>
            <div>
<DashboardBanner/>
            </div>
            {/* route layout here */}
            <div className="hidden lg:flex items-center container mx-auto pt-6 gap-6">
                <aside>
                <Sidebar/>
            </aside>
            <main>
                {children}
            </main>
            </div>
        </div>
    )
}