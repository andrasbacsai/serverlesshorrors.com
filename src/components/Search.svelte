<script lang="ts">
    import { onMount } from "svelte";
    import SearchIcon from "./SearchIcon.svelte";
    import PostSearchPreview from "./PostSearchPreview.svelte";

    let searchInput;
    let searchableDocs;
    let searchIndex;

    let searchQuery = "";
    let searchResults = [];

    onMount(async () => {
        const lunr = (await import("lunr")).default;
        const resp = await fetch("/search-index.json");
        searchableDocs = await resp.json();
        // Initialize indexing
        searchIndex = lunr(function () {
            // the match key...
            this.ref("slug");

            // indexable properties
            this.field("title");
            this.field("description");
            this.field("tags");

            // Omit, if you don't want to search on `body`
            this.field("body");

            // Index every document
            searchableDocs.forEach((doc) => {
                this.add(doc);
            }, this);
        });
        searchInput.focus();
    });

    $: {
        if (searchQuery && searchQuery.length >= 3) {
            const matches = searchIndex.search(searchQuery);
            searchResults = [];
            matches.map((match) => {
                searchableDocs.filter((doc) => {
                    if (match.ref === doc.slug) {
                        searchResults.push(doc);
                    }
                });
            });
        }
    }
</script>

<div class="search">
    <div class="search__ctrl">
        <label for="search"
            ><SearchIcon found={searchResults.length > 0} /></label
        >
        <input
            type="text"
            name="search"
            bind:this={searchInput}
            placeholder="Search for tags, content..."
            bind:value={searchQuery}
        />
    </div>
    <div class="search__results">
        {#if searchResults.length}
            {#each searchResults as post, i}
                <PostSearchPreview
                    {post}
                    isLast={i === searchResults.length - 1}
                />
            {/each}
        {:else}
            <div class="search__results--none">No matching items found!</div>
        {/if}
    </div>
    <!-- <div class="note"><small>click anywhere outside to close</small></div> -->
</div>

<style>
    .search {
        @apply w-full relative  p-8;
    }
    input {
        @apply w-96 px-4 py-2 pl-10 font-semibold text-gray-600 border-0 shadow-inner  bg-gray-100;
    }
    .search__ctrl {
        @apply pb-4 relative;
    }
    .search__ctrl label {
        @apply text-black absolute top-2 left-2;
    }
    .search__results {
        @apply py-4 overflow-y-auto bg-theme-primary;
    }
    .search__results--none {
        @apply text-center text-theme-dark-primary;
    }
    .note {
        @apply w-full text-center text-white;
    }
</style>
