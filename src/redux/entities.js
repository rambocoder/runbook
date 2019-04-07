class Task {
    startsAt;
    customer;
    PlannedStartsAt;
    PlannedEndsAt;
    ActualStartsAt;
    ActualEndsAt;
    constructor(startsAt, customer, area) {
        this.startsAt = startsAt,
        this.customer = customer,
        this._area = area;        
    }
    PlannedDuration(){
        return PlannedEndsAt - PlannedStartsAt;
    }
    PlannedStartDay(){

    }
    PlannedStartTime(){

    }
}


class Area {
    get Environment() {
        return this._environment;
    }
    set Environment(value) {
        this._environment = value;
    }
}

class Environment {

}

class Role {

}

export { Task, Area, Environment, Role }
