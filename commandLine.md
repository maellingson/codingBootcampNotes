Command Lines
##in the brackets- they're called arguments

##pwd
Lists the present working directory

##cd <directoryname>
Changes the present working directory

#mkdir
Makes a new directory called directory name in the PWD

##touch <filename>
Makes a new file in the PWD called filename

#ls <direcotryname opitonal>
Lists all files in the current working directory or directory name

##clear
Clears the text off the terminal

##rmdir <directoryname>
Removes a directory. A direcory name is not optional.

##rm <filename>
Remove a file

##Special Directories (put cd before each of the commands)
~ - home
.. - up a level
. - same level
/ - root of your drive/root directory (when you get to the top)

#Git Commands

##clone <repoUrl>
Downloads repository to your local PwD

##init
Starts a local git repositiory

##add <files>
Tracks file or folder (you can use "git add ." ) It will track everything under your present working directory. (May not want to do this for mac b/c it adds extra files that makes things run slower)

##commit <-m> <message>
Message tells future you what the file changes were. Takes a snapshot of the directory. You can make additional commits. 

##push <server?> <branch?>
Sends the commits to the server. Use this after you've made local commits and it will put all your files up on github

##pull <server?><branch?>
Receives commits fro the server

#Git Commands

When pushing to git hub follow these steps:

1. git add <filename>
    -This adds Filename tothe changeList
    -use git add . or git add A~ to add everything to the changeList

2. git commit -m "some commit message"
    -if you forget -m you will be in vi (a command line text editor)
    Type "i", then type your message, then press "esc", then ":wq" and finally enter.

3. git push <server><branch>
    you can usually just do "git push"
    otherwise, use git push origin master
    your server is almost always called origin
    your branch will not always be called master

OPTIONAL: git pull
    -Use this only if there are other changes not already in your local copy
    





