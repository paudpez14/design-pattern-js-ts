interface State {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  private state: State;
  quantity: number;
  readonly limit: number;
  private number: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyDataState();
  }

  get getNumber(): number {
    return this.number++;
  }

  set setState(state: State) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  next(): number | null {
    return this.state.next(this);
  }

  add(quantity: number): void {
    this.state.add(this, quantity);
  }
}

class EmptyDataState implements State {
  next(ticket: Ticket): number | null {
    return null;
  }
  add(ticket: Ticket, quantity: number): void {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new FullDataState();
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyDataState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    if (ticket.quantity + ticket.quantity < ticket.limit) {
      ticket.quantity += quantity;
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullDataState();
    }
  }
}

class FullDataState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyDataState();
    } else {
      ticket.setState = new WithDataState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    console.log("Ticket Lleno")
  }
}


const ticket = new Ticket(5);
