// Soda - Raspberry @ DmmD GM

// Defines Soda
namespace Soda {
	// Loop interval
	export function loopInterval(
		callback: (internal: ReturnType<typeof loopInterval>) => void,
		timeout: number,
		immediate: boolean = false
	): typeof instance {
		// Defines instance
		const instance = repeatInterval(callback, timeout, Infinity, immediate);

		// Returns instance
		return instance;
	}

	// Repeat interval
	export function repeatInterval(
		callback: (internal: ReturnType<typeof repeatInterval>) => void,
		timeout: number,
		cycles: number,
		immediate: boolean = false
	): typeof instance {
		// Defines instance
		const instance = {
			// Calls next cycle without resetting timeout
			call: () => {
				// Calls cycle
				instance.cycle++;
				callback(instance);
				instance.cycle >= cycles && instance.end();

				// Returns instance
				return instance;
			},

			// Counts total cycles
			cycle: 0,

			// Ends interval
			end: () => {
				// Clears interval
				clearInterval(instance.id);

				// Returns instance
				return instance;
			},
			
			// Defines interval id
			id: setInterval(() => instance.call(), timeout),
			
			// Calls next cycle and resets timeout
			next: () => {
				// Calls cycle
				instance.zero();
				instance.call();

				// Returns instance
				return instance;
			},

			// Resets timeout
			zero: () => {
				// Resets timeout
				instance.end();
				instance.id = setInterval(() => instance.call(), timeout);

				// Returns instance
				return instance;
			}
		};

		// Checks for immediate
		immediate === true && setTimeout(() => instance.call(), 0);

		// Returns instance
		return instance;
	}

	// Sleep
	export function sleep(timeout: number): Promise<void> {
		// Returns promise
		return new Promise((resolve) => {
			setTimeout(() => resolve(), timeout);
		});
	}
}
