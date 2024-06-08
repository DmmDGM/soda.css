// Soda - Lemon @ DmmD GM

// Defines Soda
namespace Soda {
	// Fetch
	export async function fetch(url: RequestInfo | URL, options?: RequestInit): Promise<Response> {
		// Wraps fetch function
		return globalThis.fetch(url, options);
	}
	Object.assign(Soda.fetch, {
		// Fetches json
		json: async (url: RequestInfo | URL, options?: RequestInit) => {
			// Fetches data
			const raw = await fetch(url, options);
			const json = await raw.json();
			
			// Returns data
			return json;
		},
		// Fetches text
		text: async (url: RequestInfo | URL, options?: RequestInit) => {
			// Fetches data
			const raw = await fetch(url, options);
			const text = await raw.text();
			
			// Returns data
			return text;
		}
	});
}
