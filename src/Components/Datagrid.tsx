import { useEffect } from "react";
import { emojis } from "../Data/data.json";

interface DatagridProps {
  filterOptions: { activeCategory: string; searchTerm: string };
}

export function Datagrid({ filterOptions }: DatagridProps) {
  // console.log(
  //   "[FILTER OPTIONS]",
  //   filterOptions.activeCategory,
  //   filterOptions.searchTerm
  // );

  // console.log("[FILTER OPTIONS]", emojis);

  useEffect(() => {
    if (filterOptions.searchTerm != "") {
      console.log("[FILTER BY SEARCH TERM]");
      return;
    }

    if (filterOptions.activeCategory == "recents") {
      console.log("[BY STORAGE]");
      return;
    }

    console.log("[BY CATEGORY]");
  }, [filterOptions]);

  return (
    <div className="col-span-10 mt-4 h-[350px] bg-red-100 overflow-auto">
      <div
        id="datagrid"
        className=" bg-white grid grid-cols-10 text-white text-center items-center transition"
      >
        1
      </div>
    </div>
  );
}
