export function SearchBar() {
  return (
    <div className="col-span-10 relative">
      <input
        type="text"
        className="w-full rounded-md border text-neutral-400 border-input bg-input px-2 py-1 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
        placeholder="pesquisar"
      />

      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          id="clear"
          data-visible="false"
          type="button"
          className="focus:outline-none invisible data-[visible=true]:visible"
        >
          <i className="ph ph-x"></i>
        </button>
      </div>
    </div>
  );
}