<script lang="ts">
    type Props = {
        slug: string;
        title: string;
        description: string;
        category: string;
        tags: Array<string>;
    };
    export let post: Props;
    export let isLast: boolean = false;
</script>

<div class="post-preview">
    <div class="flex-1">
        <a href={`/${post.category}/${post.slug}`} title={post.title}>
            <h4 class="post-preview__title">
                {post.title}
            </h4>
            <p class="post-preview__desc">
                {post.description}
            </p>
            <ul class="tag-list">
                {#each post.tags as tag}
                    <a class="tag" href={`/tags/${tag}`} title={tag}>{tag}</a>
                {/each}
            </ul>
        </a>
    </div>
</div>
{#if !isLast}
    <hr class="my-4 text-theme-dark-secondary" />
{/if}

<style lang="postcss">
    .post-preview {
        @apply flex gap-6 text-left hover:bg-black/40 p-2;
    }
    .post-preview__title {
        @apply text-lg leading-tight font-semibold text-white mb-2;
    }
    .post-preview__desc {
        @apply text-base text-white leading-5 line-clamp-2;
    }
    .tag-list {
        @apply list-none py-2 flex flex-wrap gap-2;
    }
    .tag {
        @apply inline-block text-xs px-4 py-1 rounded-full text-black bg-theme-dark-primary;
    }
</style>
