import { Sidebar } from "@/src/admin-component/sidebar";
import { AdminHeader } from "@/src/admin-component/header";
import { FaRegClipboard } from "react-icons/fa";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-screen">
      <AdminHeader />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex w-[86%] h-full bg-slate-100 ">
          <div className="flex flex-col w-[50%] p-[1%] gap-[2%]">
            <div className="flex flex-col w-[100%] h-[20%] bg-white rounded-[20px] p-[3%]">
              <div className=" text-[24px]">$ Орлого</div>
              <div className="text-[52px] font-semibold">235,000 ₮</div>
              <div className="text-[18px] text-gray-500">Өнөөдөр</div>
            </div>
            <div className="w-[100%] h-[80%] bg-white rounded-[20px]"></div>
          </div>
          <div className="flex flex-col items-center w-[50%] gap-[6%] mt-[10%]">
            <div className="w-[80%] h-[20%] bg-white rounded-[20px]">
              <div>
                <FaRegClipboard />
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="w-[80%] h-[50%] bg-white rounded-[20px]"></div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
