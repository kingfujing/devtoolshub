export default function AdSlot({ className = "" }: { className?: string }) {
  // Replace with your AdSense unit code before going live
  return (
    <div className={`ad-container ${className}`}>
      <span className="text-xs text-[#475569]">— Ad Space —</span>
    </div>
  );
}
