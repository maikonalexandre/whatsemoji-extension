import { X } from "phosphor-react";

export function SearchBar({
  fn,
  value,
}: {
  fn: (text: string) => void;
  value: string;
}) {
  console.log(value != "");

  function xeee(e: string) {
    fn(e);
  }
  return (
    <div className="col-span-10 relative">
      <input
        value={value}
        onChange={(e) => xeee(e.target.value)}
        type="text"
        className="w-full rounded-md border text-neutral-400 border-input bg-input px-2 py-1 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
        placeholder="pesquisar"
      />

      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          onClick={() => xeee("")}
          id="clear"
          data-visible={value != ""}
          type="button"
          className="focus:outline-none hover:text-stone-500 invisible data-[visible=true]:visible"
        >
          <X />
        </button>
      </div>
    </div>
  );
}
