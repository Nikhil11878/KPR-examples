/*
import Pins from "pins";

import {
	setInterval, 
	clearInterval
} from "timer";

function secondsToString(seconds) {
	counter: 0,
                    power: { pin: 3, type: "Power" },
            	Pins.invoke("/display/writeString", "0000");
            	Pins.invoke("/display/writeDecimalControl", 0x10);
				main.start();
            } else {
            	trace("Failed to configure pins.\n");
            }
    pause() {
    	if (this.interval) clearInterval(this.interval);
    },
    reset() {
    	if (this.interval) clearInterval(this.interval);
    	this.counter = 0;
    	Pins.invoke("/display/writeString", "0000");
    },
    start() {
    	this.interval = setInterval(() => main.write(String(main.counter++)), 1000);
    },
    write(string) {
    onQuit() {
    	Pins.invoke("/display/clear");
    
    }