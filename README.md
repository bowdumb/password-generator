# password-generator
This project was created as a challenge presented during the Georgia Tech edX full-stack coding bootcamp.

Using starter-code upon which I have added my own code, this password-generator uses JavaScript to dynamically generate a secure, randomized password with a user-selected length that is between 8-128 characters. The user is also presented with prompts to determine what kind of characters they would like to include in their password. Options include lowercase letters, uppercase letters, numbers, and special characters.

## Installation
This application has been deployed via GitHub Pages, and can be used by following the deployment link within this GitHub repository, or directly through this URL: https://claxcode.github.io/password-generator/ . Additionally, this application may be accessed by downloading the files locally and opening them within VSCode, or equivalent software.

## Functionality
When interacting with the application, the user must first click on the "generate password" button to initiate a series of prompts that will ultimately determine their unique password:
    * The user is prompted to select an numeric value between 8 and 128 characters. If they select an invalid number of characters, they will receive an error message and will have to click the "generate password" button again to re-initiate the prompt until a valid entry is logged.

    * After selecting a valid number of characters, the user is asked if they would like to include lowercase letters, uppercase letters, numbers, or special characters. Each of these selections are stored within an array to later be used for the generation of their password.

    * Once their password array has been created, it is passed through a JavaScript for loop in order to randomly select the appropriate number of characters from the included character types. Once the password is properly generated, the text is displayed within the HTML text area on the application.

    * If the user decides to generate another password, the second click of the "generate password" button will clear the previously stored values in order to ensure that all prompts work as designed for the initial use.

## Screenshots

### Load Page
![Load page](/Assets/Screenshot1.png)


### Character Alert
![Charcter alert](/Assets/Screenshot2.png)


### Lowercase Prompt
![Lowercase prompt](/Assets/Screenshot3.png)


### Uppercase Prompt
![Uppercase prompt](/Assets/Screenshot4.png)


### Numbers Prompt
![Numbers prompt](/Assets/Screenshot5.png)


### Special Character Prompt
![Special Character prompt](/Assets/Screenshot6.png)


### Generated Password
![Generated password](/Assets/Screenshot7.png)

## Acknowledgements

Starter code provided by the Georgia Tech Full-Stack Coding Bootcamp and the edX staff.