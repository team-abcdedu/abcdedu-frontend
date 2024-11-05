import { StateCreator } from 'zustand';

// 이메일 인증 관련 state
type State = {
  isEmailVerified: boolean; // 인증 여부
  verifiedEmail: string | null; // 인증된 이메일
};

type Actions = {
  resetVerificationState: () => void;
  setIsEmailVerified: () => void;
  setVerifiedEmail: (verifiedEmail: string) => void;
};

export type EmailVerificationSlice = State & Actions;

const initialState: State = {
  isEmailVerified: false,
  verifiedEmail: null,
};

export const createEmailVerificationSlice: StateCreator<
  EmailVerificationSlice
> = set => ({
  ...initialState,
  resetVerificationState: () => set(initialState),
  setIsEmailVerified: () => set({ isEmailVerified: true }),
  setVerifiedEmail: verifiedEmail => set({ verifiedEmail }),
});
