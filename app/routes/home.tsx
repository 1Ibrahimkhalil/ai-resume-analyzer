import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { useHomeAuth } from "~/features/home/hooks/useHomeAuth";
import { useResumes } from "~/features/home/hooks/useResumes";
import HomeHeader from "~/features/home/components/HomeHeader";
import ResumeList from "~/features/home/components/ResumeList";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuAI | AI Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  useHomeAuth();
  const { resumes, loadingResumes } = useResumes();

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <HomeHeader
          hasResumes={resumes.length > 0}
          loadingResumes={loadingResumes}
        />
        <ResumeList loadingResumes={loadingResumes} resumes={resumes} />
      </section>
    </main>
  );
}
