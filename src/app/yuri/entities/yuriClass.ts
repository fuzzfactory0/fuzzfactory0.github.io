import { Category } from "./categories";

export interface FullSeries {
  id: number;
  anilistData: AnilistData,
  categories: Category[];
  mangadex: string;
  dynasty: string;
  official: string | null;
  comment: string;
  completeTranslation: boolean;
  nsfw: boolean;
  forceJapanese: boolean;
}

export interface AnilistData {
  id: number;
  title: TitleType;
  anilist: string;
  mal: string;
  description: string | null;
  format: string;
  status: string;
  isAdult: boolean;
  coverImage: CoverImageType;
  chapters: number | null;
  volumes: number | null;
}

export interface GraphQLResponse {
  data: MediaResponse
}

export interface MediaResponse {
  media: AnilistData
}

interface TitleType {
  romaji: string,
  english: string | null
}

interface CoverImageType {
  extraLarge: string;
  large: string;
  medium: string;
  color: string | null;
}