"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();
  const utils = api.useUtils();
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  const isInvalid = !name.trim() || createPost.isPending;

  return (
    <div className="flex w-full flex-col gap-4 font-mono text-sm">
      <div className="border border-zinc-800 bg-zinc-900/50 p-3 text-zinc-400">
        <span className="text-zinc-500">[{">"}] DB_LINK_STATUS: </span>
        {latestPost ? (
          <span className="truncate text-zinc-100">
            SYNCED_TO_RECORD_
            {latestPost.name.replace(/\s+/g, "_").toUpperCase()}
          </span>
        ) : (
          <span className="animate-pulse text-yellow-600">
            AWAITING_INITIAL_WRITE...
          </span>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isInvalid) return;
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <div className="relative flex-1">
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-600">
            {"$"}
          </span>
          <input
            type="text"
            placeholder="insert_new_record_value"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full border border-zinc-700 bg-zinc-900/80 pt-2 pr-3 pb-2 pl-7 text-zinc-100 transition-colors placeholder:text-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="border border-zinc-100 bg-zinc-100 px-6 py-2 font-bold tracking-wider text-zinc-950 transition-all hover:bg-transparent hover:text-zinc-100 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-900 disabled:text-zinc-600"
          disabled={isInvalid}
        >
          {createPost.isPending ? "WRITING..." : "EXECUTE"}
        </button>
      </form>
    </div>
  );
}
