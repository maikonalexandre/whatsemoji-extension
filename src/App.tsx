// import { useState } from "react";
import {
  User,
  Smiley,
  Clock,
  Dog,
  SoccerBall,
  Coffee,
  CarSimple,
  LinkSimple,
  Hash,
  Flag,
} from "phosphor-react";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { Datagrid } from "./Components/Datagrid";

function App() {
  const [activeCategory, setActiveCategory] = useState("recents");

  const headerButtons = [
    { Element: Clock, category: "recents" },
    { Element: Smiley, category: "smileys&emotion" },
    { Element: User, category: "people&body" },
    { Element: Dog, category: "animals&nature" },
    { Element: SoccerBall, category: "activities" },
    { Element: Coffee, category: "food&drink" },
    { Element: CarSimple, category: "travel&places" },
    { Element: LinkSimple, category: "objects" },
    { Element: Hash, category: "symbols" },
    { Element: Flag, category: "flags" },
  ];

  return (
    <div className="w-full h-full bg-container">
      <div className="bg-background px-4 h-full">
        <div className="grid grid-cols-10 pt-1 text-center text-white items-center gap-x-2">
          {headerButtons.map(({ Element, category }) => (
            <div className="flex py-2" key={category}>
              <div
                onClick={() => {
                  setActiveCategory(category);
                }}
                data-selected={activeCategory == category}
                className="p-1 cursor-pointer rounded-xl data-[selected=true]:bg-slate-700 transition hover:bg-slate-700"
              >
                <Element size={20} />
              </div>
            </div>
          ))}

          <SearchBar />
          <Datagrid />
        </div>
      </div>
    </div>
  );
}

export default App;
