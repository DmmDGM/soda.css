// Soda - Corn @ DmmD GM

// Defines Soda
namespace Soda {
	// Clock interval
	export class ClockInterval {
		// Defines properties
		#timeout: number = 0;
		active: boolean = false;
		callbacks: { [ event: string ]: Set<(clockInterval: ClockInterval) => void> } = {};
		expectedTimestamp: number = 0;
		id: number | null = null;
		ticks: number = 0;
		
		// Defines constructor
		constructor(timeout: number) {
			// Initializes instance
			this.timeout = timeout;
		}

		// Triggers event listeners
		emit(event: string): this {
			// Triggers event listeners
			if(event in this.callbacks) {
				const callbacks = Array.from(this.callbacks[event].values());
				for(let i = 0; i < callbacks.length; i++) callbacks[i](this);
			}

			// Returns instance
			return this;
		}

		// Appends event listener
		on(event: string, callback: (clockInterval: ClockInterval) => void): this {
			// Appends event listener
			!(event in this.callbacks) && (this.callbacks[event] = new Set());
			this.callbacks[event].add(callback);

			// Returns instance
			return this;
		}

		// Removes event listener
		off(event: string, callback: (clockInterval: ClockInterval) => void): this {
			// Removes event listener
			if(event in this.callbacks) {
				this.callbacks[event].delete(callback);
				this.callbacks[event].size === 0 && delete this.callbacks[event];
			}

			// Returns instance
			return this;
		}

		// Triggers clock
		tick(): this {
			// Returns instance
			return this;
		}

		// Resets timeout
		zero(): this {
			// Resets timeout
			if(this.id !== null) {
				clearTimeout(this.id);
				setTimeout(() => {
					this.expectedTimestamp = Date.now() + this.#timeout;
					this.tick();
				}, this.#timeout);
				this.emit("zero");
			}

			// Returns instance
			return this;
		}

		// Updates timeout
		get timeout() {
			return this.#timeout;
		}
		
		set timeout(timeout: number) {
			this.#timeout = timeout;
		}
	}
}