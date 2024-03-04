import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-[192px] h-dvh text-center bg-[#3B76EF] rounded-r-[8px]">
        <div className="text-gray-100 text-xl">
          <div className="p-2 flex items-center">
            <img
              src="/maternologo.png"
              alt="logo"
              className="w-[48px] h-[48px]"
            />
            <img className="ml-3" src="./maternotext.svg" alt="Materno" />
          </div>
        </div>

        <div className="p-2 h-[48px] flex items-center justify-between rounded-md px-2 cursor-pointer hover:bg-opacity-10 hover:bg-black text-white hover:border-b-[1px] hover:border-b-[#254A95]">
          <div className="flex items-center">
            <div className="w-[32px] h-[32px] bg-[#254A95] rounded-full"> </div>
            <span className="text-[12px] ml-2 text-gray-200 font-bold">
              Super Admin
            </span>
          </div>
          <div className="rounded-full w-[24px] h-[24px] bg-[#254A95] relative mr-1 grid place-content-center">
            <NotificationsActiveIcon
              style={{ fontSize: "16px" }}
              className="font-white font-[16px] "
            />
            <div className="rounded-full w-[20px] h-[20px] bg-[#ff0000] absolute bottom-[10px] left-[10px]  grid place-content-center font-semibold text-[12px]">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[192px] relative mb-5">{children}</div>
    </>
  );
}
