# Work Day Scheduler Starter Code

## Description

In this even-numbered week, I received a startup code, indicating that the HTML and CSS were already provided, and my task was to implement functionality through JavaScript. The entire purpose of this program is to allow busy individuals to plan ahead. The algorithm will change the color of each individual time block based on the time; specifically, the past will be colored red, the present will be green, and finally, the future will be indicated by the color green.

Additionally, when a save button is clicked, the respective description will be saved into local storage through an array of objects. To retrieve the elements, the program will convert the local storage back into an object. It will then loop through each manipulated description, inserting them where needed by checking the initial blockId. Lastly, when the individual decides to refresh the page, the items inputted by the user will persist.

During the project, I faced several challenges. Integrating the startup HTML and CSS with JavaScript functionality required careful coordination. Managing dynamic color changes for past, present, and future time blocks was tricky due to precise time calculations. Handling local storage for saving and retrieving descriptions posed a challenge, and syncing manipulations during page refreshes required thorough testing. Overcoming these challenges involved debugging, effective communication, and iterative testing for a robust final product.

## Web URL

https://sajjadalgburi.github.io/Busy-Schedule/

## Screenshot UI

![Screenshot of Web](assets/screenshot/Screenshot%202023-12-14%20162553.png)

## Installation

Steps:

Step 1: Create a GitHub Repository

    - Log in to your GitHub account.
    - Click on the "+" sign in the top right corner and choose "New repository."
    - Fill in the repository name, description, add README.md file.
    - Click on "Create repository."

Step 2: Open Terminal or Command Prompt

Step 3: Navigate to the Project Directory - Use the cd command to navigate to the directory where you want to store your project.

        - cd path/to/your/project

Step 4: Initialize Git in the Local Directory

    - git init

Step 5: Connect Local Repository to GitHub Repository - Use the following command to add a remote connection to your GitHub repository. Replace your-username with your GitHub username and your-repo with the name of your GitHub repository:

        - git remote add origin https://github.com/your-username/your-repo.git

Step 6: Verify the Remote Connection - Confirm that the remote connection has been added successfully by running:

        - git remote -v

Step 7: Add and Commit Changes - Add your files to the local repository and make an initial commit:

        - git add .
        - git commit -m "Initial commit"

Step 8: Push to GitHub - Push your local repository to GitHub:

    - git pull --rebase origin main
    - git push -u origin main

Step 9: Verify on GitHub - Visit your GitHub repository in a web browser to confirm that your local files are now on GitHub.

/
/

If you're running into any issues follow the Youtube video below instead!!
Link to the video: https://www.youtube.com/watch?v=qMck70tLDuo

/
/
