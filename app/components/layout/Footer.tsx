export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Chatterie</span>
        <a className="underline" href="mailto:contact@exemple.com">contact@exemple.com</a>
      </div>
    </footer>
  );
}
