import fs from "node:fs";
import "dotenv/config";
import openapiTS, { astToString } from "openapi-typescript";
const url = process.env.OAPI_FILE_URL;

async function fetchAndParse() {
	if (!url) {
		console.error("OAPI_FILE_URL environment variable is not set");
		process.exit(1);
	}
	try {
		const ast = await openapiTS(new URL(url, import.meta.url));
		const contents = astToString(ast);
		fs.writeFileSync("./src/lib/api/v1.d.ts", contents);
		console.log(
			"\x1b[32mOpenAPI file fetched and parsed successfully:\x1b[0m",
			`${url} -> ./src/lib/api/v1.d.ts`
		);
	} catch (error) {
		console.error("\x1b[31mError fetching or parsing OpenAPI file:\x1b[0m", error);
		process.exit(1);
	}
}

fetchAndParse();
