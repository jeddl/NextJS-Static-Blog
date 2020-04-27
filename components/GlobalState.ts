import Metadata from "../interfaces/metadata";

export class GlobalState {
	private _articleMetadatas?: Metadata[];

	get articleMetadatas(): Metadata[] {
		return this._articleMetadatas ?? [];
	}

	set articleMetadatas(metadatas: Metadata[]) {
		if (!metadatas) {
			return;
		}
		this._articleMetadatas = metadatas;
	}
}
