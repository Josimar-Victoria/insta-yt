import React from "react";
import MiniProfile from "../miniProfile/MiniProfile";
import Posts from "../posts/Posts";
import Stories from "../stories/Stories";
import Suggestions from "../suggestions/Suggestions";

export default function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      <section className="col-span-2">
        {/* historias */}
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
<div className="fixed top-10">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
