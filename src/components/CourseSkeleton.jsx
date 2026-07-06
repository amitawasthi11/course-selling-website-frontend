function CourseSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-56 bg-slate-200"></div>

      <div className="p-5">
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>

        <div className="h-4 bg-slate-200 rounded mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>

        <div className="flex justify-between mt-6">
          <div className="h-8 w-20 bg-slate-200 rounded"></div>
          <div className="h-10 w-28 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default CourseSkeleton;