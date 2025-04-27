import { Container } from "@/components";
import {
  ChevronIcon,
  ArrowIcon,
  RefreshIcon,
  DownLoadIcon,
  UpLoadIcon,
  SwapIcon,
  HamburgerIcon,
  ListIcon,
  EllipsisIcon,
  EditIcon,
  ChartIcon,
  ChatDotIcon,
  UserIcon,
  ActivityIcon,
  EmailIcon,
  PasswordIcon,
  HeartIcon,
  SettingsIcon,
  BellIcon,
  TrashIcon,
  DeleteIcon,
  StickerIcon,
  ImageIcon,
  LinkIcon,
  ShareIcon,
  LikeIcon,
  HateIcon,
  StarIcon,
  FlagIcon,
  SearchIcon,
  CameraIcon,
  LightHubIcon,
  TVIcon,
  FilmIcon,
  VideoIcon,
  SaveIcon,
  TagIcon,
  BookMarkIcon,
  FileIcon,
  CancelIcon,
  DangerIcon,
  ErrorIcon,
  HelpIcon,
  InfoIcon,
  CircleCheckIcon,
  CheckIcon,
  CircleIcon,
  XIcon,
  RemoveIcon,
  AddIcon,
  CircleCheckBoldIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <Container className="flex flex-col space-y-4 bg-grayscale-500">
      <div className="flex space-x-2">
        <ChevronIcon type="right" />
        <ChevronIcon type="left" />
        <ChevronIcon type="up" />
        <ChevronIcon type="down" />
        <ArrowIcon type="right" />
        <ArrowIcon type="left" />
        <ArrowIcon type="up" />
        <ArrowIcon type="down" />
      </div>

      <div className="flex space-x-2">
        <RefreshIcon />
        <DownLoadIcon />
        <UpLoadIcon />
        <SwapIcon />
        <HamburgerIcon />
        <ListIcon />
        <EllipsisIcon type="horizontal" />
        <EllipsisIcon type="vertical" />
      </div>

      <div className="flex space-x-2">
        <EditIcon />
        <ChartIcon />
        <ChatDotIcon />
        <UserIcon />
        <ActivityIcon />
        <EmailIcon />
        <PasswordIcon />
        <HeartIcon />
      </div>

      <div className="flex space-x-2">
        <SettingsIcon />
        <BellIcon />
        <TrashIcon />
        <DeleteIcon />
        <StickerIcon />
        <ImageIcon />
        <LinkIcon />
        <ShareIcon />
      </div>

      <div className="flex space-x-2">
        <LikeIcon />
        <HateIcon />
        <StarIcon />
        <FlagIcon />
        <SearchIcon />
        <CameraIcon />
        <LightHubIcon />
        <TVIcon />
      </div>

      <div className="flex space-x-2">
        <FilmIcon />
        <VideoIcon />
        <SaveIcon />
        <TagIcon />
        <BookMarkIcon />
        <FileIcon />
      </div>

      <div className="flex space-x-2">
        <CancelIcon />
        <DangerIcon />
        <ErrorIcon />
        <HelpIcon />
        <InfoIcon />
        <CircleCheckIcon />
        <CheckIcon />
        <CircleIcon />
        <XIcon />
        <RemoveIcon />
        <AddIcon />
        <CircleCheckBoldIcon />
      </div>
    </Container>
  );
}
