# Budgie
A web application that budgets your salary!


### Some GitHub Commands:

#### To download the repository on your computer:
1) Open terminal
2) Click the green button that says "Clone or download" on the Budgie repository home page in github
3) It should expand to a small window, then click on the little clipboard icon. This copies the link.
4) On terminal, go into the directory you want to save this repository in (ie. sbertrand/Documents/)
5) type: git clone [and then paste the link]. Hit enter. Now you can open this in your IDE that you use to edit your code.

#### Create your own branch:
1) Open terminal
2) Go into the repository 
3) type: git checkout -b [yourname]-workshop --> (ie. git checkout -b steph-workshop).  This will create your new branch and automatically switch you into it.
4) OPTIONAL - type: git checkout [yourname]-workshop --> This switches you into your branch so that you're working from your personal branch.
To switch to master (though you shouldn't ever need to), type: git checkout master

#### Every time you want to work on the project:
1) Open terminal
2) Go into the repository (ie. sbertrand/Documents/Budgie)
3) type: git fetch
4) type: git pull

#### How to save changes/push your code:
1) type: git add . --> This adds all changes
2) type: git commit -m "[description of the work you did/changed" --> This is like an intermediary save step
3) type: git push  --> This pushes your code to the github repository online making it ready to merge onto the master branch
4) Go to the github repository Budgie on github.com 
5) Create a pull request:
6) Go to the github repository Budgie on github.com
7) Go to the "Pull requests" tab
8) Then there should be a green button available that says "New Pull Request".  Click that.
9) Make sure that the first button says "base: master" and the second button says "compare: master"
10) If there are no conflicts and it says, "Ready to be merged", then click "Merge"
11) If it gives you an option to close your branch, ignore it, we're just going to keep our branches throughout the project and merge the entire time
12) **NOTE: You should create a pull request at the end of the day when you're happy with all the work you did and are ready for it to be merged. So push often (it will collect the pushes), and pull request/merge at the end of the day.
