// ホーム画面（"/home"）
import { gql } from "@apollo/client";

gql`
	query AllTweets {
		allTweets {
			userId
			tweetId
			tweetBody
			retweetId
			createdAt
			userInfo
		}
	}
`;
