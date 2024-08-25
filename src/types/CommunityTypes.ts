export interface CommunityInfo {
  label: string;
  description: string;
  communities: {
    code: string;
    title: string;
  }[];
}

export interface CommunityInfoMap {
  [title: string]: CommunityInfo;
}
