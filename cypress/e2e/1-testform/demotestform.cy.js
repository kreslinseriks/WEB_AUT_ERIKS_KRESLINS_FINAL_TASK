import RegistrationForm from "../../pageObjects/registrationForm.page";

describe("Scenario block name", () => {
    beforeEach(() => {
        RegistrationForm.visit();
    });
  
    it("Fill The Form", () => { 
        // Actions
        RegistrationForm.firstName.type("Donald");
        RegistrationForm.lastName.type("Duck");
        RegistrationForm.userEmail.type("donald@duck.lv");
        RegistrationForm.gender.contains("Male").click();
        RegistrationForm.phoneNumber.type("1234567890");
        RegistrationForm.openCalendar.click();
        RegistrationForm.monthDropdown.select("March");
        RegistrationForm.yearDropdown.select("1930");
        RegistrationForm.chooseDay.contains("28").click();
        RegistrationForm.chooseSubject.type("Economics");
        RegistrationForm.fillSubject.type("Economics{downarrow}{enter}");
        RegistrationForm.selectHobby.contains("Music").click();
        RegistrationForm.uploadPicture.selectFile("../../Testeesana/WEB_AUT_ERIKS_KRESLINS_FINAL_TASK/cypress/files/picture.jpg");
        RegistrationForm.enterAddress.type("Adrese, Pilseta, 555");
        RegistrationForm.enterStateCity.contains("Select State").type("NCR{downarrow}{enter}");
        RegistrationForm.enterStateCity.contains("Select City").type("Delhi{downarrow}{enter}");
        RegistrationForm.submitButton.click();

        // Validation
        RegistrationForm.resultsTable 
        .find("tr:gt(0)") 
        .each(($row) => {
            cy.wrap($row).within(() => {
            // Rindiņas pirmais lauks - ieliekam tā tekstu "label" mainīgajā
            RegistrationForm.firstChild.invoke("text").then((label) => { 
                // Izsaucam funkciju; pārbaudam, vai rindiņas otrais lauks atbilst testa vērtībai, kas noteikta pēc "label"
                RegistrationForm.secondChild.should("have.text", getTestValue(label));
                });
            });
        });

        // Funkcija, kas nosaka testa vērtību atbilstoši "label"
        function getTestValue(label) {
        switch (label) {
            case "Student Name":
                return "Donald Duck"; 
            case "Student Email":
                return "donald@duck.lv"; 
            case "Gender":
                return "Male";
            case "Mobile":
                return "1234567890";
            case "Date of Birth":
                return "28 February,1930";
            case "Subjects":
                return "Economics";
            case "Hobbies":
                return "Music";
            case "Picture":
                return "picture.jpg";
            case "Address":
                return "Adrese, Pilseta, 555";
            case "State and City":
                return "NCR Delhi";
            default:
                return ''; // Default, ja ievada kko nezināmu
        }
        }
    });
  });