export default function Main() {
  return (
    <main>
      <form className="flex flex-row justify-center items-center pt-[70px] pb-[48px] gap-[12px]">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          className="h-[38px] grow min-w-[200px] max-w-[399px] border-[#D1D5DB] border rounded-[6px] text-[0.875rem] pl-[13px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        />
        <button className="w-[183px] h-[38px] bg-black text-white font-[Inter] rounded-[6px] text-[0.875rem] flex items-center justify-center font-medium">
          + Add ingredient
        </button>
      </form>
    </main>
  );
}
