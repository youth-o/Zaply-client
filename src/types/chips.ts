type ChipsProps = {
  type?: "default" | "like" | "follow";
  month: number;
  counts: {
    default: number;
    like: number;
    follow: number;
  };
};
