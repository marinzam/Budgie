# Budgie
A web application that budgets your salary!

Some GitHub Commands:
To download the repository on your computer:

    Open terminal
    Click the green button that says "Clone or download" on the Budgie repository home page in github
    It should expand to a small window, then click on the little clipboard icon. This copies the link.
    On terminal, go into the directory you want to save this repository in (ie. sbertrand/Documents/)
    type: git clone [and then paste the link]. Hit enter. Now you can open this in your IDE that you use to edit your code.

Create your own branch:

    Open terminal
    Go into the repository
    type: git checkout -b [yourname]-workshop --> (ie. git checkout -b steph-workshop). This will create your new branch and automatically switch you into it.
    type: git push
    The result of this will show "fatal:..." and another line that starts with "git push....". Copy the "git push..." line into your terminal and enter. This sets the connection between your repo in your terminal and the repo on github.com.
    OPTIONAL - type: git checkout [yourname]-workshop --> This switches you into your branch so that you're working from your personal branch. To switch to master (though you shouldn't ever need to), type: git checkout master

Every time you want to work on the project (VERY IMPORTANT):

    Open terminal
    Go into the repository (ie. sbertrand/Documents/Budgie)
    type: git fetch
    type: git pull --> This pulls everybody's changes that they've made so you're working on the most up-to-date version

How to save changes/push your code:

    type: git add . --> This adds all changes
    type: git commit -m "[description of the work you did/changed]" --> This is like an intermediary save step
    type: git push --> This pushes your code to the github repository online making it ready to merge onto the master branch
    Go to the github repository Budgie on github.com
    Create a pull request:
    Go to the "Pull requests" tab
    Then there should be a green button available that says "New Pull Request". Click that.
    Make sure that the first button says "base: master" and the second button says "compare: [your branch]"
    If there are no conflicts and it says, "Ready to be merged", then click "Merge"
    If it gives you an option to close your branch, ignore it, we're just going to keep our branches throughout the project and merge the entire time
    **NOTE: You should create a pull request at the end of the day when you're happy with all the work you did and are ready for it to be merged. So push often (it will collect the pushes), and pull request/merge at the end of the day.

Extras

    type: git status --> so you can see which files you have changed
