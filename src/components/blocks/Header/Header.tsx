export default function Header() {
  return (
    <div className=" sticky top-0 mb-[14px] border-b-[1px] h-[56px] border-b-[#919EAB] border-opacity-15 bg-white flex items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.44 25.3333C18.0365 25.3347 17.6542 25.1533 17.4 24.84L10.96 16.84C10.5556 16.348 10.5556 15.6387 10.96 15.1467L17.6267 7.14668C18.0979 6.57967 18.9396 6.50206 19.5067 6.97334C20.0737 7.44463 20.1513 8.28633 19.68 8.85334L13.72 16L19.48 23.1467C19.8129 23.5463 19.8831 24.1031 19.6597 24.5728C19.4363 25.0425 18.9601 25.3394 18.44 25.3333Z"
          fill="#253A64"
        />
      </svg>

      <h6 className="text-[18px] leading-relaxed font-bold">Add Lab</h6>
    </div>
  );
}
