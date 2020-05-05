
# Git Good Practice

## Git

Git is one of the most popular version control tools in software industry nowadays. It is a powerful tool that can make your project collaboration much easier. However, it is also flexible enough to make your work a nightmare. I have seen people spend days on figuring out how to solve the code conflict or which commit is the one they want to keep. For those who are not so sure about what is actually behind every git command(or GUI function), it is really hard to find the problem of the chaos. Especially when there are many commits made by your teammates in a previous push and you now have to push your code by solving conflicts.

Well, here I am going to talk about one of the good practices that I have been using with my teammates which turns out to be pretty handy.

## Initiate Repository

The first goal is that you need to have three repositories of a project: a public repository (where the golden version of the code is), an online personal repository(e.g. GitHub/enterprise), and a local repository which is on your working computer. Here is how you can make this happen.

- Initiate a public repo on cloud. (In my case, I am using GitHub enterprise) For this repo, only a few people who normally are tech leads on the team have the privilege to merge the code. This can also ensure that other developers will not be able to push the code directly to this repository.
- Fork the public repo as your personal repo. (In my case, this is my personal account on GitHub enterprise)
- On my local machine, I clone the repo from my personal repo.

```bash
$ git clone <PERSONAL ONLINE REPO URL>
```

At this point, if you check your local repo in your project directory by running the following command, then you will be able to see your personal online remote repository which you just cloned from.
```bash
$ git remote -v
```

And then you need to add the public repo on your local as well. Here I name the public remote repository as "upstream". And, of course, you can name it whatever you want.

```bash
$ git remote add upstream <PUBLIC REPO URL>
```

Now if you check your remote repository again, you will see that now you have two remote repositories: origin and upstream. And each of them has "fetch" and "push".
Till now, you have all the required repositories. The workflow can be summarized as:
- ALWAYS pull the code from upstream
- ALWAYS push the code to origin
- ALWAYS raise a pull request from origin to upstream

```
upstream  <----------  origin
       \                 ^
        \                |
         \               |
          \              |
           --------->  local
```

## Start Working on A New Branch

As a good practice, you should NEVER EVER commit anything to your local master branch. This is how you can keep your local master clean and have the up-to-date working code. That being said, whatever you will be working on, you need to create a working branch. And give it a meaningful name. Normally the brief description of the feature/objective/user story you will be working on.

```bash
$ git checkout -b <WORKING BRANCH NAME>
```

And now you can start implementation.

## Solve Your Merge Conflicts and Push Your Changes

After the implementation is done, you are about to push your code. Now you need to commit your code first:

```bash
$ git add -A
```

Or:

```bash
$ git add <ALL THE FILES THAT YOU WANT TO STAGE>
```

And then:

```bash
$ git commit -m "<YOUR COMMIT MESSAGE>"
```

Or:

``` bash
$ git commit
```

which will open VIM for you to put more details in the commit message.(Including commit message title and content)

Now you have all your work commit to your local repo. What you have to do now is update your repository because, during your implementation, the public repo has been possibly changed. That means other people might have pushed their code and that code has been merged to the public repo. And the updated code version might break your implementation. So to avoid surprises, you need to update your base code.

Switch back to master, which is most likely out of date, and pull the latest code to your local machine:

```bash
$ git checkout master
$ git pull upstream master
```

If you follow the previous steps that don't touch your master, you won't have any problem to pull the latest code to your local. Optionally, you can update your origin master branch as well:

```bash
$ git push origin master
```

**Note** that this is normally the only place you use "push"

After this, you switch back to your master, and then rebase it:

```bash
$ git checkout <YOUR WORKING BRANCH>
$ git rebase master
```

What it does is that it puts your changes on the top of updated master, meaning it puts your commits on other people's commits. As to why you don't directly pull from upstream master directly, it is explained very well here and here. These are very good articles. I am not going to discuss it here. However, I would like to point out that if you pull directly from upstream master from your working branch, then when you have conflicts, your commits are mixed with other people's commits based on the commit's time. That makes it really hard if you somehow want to revert the commit or something to solve conflicts or whatnot.

Now you will probably get merge conflict. That is perfectly normal. What you need to do is to solve the conflicts and complete rebase. I personally like to solve the conflict by hand. Like I will open the IDE/editor to solve the actual conflicts. The conflicts in the code are nicely marked out by Git. After solving the conflicts, do:

```bash
$ git add .
$ git rebase --continue
```

If Git shows you another merge conflict, you just repeat steps above until it succeeds.

Now you are good to go! Push your code to origin:

```bash
$ git push origin <YOUR WORKING BRANCH>
```


## Raise A Pull Request

Now everything is easy. You go to either your online personal repo or public repo and from there, you will see a nice green button "Compare & Create pull request". Note that normally your are raising a pull request from your origin `<YOUR WORK BRANCH>` to upstream master branch. If you have multiple branches on upstream, such as different features per branch, then just raise the pull request to the target branch on upstream, which is again the public repo. Click it and put necessary information in the message box and create the pull request.

## Update Your Repo Again

After the code is merged, go to the local master and pull the updated code again.

## Final Thoughts

This seems a little more work, but it is really a good practice I highly recommend it since it can keep your workflow clean and easy. Once you get used to it, you will find that working on the same code is never be a problem. And the public master will always be clean and shippable.

All thoughts, opinions are welcome. I like to discuss how you guys are using Git and how you can make it a nice tool to increase the productivity and enhance the team collaboration.
