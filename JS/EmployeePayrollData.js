class EmployeePayrollData {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}([ ][A-Z]([a-z]{1,})*)*$/;
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Invalid name";
        }
    }

    get picture() {
        return this._picture;
    }

    set picture(picture) {
        this._picture = picture;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        const date = new Date();
        if (startDate <= date && ((date - startDate) / (1000 * 60 * 60 * 24)) <= 30) {
            this._startDate = startDate;
        }
        else throw "Enter valid date";
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    toString() {
        return "ID: " + this.id + "\nName: " + this.name + "\nPicture: " + this.picture + "\nGender: " + this.gender + "\nDepartment: " + this.department + "\nSalary: " + this.salary + "\nStart date: " + this.startDate + "\nNote: " + this.note;
    }
}