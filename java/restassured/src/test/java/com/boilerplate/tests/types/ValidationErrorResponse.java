package com.boilerplate.tests.types;

import java.util.List;

public class ValidationErrorResponse {

    private List<ValidationError> errors;

    public ValidationErrorResponse() {
    }

    public List<ValidationError> getErrors() {
        return errors;
    }

    public void setErrors(List<ValidationError> errors) {
        this.errors = errors;
    }
}
