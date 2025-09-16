// npm i class-variance-authority (optionnel)

const styles = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition';
export default function Button({ className='', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`${styles} bg-gray-900 text-white hover:opacity-95 disabled:opacity-60 ${className}`} {...props} />;
}
