
const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600" />

        <span className="text-lg font-bold text-blue-600">R</span>
      </div>

  
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Loading ResuAI
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Please wait while we prepare everything for you...
        </p>
      </div>

      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-blue-100">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />
      </div>
    </div>
  );
};

export default Loading;
