import { contentItemsMock } from "./mocks/contentItems";
import ContentItem from "./ContentItem";

const ContentList = () => {
  const previewItems = contentItemsMock.slice(0, 3);

  return (
    <div className="w-full flex flex-col gap-4">
      {previewItems.map(item => (
        <ContentItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContentList;
