class RegistrationForm {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }
    
    static visit() {
        cy.visit(this.url);
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get gender() {
        return cy.get("#genterWrapper");
    }

    static get phoneNumber() {
        return cy.get("#userNumber");
    }

    static get openCalendar() {
        return cy.get("#dateOfBirthInput");
    }

    static get monthDropdown() {
        return cy.get(".react-datepicker__month-select");
    }

    static get yearDropdown() {
        return cy.get(".react-datepicker__year-select");
    }

    static get chooseDay() {
        return cy.get(".react-datepicker__month")

    }

    static get chooseSubject() {
        return cy.get(".subjects-auto-complete__control");
    }

    static get fillSubject() {
        return cy.get(".subjects-auto-complete__control");
    }

    static get selectHobby() {
        return cy.get("#hobbiesWrapper");
    }

    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }

    static get enterAddress() {
        return cy.get("#currentAddress");
    }

    static get enterStateCity() {
        return cy.get(".css-1wa3eu0-placeholder");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get resultsTable() {
        return cy.get('.table-dark'); 
    }

    static get firstChild() {
        return cy.get("td:nth-child(1)");
    }

    static get secondChild() {
        return cy.get("td:nth-child(2)");
    }

}

export default RegistrationForm;