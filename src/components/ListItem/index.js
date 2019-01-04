import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'noopener noreferrer nofollow';

const ListItem = () => {
	return (
		<Item>
			<ExternalLink>
				<Title>
					The Developer Community <Host>(gitconnected.com)</Host>
				</Title>
			</ExternalLink>
			<Description>
				9000 points by{' '}
				<CommentLink href="#" rel={LINK_REL} target="_blank">
					Test User{' '}
				</CommentLink>
				1 hour ago{' | '}
				<CommentLink href="#" rel={LINK_REL} target="_blank">
					42 comments
				</CommentLink>
			</Description>
		</Item>
	);
};

export default ListItem;