import React, {Children} from "react";
import Metadata from "../interfaces/metadata";
import {GetStaticProps} from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const MetadataContext = React.createContext<Metadata[]>([]);

export default MetadataContext;

export const MetadataContextProvider = ({metadatas}) => {
	return (
		<>
			<MetadataContext.Provider value={metadatas}>
				{Children}
			</MetadataContext.Provider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const dirPath = path.join("pages", "articles", "contents");
	const metadatas = fs
		.readdirSync(dirPath)
		.map(filename => fs.readFileSync(path.join(dirPath, filename)).toString())
		.map(data => matter(data).data);
	return {
		props: {
			metadatas: metadatas,
		},
	};
};
