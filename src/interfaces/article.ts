export default interface Article {
	metadata: Metadata;
	contents: string;
}

export interface Metadata {
	title: string;
	timestamp: string;
	tag: string;
	description: string;
}
