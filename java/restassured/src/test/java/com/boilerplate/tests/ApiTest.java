package com.boilerplate.tests;

import com.boilerplate.tests.helpers.ApiHelpers;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static org.hamcrest.Matchers.equalTo;

class ApiTest {

    @Test
    void healthCheck() {
        RestAssured.given()
                .baseUri(ApiHelpers.BASE_URL)
                .when()
                .get("/health")
                .then()
                .statusCode(200)
                .body("status", equalTo("ok"));
    }
}
