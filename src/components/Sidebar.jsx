import { A, useLocation } from "solid-start";

export default function Sidebar() {
  const location = useLocation();
  function active(path) {
    return path == location.pathname
      ? "text-white bg-slate-700"
      : "text-slate-300 hover:bg-slate-500";
  }
  return (
    <nav class="flex h-screen w-64 flex-col gap-y-2 bg-slate-800 p-4 text-gray-200">
      <A href="/" class={`${active("/")} cursor-pointer rounded p-3`}>
        Home
      </A>
      <A href="/about" class={`${active("/about")} cursor-pointer rounded p-3`}>
        About
      </A>
    </nav>
  );
}
