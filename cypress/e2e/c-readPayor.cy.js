import * as json from "../fixtures/credentialsCashCloud.json";
import { payorsModulePage } from "../support/pages/Payors.Page";

describe("Read Payors", () => {
  beforeEach("login", () => {
    cy.viewport(1600, 900);
    const { login, email, password, buttonSignIn } = payorsModulePage;

    login();
    email().type(json.credentials.email);
    password().type(json.credentials.password);
    buttonSignIn().click();
  });
  it("TC01: Should find a payor in the table succesfully", () => {
    //In this test case is validated a payor is find in the table
    const { payorsModule } = payorsModulePage;

    payorsModule().click();
    cy.contains(".table-dark-text", json.updatePayor.updateName)
      .closest(".ng-star-inserted")
      .should("exist");
    cy.contains(".ng-star-inserted", json.updatePayor.updateEmail)
      .closest(".ng-star-inserted")
      .should("exist");
    cy.contains(".text-left", "781-2099")
      .closest(".ng-star-inserted")
      .should("exist");
    cy.contains(".table-ligth-text-grey .text-left", "Parque residencial")
      .closest(".ng-star-inserted")
      .should("exist");
    cy.screenshot("Read - TC01");
  });
});
