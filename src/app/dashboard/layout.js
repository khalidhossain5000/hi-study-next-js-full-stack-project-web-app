import DashboardBanner from "@/components/Dashboard/DashboardBanner/DashboardBanner";
import Sidebar from "@/components/Dashboard/DashboardSIdebar/Sidebar";
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
            <div>
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