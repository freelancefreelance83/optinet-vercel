import dotNetwork from "@/assets/dot-network.png";

const DotNetworkIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img src={dotNetwork} alt="" className={`${className} opacity-60`} aria-hidden />
);

export default DotNetworkIcon;
