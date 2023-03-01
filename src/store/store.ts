import {create} from "zustand";
import {Post} from "../types/types";


type PostsStore = {
	posts: Post[]
	sortedPosts: Post[]
	dispatchPosts: (posts: Post[]) => void
	dispatchSortedPosts: (sortedPosts: Post[]) => void
}

export const usePostsStore = create<PostsStore>((set) => ({
	posts: [],
	sortedPosts: [],
	dispatchPosts: (posts) => set((state) => ({
		...state,
		posts
	})),
	dispatchSortedPosts: (sortedPosts) => set((state) => ({
		...state,
		sortedPosts
	}))
}))