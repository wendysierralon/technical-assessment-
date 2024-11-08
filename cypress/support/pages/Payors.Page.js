class PayorsModulePage {
  constructor() {
    this.login = () => cy.visit("https://dev.getcashcloud.com/login");
    this.email = () => cy.get("#email");
    this.password = () => cy.get("#password");
    this.buttonSignIn = () => cy.get(".primary-button");
    this.dashboard = () =>
      cy.visit("https://dev.getcashcloud.com/main/dashboard");
    this.payorsModule = () => cy.contains(".ng-star-inserted span", "Payors");
    this.buttonCreatePayor = () => cy.get(".button-action");
    this.payorName = () => cy.get("#payorName");
    this.payorEmail = () => cy.get(".basic-information__inputs #email");
    this.phoneCode = () => cy.get("#country-calling-code");
    this.phoneNumber = () => cy.get("#phone input");
    this.addressLine1 = () => cy.get("#address-line-1 input");
    this.dropdownCountry = () => cy.get(".p-dropdown-trigger span");
    this.selectCountry = () => cy.contains(".ng-star-inserted li", "Colombia");
    this.payorState = () => cy.get("#state");
    this.payorCity = () => cy.get("#city");
    this.payorZipCode = () => cy.get("#zip-code");
    this.createPayor = () => cy.contains(".primary-button", "Create Payor");
    this.tablePayorsCreated = () =>
      cy
        .contains(".table-dark-text", "Wendy Sierra")
        .closest(".ng-star-inserted");
    this.visualizePayor = () =>
      cy
        .contains(".table-dark-text", "Wendy")
        .closest(".ng-star-inserted")
        .find(".gap-3 span");
    this.errorMessageEmail = () =>
      cy.contains(".ng-star-inserted", "Invalid email format");
    this.errorMessageName = () =>
      cy.contains(".ng-star-inserted", "Payor Name is required");
    this.errorMessagePhoneNumber = () =>
      cy.contains(".ng-star-inserted", "Phone number is required");
    this.errorMessageAddress = () =>
      cy.contains(".ng-star-inserted", "Address Line 1 is required");
    this.errorMessageState = () =>
      cy.contains(".ng-star-inserted", "State is required");
    this.errorMessageCity = () =>
      cy.contains(".ng-star-inserted", "City is required");
    this.errorMessageZipCode = () =>
      cy.contains(".ng-star-inserted", "Zip Code is required");
    this.errorMessageEmailRequired = () =>
      cy.contains(".ng-star-inserted", "Email is required");
    this.updatePayor = () => cy.contains(".primary-button", "Update Payor");
    this.tablePayorsUpdated = () =>
      cy
        .contains(".table-dark-text", "Wendy Londoño")
        .closest(".ng-star-inserted");
    this.buttonDeletePayor = () =>
      cy.contains(".secondary-button", "Delete Payor");
    this.buttonConfirmDelete = () => cy.contains(".primary-button", "Confirm");
    this.buttonCancelDelete = () => cy.contains(".secondary-button", "Cancel");
    this.successDelete = () => cy.contains(".ng-tns-c26-44", "Success");
  }
}

export const payorsModulePage = new PayorsModulePage();
