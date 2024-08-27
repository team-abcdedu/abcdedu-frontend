// 각 커뮤니티의 정보를 나타내는 인터페이스
export interface CommunityInfo {
  label: string; // 커뮤니티의 이름 또는 제목을 나타내는 문자열
  description: string; // 커뮤니티에 대한 설명을 나타내는 문자열
  to: string;
}

// 여러 커뮤니티 정보를 관리하는 맵 구조의 인터페이스
export interface CommunityInfoMap {
  [label: string]: CommunityInfo;
  // 키는 커뮤니티의 label(이름 또는 제목)이고, 값은 해당 커뮤니티의 정보를 나타내는 CommunityInfo 객체
}
