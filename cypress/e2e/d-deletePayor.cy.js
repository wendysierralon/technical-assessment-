import * as json from "../fixtures/credentialsCashCloud.json";
import { payorsModulePage } from "../support/pages/Payors.Page";

describe("Delete Payors", () => {
  beforeEach("login", () => {
    cy.viewport(1600, 900);
    const { login, email, password, buttonSignIn } = payorsModulePage;

    login();
    email().type(json.credentials.email);
    password().type(json.credentials.password);
    buttonSignIn().click();
  });

  it("TC01: Shouldn't delete a payor when the delete is not confirmed", () => {
    const {
      payorsModule,
      visualizePayor,
      buttonDeletePayor,
      buttonCancelDelete,
      tablePayorsUpdated,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    buttonDeletePayor().click();
    cy.screenshot("Delete - TC01.1");
    buttonCancelDelete().click();
    cy.screenshot("Delete - TC01.2");
    payorsModule().click();
    tablePayorsUpdated().should("exist"); //This line confirms the payor still exists
    cy.screenshot("Delete - TC01.3");
  });

  it("TC02: Should delete a payor succesfully", () => {
    const {
      payorsModule,
      visualizePayor,
      buttonDeletePayor,
      buttonConfirmDelete,
      successDelete,
    } = payorsModulePage;

    payorsModule().click();
    visualizePayor().click();
    buttonDeletePayor().click();
    cy.screenshot("Delete - TC02.1");
    buttonConfirmDelete().click();
    successDelete().should("be.visible"); //This line confirms the alert "Success" is visible
    cy.screenshot("Delete - TC02.2");
  });
});
