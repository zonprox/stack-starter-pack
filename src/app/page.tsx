import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "SYSTEM_ONLINE" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-300 selection:bg-zinc-300 selection:text-zinc-950">
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 left-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-zinc-800 opacity-20 blur-[100px]"></div>

        <div className="relative z-10 container flex max-w-5xl flex-col items-start justify-center gap-12 px-6 py-16 md:px-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex max-w-max items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs text-zinc-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <span>ANTIGRAVITY // SAAS CORE ENGINE // V1.0.0</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tighter text-zinc-100 sm:text-7xl">
              ENTERPRISE <br className="hidden sm:block" />
              <span className="text-zinc-500">START_</span>PACK
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-500">
              Industrial-grade Next.js architecture. Strictly typed. Edge-ready
              authentication. Pre-configured CI/CD pipelines. No generic
              layouts. No bloat.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Panel 1: Edge Compute Status */}
            <div className="group relative flex flex-col overflow-hidden border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-5 py-3">
                <h3 className="font-mono text-xs font-bold tracking-widest text-zinc-400">
                  01 // TRPC_COMPUTE
                </h3>
                <span className="font-mono text-[10px] text-zinc-600">
                  EDGE_READY
                </span>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <p className="text-sm text-zinc-400">
                  Validating End-to-End Type Safety RPC...
                </p>
                <div className="border border-zinc-800 bg-zinc-900 p-4 font-mono text-xs text-green-400">
                  {"> "} {hello.greeting}
                </div>
              </div>
            </div>

            {/* Panel 2: Database Subsystem */}
            <div className="group relative flex flex-col overflow-hidden border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-5 py-3">
                <h3 className="font-mono text-xs font-bold tracking-widest text-zinc-400">
                  02 // POSTGRES_SUBSYSTEM
                </h3>
                <span className="font-mono text-[10px] text-zinc-600">
                  POOL_ACTIVE
                </span>
              </div>
              <div className="p-6">
                <LatestPost />
              </div>
            </div>
          </div>

          <div className="mt-8 flex w-full justify-between gap-4 border-t border-zinc-900 pt-8 font-mono text-xs text-zinc-600">
            <span>[PRISMA_V7]</span>
            <span>[TAILWIND_V4]</span>
            <span>[REACT_19]</span>
            <span className="hidden sm:inline">[NEXTAUTH_V4]</span>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
