import chefIcon from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center gap-[11px] bg-[white] h-[108px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)] shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] ">
      <img src={chefIcon} alt="Robot chef icon" className="w-[43px]" />
      <h1 className="text-[2rem] font-[Inter] font-normal">Chef Claude</h1>
    </header>
  );
}
