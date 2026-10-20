import type { PuterStore } from "~/lib/puter";

export type UseResumeAuthParams = {
  id: string | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export type UseResumeDataParams = {
  id: string | undefined;
  fs: PuterStore["fs"];
  kv: PuterStore["kv"];
};

export type ResumePreviewProps = {
  imageUrl: string;
  resumeUrl: string;
};

export type ResumeFeedbackProps = {
  feedback: Feedback | null;
};
export type FeedbackTip = {
  type: "good" | "improve";
  tip: string;
  explanation?: string;
};

export type ATSProps = {
  score: number;
  suggestions: FeedbackTip[];
};

export type ScoreProps = {
  score: number;
};

export type DetailsProps = {
  feedback: Feedback;
};

export type CategoryHeaderProps = {
  title: string;
  categoryScore: number;
};

export type CategoryContentProps = {
  tips: FeedbackTip[];
};