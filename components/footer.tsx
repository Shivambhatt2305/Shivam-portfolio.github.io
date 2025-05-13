export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-8 text-center text-gray-400">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Shivam Bhatt. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed and developed with passion and modern technologies.</p>
      </div>
    </footer>
  )
}
