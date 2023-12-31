import { apiSlice } from "../services/apiSlice"

interface User { // Gives typing when retrieving User.
	username: string
	email: string
}

interface SocialAuthArgs {
	provider: string
	state: string
	code: string
}

interface CreateUserResponse {
	success: boolean
	user: User
}

const authApiSlice = apiSlice.injectEndpoints({ // Injecting endpoints here instead of in apiSlice, separation of concerns.
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({ // Can set up both queries and mutations. Queries are for when we get data, mutations are like sending data/POST requests.
			query: () => '/users/me/'
		}),
		socialAuthenticate: builder.mutation< // When we want multiple parameters in Redux, we need to pass them as objects.
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`, // Passing in the URL instead of in the body of the request.
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
		}),
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: '/jwt/create/',
				method: 'POST',
				body: { username, password }
			})
		}),
		register: builder.mutation({
			query: ({ username, email, password, re_password }) => ({
				url: '/users/',
				method: 'POST',
				body: { username, email, password, re_password }
			})
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/jwt/verify/',
				method: 'POST'
			})
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/logout/',
				method: 'POST'
			})
		}),
		activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/users/activation/',
				method: 'POST',
				body: { uid, token }
			})
		}),
		resetPassword: builder.mutation({
			query: email => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: { email }
			})
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/users/reset_password_confirm/',
				method: 'POST',
				body: { uid, token, new_password, re_new_password }
			})
		})
	})
})

export const { useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation
} = authApiSlice // A hook generated based on the name above.


// The equivalent of ({}) is return {}.