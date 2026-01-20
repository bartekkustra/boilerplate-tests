#!/bin/bash

# Generate TypeScript types from OpenAPI spec
# Usage: ./scripts/generate-types.sh
# Requires: interview-api running at the URL specified in api.config

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
ROOT_DIR="$(dirname "$(dirname "$PROJECT_DIR")")"
CONFIG_FILE="$ROOT_DIR/api.config"
OUTPUT_FILE="$PROJECT_DIR/tests/types/api.types.ts"

# Load config
if [ -f "$CONFIG_FILE" ]; then
    source "$CONFIG_FILE"
else
    echo "Error: Config file not found at $CONFIG_FILE"
    exit 1
fi

echo "Using API URL: $API_BASE_URL"
echo "Generating types from OpenAPI spec..."
npx openapi-typescript "$API_BASE_URL/api-docs.json" -o "$OUTPUT_FILE"
echo "Types generated at: $OUTPUT_FILE"
