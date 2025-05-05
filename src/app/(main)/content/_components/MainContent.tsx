import ContentList from "./ContentList";
import ContentToggle from "./ContentToggle";

const MainContent = () => {
  return (
    <main className="flex flex-col gap-4">
      <ContentToggle />
      <ContentList />
    </main>
  );
};

export default MainContent;
