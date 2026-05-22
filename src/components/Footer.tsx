export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center bg-[#F4F4F1] w-full text-[#1A1A1A]">
      <div className="flex flex-col md:flex-row gap-12 mb-6 md:mb-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 mb-1">Location</span>
          <span className="text-xs font-medium">成都 · 四川大学江安/望江校区</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 mb-1">Contact</span>
          <span className="text-xs font-medium">Official@scuca.org</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 mb-1">Copyright</span>
          <span className="text-xs font-medium">© {new Date().getFullYear()} CASCU. All Rights Reserved.</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors grid place-items-center text-xs font-bold cursor-pointer">BILI</div>
        <div className="w-10 h-10 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors grid place-items-center text-xs font-bold cursor-pointer">WX</div>
        <div className="w-10 h-10 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors grid place-items-center text-xs font-bold cursor-pointer">RED</div>
      </div>
    </footer>
  );
}
