export default function Button({ children, onClick, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white"
      : "border text-black dark:text-white"

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded transition hover:opacity-90 ${styles}`}
    >
      {children}
    </button>
  )
}
