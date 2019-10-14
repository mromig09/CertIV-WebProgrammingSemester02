export class Block {
    free: boolean = true;
    
    value: string = ""; //cross and tick
    symbol: string = ""; //cross and tick


    setValue(value) {
        this.value = value;

        if (this.value == "tick") {
            this.symbol = "done";
        }

        else {
            this.symbol = "close";
        }
    }
}