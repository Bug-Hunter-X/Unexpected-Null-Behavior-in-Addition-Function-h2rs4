# Unexpected Null Behavior in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The function correctly handles cases where one of the inputs is null, returning null. However, it does not explicitly handle the case where both inputs are null, leading to unexpected behavior.

## Bug Description
The `foo` function aims to add two numbers. If either input is null, it returns null. However, when both inputs are null, it does not explicitly handle this scenario, leading to an unexpected output.

## Solution
The solution adds an explicit check for both inputs being null, returning null in that case.