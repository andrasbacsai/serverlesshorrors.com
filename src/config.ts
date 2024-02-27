import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/all",
		title: "All Posts",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	
	// about: {
	// 	path: "/about",
	// 	title: "about",
	// },
};

export const SITE = {
	name: "ServerlessHorrors",
	title: "ServerlessHorrors",
	description: "Stories you never want to feel it on your own skin",
	url: "https://serverlesshorrors.com",
	githubUrl: "https://github.com/andrasbacsai/serverlesshorrors",
	listDrafts: false,
	// image:
	// 	"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "Andras Bacsai", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "heyandras", // Example: FredKSchott
	// Author: Image external source
	authorImage: " https://pbs.twimg.com/profile_images/1482658380913201158/NwpZWIaU_200x200.jpg", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"Solopreneuer. Building Coolify.io in public.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false;

export const USE_VIEW_STATS = false;
