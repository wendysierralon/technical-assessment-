import * as json from "../fixtures/credentialsCashCloud.json";
import { payorsModulePage } from "../support/pages/Payors.Page";

describe("Create Payors", () => {
  beforeEach("login", () => {
    cy.viewport(1600, 900);
    const { login, email, password, buttonSignIn } = payorsModulePage;

    login();
    email().type(json.credentials.email);
    password().type(json.credentials.password);
    buttonSignIn().click();
  });
  it("TC01: Should create a payor succesfully", () => {
    //In this test case is validated that when every required fields are fill out, the payor is created succesfully
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
      tablePayorsCreated,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorName().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    cy.screenshot("Create - TC01.1");
    createPayor().click();
    tablePayorsCreated().should("exist"); //In this line is validated the payor exists in the table
    cy.screenshot("Create - TC01.2");
  });

  it("TC02: Shouldn't create a payor when Name is missing", () => {
    //In this test case is validated that when the field Payor Name is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC02");
  });

  it("TC03: Shouldn't create a payor when Email is missing", () => {
    //In this test case is validated that when the field Email is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC03");
  });

  it("TC04: Shouldn't create a payor when Phone Number is missing", () => {
    //In this test case is validated that when the field Phone Number is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC04");
  });

  it("TC05: Shouldn't create a payor when Phone Code is missing", () => {
    //In this test case is validated that when the field Phone Code is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC05");
  });

  it("TC06: Shouldn't create a payor when Address Line 1 is missing", () => {
    //In this test case is validated that when the field Address Line 1 is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC06");
  });

  it("TC07: Shouldn't create a payor when Country is missing", () => {
    //In this test case is validated that when the field Country is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC07");
  });

  it("TC08: Shouldn't create a payor when State is missing", () => {
    //In this test case is validated that when the field State is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorCity,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC08");
  });

  it("TC09: Shouldn't create a payor when City is missing", () => {
    //In this test case is validated that when the field City is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorZipCode,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorZipCode().type(json.createPayor.payorZipCode);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC09");
  });

  it("TC10: Shouldn't create a payor when Zip Code is missing", () => {
    //In this test case is validated that when the field Zip Code is empty, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      createPayor,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.payorEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC10");
  });

  it("TC11: Shouldn't create a payor when Email has an invalid format", () => {
    //In this test case is validated that when the field Email is fill out with an invalid format, button "Create Payor" will be disabled
    const {
      payorsModule,
      buttonCreatePayor,
      payorName,
      payorEmail,
      phoneCode,
      phoneNumber,
      addressLine1,
      dropdownCountry,
      selectCountry,
      payorState,
      payorCity,
      payorZipCode,
      createPayor,
      errorMessageEmail,
    } = payorsModulePage;

    payorsModule().click();
    buttonCreatePayor().click();
    payorName().type(json.createPayor.payorName);
    payorEmail().type(json.createPayor.invalidEmail);
    phoneCode().type(json.createPayor.phoneCode);
    phoneNumber().type(json.createPayor.phoneNumber);
    addressLine1().type(json.createPayor.payorAddress);
    dropdownCountry().click();
    selectCountry().click();
    payorState().type(json.createPayor.payorState);
    payorCity().type(json.createPayor.payorCity);
    payorZipCode().type(json.createPayor.payorZipCode);
    errorMessageEmail().should("be.visible");
    createPayor().should("be.disabled");
    cy.screenshot("Create - TC11");
  });
});
