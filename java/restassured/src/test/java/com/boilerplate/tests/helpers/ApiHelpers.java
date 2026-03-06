package com.boilerplate.tests.helpers;

import com.boilerplate.tests.types.LoginResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

import java.util.Map;

public class ApiHelpers {

    public static final String BASE_URL = "http://localhost:3000";

    public static String login(String email, String password) {
        LoginResponse response = RestAssured.given()
                .baseUri(BASE_URL)
                .contentType(ContentType.JSON)
                .body(Map.of("email", email, "password", password))
                .when()
                .post("/api/login")
                .then()
                .statusCode(200)
                .extract()
                .as(LoginResponse.class);

        return response.getToken();
    }

    public static RequestSpecification createAuthenticatedRequest(String email, String password) {
        String token = login(email, password);

        return RestAssured.given()
                .baseUri(BASE_URL)
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + token);
    }
}
