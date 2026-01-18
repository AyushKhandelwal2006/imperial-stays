export default function Skeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-secondary rounded shadow overflow-hidden">
      <div className="h-48 bg-gray-300 dark:bg-gray-700" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-3/4" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 w-1/2" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-full" />
      </div>
    </div>
  )
}
