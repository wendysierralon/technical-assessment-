import * as json from "../fixtures/credentialsCashCloud.json";
import { payorsModulePage } from "../support/pages/Payors.Page";

describe("Update Payors", () => {
  beforeEach("login", () => {
    cy.viewport(1600, 900);
    const { login, email, password, buttonSignIn } = payorsModulePage;

    login();
    email().type(json.credentials.email);
    password().type(json.credentials.password);
    buttonSignIn().click();
  });
  it("TC01: Should update basic information of a payor succesfully", () => {
    const {
      payorsModule,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      payorState,
      payorCity,
      payorZipCode,
      updatePayor,
      tablePayorsUpdated,
      visualizePayor,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorName().clear().type(json.updatePayor.updateName);
    payorEmail().clear().type(json.updatePayor.updateEmail);
    phoneCode().clear().type(json.updatePayor.updatePhoneCode);
    phoneNumber().clear().type(json.updatePayor.updatePhoneNumber);
    addressLine1().clear().type(json.updatePayor.updatePayorAddress);
    payorState().clear().type(json.updatePayor.updatePayorState);
    payorCity().clear().type(json.updatePayor.updatePayorCity);
    payorZipCode().clear().type(json.updatePayor.updatePayorZipCode);
    updatePayor().click();
    payorsModule().click();
    tablePayorsUpdated().should("exist");
    visualizePayor().click();
    payorEmail().should("have.value", json.updatePayor.updateEmail);
    addressLine1().should("have.value", json.updatePayor.updatePayorAddress);
    payorState().should("have.value", json.updatePayor.updatePayorState);
    payorCity().should("have.value", json.updatePayor.updatePayorCity);
    payorZipCode().should("have.value", json.updatePayor.updatePayorZipCode);
    cy.screenshot("Update - TC01");
  });

  it("TC02: Shouldn't update basic information of a payor when field Payor Name is empty", () => {
    const {
      payorsModule,
      payorName,
      payorEmail,
      updatePayor,
      visualizePayor,
      errorMessageName,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorName().clear();
    payorEmail().click();
    updatePayor().should("be.disabled");
    errorMessageName().should("be.visible");
    cy.screenshot("Update - TC02");
  });

  it("TC03: Shouldn't update basic information of a payor when field Email is empty", () => {
    const {
      payorsModule,
      payorName,
      payorEmail,
      updatePayor,
      visualizePayor,
      errorMessageEmailRequired,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorEmail().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessageEmailRequired().should("be.visible");
    cy.screenshot("Update - TC03");
  });

  it("TC04: Shouldn't update basic information of a payor when field Phone Number is empty", () => {
    const {
      payorsModule,
      payorName,
      phoneNumber,
      updatePayor,
      visualizePayor,
      errorMessagePhoneNumber,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    phoneNumber().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessagePhoneNumber().should("be.visible");
    cy.screenshot("Update - TC04");
  });

  it("TC05: Shouldn't update basic information of a payor when field Address Line 1 is empty", () => {
    const {
      payorsModule,
      payorName,
      addressLine1,
      updatePayor,
      visualizePayor,
      errorMessageAddress,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    addressLine1().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessageAddress().should("be.visible");
    cy.screenshot("Update - TC05");
  });

  it("TC06: Shouldn't update basic information of a payor when field State is empty", () => {
    const {
      payorsModule,
      payorName,
      payorState,
      updatePayor,
      visualizePayor,
      errorMessageState,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorState().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessageState().should("be.visible");
    cy.screenshot("Update - TC06");
  });

  it("TC07: Shouldn't update basic information of a payor when field City is empty", () => {
    const {
      payorsModule,
      payorName,
      payorCity,
      updatePayor,
      visualizePayor,
      errorMessageCity,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorCity().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessageCity().should("be.visible");
    cy.screenshot("Update - TC07");
  });

  it("TC08: Shouldn't update basic information of a payor when field Zipe Code is empty", () => {
    const {
      payorsModule,
      payorName,
      payorZipCode,
      updatePayor,
      visualizePayor,
      errorMessageZipCode,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    payorZipCode().clear();
    payorName().click();
    updatePayor().should("be.disabled");
    errorMessageZipCode().should("be.visible");
    cy.screenshot("Update - TC08");
  });
});
