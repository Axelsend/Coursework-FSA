// UNIT TESTS:
// 
// 1. - Expect 2 numberical inputs to be submitted
//    - Expect multiplucation(4, 6) to be a Number
//    - Expect multiplication(4, 6) to equal 24
//    - Expect multiplication(4, "s") to error

// 2. - Expect 2 arrays of numbers to be submitted
//    - Expect [2, 5, 3, 6], [1, 2, 3] to return [1, 3, 5]
//    - Expect [2, 5, 3, 6], [1, 2] to return [1, 3, 5]
//    - Expect [2, 4, 6], [8, 2, 0] to return []
//    - Expect [2, 4, r], [8, 3, 4] to return [3, NaN]


// FUNCTIONAL TESTS:
// 1. - When a user clicks "Checkout", they should be prompted with a choice to either check out as a guest or login to checkout
//    - When a user chooses to login to checkout, they should be promted with input fields to enter their account information (i.e. username, password, etc.)
//    - When a user enters their account information in the provided fields, the checkout page should generate where they are able to checkout with their cart items using whatever stored information, if any, the website allows and be prompted to enter additional information as needed
//    - When a user chooses to checkout as a guest, they should be brought to a checkout page that shoud ask them for required information in order to complete their checkout
//    - When a user clicks checkout with no items in their cart, they should see a visual that states something to the effect of "no items in cart"