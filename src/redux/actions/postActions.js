import { FETCH_POSTS, NEW_POSTS, CREATE_POST } from './types'


// fetch
export const new_posts = () => dispatch => {
	console.log("got")
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res => res.json())
		.then(posts =>
			dispatch({
				type: NEW_POSTS,
				payload: posts
			})
		)
}
