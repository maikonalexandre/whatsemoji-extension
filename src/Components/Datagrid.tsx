import { useEffect, useState } from "react";
import { emojis } from "../Data/data.json";
import { emogi } from "../@types";
import { buildEmoji } from "../utils";

interface DatagridProps {
  filterOptions: { activeCategory: string; searchTerm: string };
}

export function Datagrid({ filterOptions }: DatagridProps) {
  const [filteredEmojis, setFilteredEmojis] = useState<emogi[] | []>([]);

  console.log("[FILTERD]", filteredEmojis);

  // console.log(
  //   "[FILTER OPTIONS]",
  //   filterOptions.activeCategory,
  //   filterOptions.searchTerm
  // );

  // console.log("[FILTER OPTIONS]", emojis);

  const filterEmojisByCategory = () => {
    return emojis.filter((e) => {
      return (
        e.category.replace(/\s/g, "").toLowerCase() ===
        filterOptions.activeCategory
      );
    });
  };

  useEffect(() => {
    if (filterOptions.searchTerm != "") {
      console.log("[FILTER BY SEARCH TERM]");
      // setFilteredEmojis(1);
      return;
    }

    if (filterOptions.activeCategory == "recents") {
      console.log("[BY STORAGE]");
      // setFilteredEmojis(2);

      return;
    }
    const fill = filterEmojisByCategory();

    setFilteredEmojis(fill);
  }, [filterOptions]);

  return (
    <div className="col-span-10 mt-4 h-[350px] overflow-auto">
      <div
        id="datagrid"
        className=" grid grid-cols-10 text-white text-center items-center transition"
      >
        {filteredEmojis.map((e) => (
          <div className="p-2">
            <button className="text-center p-1 text-lg hover:bg-slate-700 rounded-full">
              {buildEmoji(e.code)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
