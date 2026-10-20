type HomeHeaderProps = {
  hasResumes: boolean;
  loadingResumes: boolean;
};

export default function HomeHeader({
  hasResumes,
  loadingResumes,
}: HomeHeaderProps) {
  return (
    <div className="page-heading py-8">
      <h1>Track Your Applications & Resume Ratings</h1>

      {!loadingResumes && !hasResumes ? (
        <h2>No Resumes found. Upload your first resume to get feedback.</h2>
      ) : (
        <h2>Review your submissions and check AI-powered feedback.</h2>
      )}
    </div>
  );
}