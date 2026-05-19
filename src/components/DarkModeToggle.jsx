
export default function DarkModeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="border border-neutral-300 dark:border-neutral-700 rounded-full px-4 py-2"
    >
      Dark Mode
    </button>
  );
}
