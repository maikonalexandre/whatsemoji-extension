import { useEffect, useState } from "react";
import { emojis } from "../Data/data.json";
import { emogi } from "../@types";
import {
  buildEmoji,
  copyToClipboard,
  getInMemory,
  saveInMemory,
} from "../utils";
import { Check } from "phosphor-react";
import { toast } from "sonner";

interface DatagridProps {
  filterOptions: { activeCategory: string; searchTerm: string };
}

export function Datagrid({ filterOptions }: DatagridProps) {
  const [filteredEmojis, setFilteredEmojis] = useState<emogi[] | []>([]);

  const filterEmojisByCategory = () => {
    return emojis.filter((e) => {
      return (
        e.category.replace(/\s/g, "").toLowerCase() ===
        filterOptions.activeCategory
      );
    });
  };

  const filteredEmojisBySearchTerm = () => {
    return emojis.filter((e) => {
      return e.name.toLowerCase().includes(filterOptions.searchTerm.toLowerCase());
    });
  };

  useEffect(() => {
    if (filterOptions.searchTerm != "") {
      setFilteredEmojis(filteredEmojisBySearchTerm());
      return;
    }

    if (filterOptions.activeCategory == "recents") {
      setFilteredEmojis(getInMemory().reverse());

      return;
    }

    setFilteredEmojis(filterEmojisByCategory());
  }, [filterOptions]);

  return (
    <div className="col-span-10 mt-2 h-[350px] overflow-auto">
      <div
        id="datagrid"
        className=" grid grid-cols-10 text-white text-center items-center transition"
      >
        {filteredEmojis.map((e) => (
          <div className="p-2">
            <button
              onClick={() => {
                copyToClipboard(buildEmoji(e.code));
                toast("Copied to clipboard!", {
                  icon: <Check />,
                });
                saveInMemory(e);
              }}
              className="text-center p-1 text-lg hover:bg-slate-700 rounded-full"
            >
              {buildEmoji(e.code)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
