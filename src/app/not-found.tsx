import H1 from "@/components/ui/h1";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <H1>Not Found</H1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="block text-green-500">
        Go to the main page
      </Link>
    </main>
  );
}
