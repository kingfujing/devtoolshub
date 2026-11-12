---
title: "Git Commands Cheat Sheet: The Commands You Actually Use Daily"
description: "A practical Git reference: essential commands, staging and committing, branching and merging, undoing mistakes, stashes, remotes, tags, and the commands that save you when things go wrong."
tags: [webdev, git, tutorial, beginners]
canonical_url: https://devtoolshub.cloud/blog/git-commands-cheat-sheet
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/git-commands-cheat-sheet) — free, privacy-first online tools for developers.

Git is the backbone of modern software development, but its command surface is vast. Even experienced developers reach for documentation daily. This cheat sheet covers the essential Git commands you'll use every day — from initializing a repository to interactive rebase and everything in between.

Each section groups related commands with common options, flags, and practical examples. Bookmark this page and come back whenever you need to remember the exact syntax for a tricky operation.

> ⚡ **Quick Tip**
>
> Use `git status` constantly. It's the safest command in Git — it tells you exactly what's going on without changing anything.

## 1. Setup & Configuration

Configure your Git identity and preferences. These are the first commands you run on a new machine.

| Command | Description |
|---|---|
| `git init` | Create a new Git repository in the current directory |
| `git clone <url>` | Clone an existing repository from a remote URL |
| `git config --global user.name "Name"` | Set your global Git username for all commits |
| `git config --global user.email "email@example.com"` | Set your global Git email for all commits |
| `git config --global core.editor "code --wait"` | Set VS Code as your Git editor |
| `git config --global init.defaultBranch main` | Set default branch name to "main" instead of "master" |
| `git config --list` | Show all configured Git settings |
| `git config --global alias.st status` | Create an alias: `git st` = `git status` |

**Pro tip:** Set up aliases early. Common ones include `co` for `checkout`, `br` for `branch`, `ci` for `commit`, and `lg` for a custom pretty log.

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all --decorate"
```

## 2. Staging & Committing

The core workflow: make changes, stage them, commit them. Master these commands to keep your history clean and meaningful.

| Command | Description |
|---|---|
| `git status` | Show working tree status — modified, staged, and untracked files |
| `git add <file>` | Stage a specific file for commit |
| `git add .` | Stage all changes in current directory (new, modified, deleted) |
| `git add -p` | Stage changes interactively — choose which hunks to stage (patches) |
| `git commit -m "message"` | Commit staged changes with an inline message |
| `git commit -am "message"` | Stage all tracked files and commit in one step (skips `git add`) |
| `git commit --amend` | Amend the last commit with new changes or a new message |
| `git restore <file>` | Discard uncommitted changes in a working file (modern alternative to checkout) |
| `git restore --staged <file>` | Unstage a file but keep the changes in working directory |
| `git rm <file>` | Remove a file from both working tree and staging area |
| `git mv <old> <new>` | Rename or move a file and stage the change |

> 💡 **Interactive Staging**
>
> `git add -p` lets you stage parts of a file. This is invaluable for separating refactoring from feature work in a single file. Press **y** to stage a hunk, **n** to skip, **s** to split, **e** to manually edit.

## 3. Branching

Branches are Git's superpower. Create, switch, list, and manage branches efficiently.

| Command | Description |
|---|---|
| `git branch` | List local branches. Current branch highlighted with * |
| `git branch -a` | List all branches — local and remote tracking |
| `git branch <name>` | Create a new branch at current HEAD (does not switch to it) |
| `git checkout <branch>` | Switch to an existing branch |
| `git checkout -b <name>` | Create and switch to a new branch in one step |
| `git switch <branch>` | Modern alternative to checkout — switch branches cleanly |
| `git switch -c <name>` | Create and switch to a new branch (modern `-b` equivalent) |
| `git branch -d <name>` | Delete a branch (only if fully merged) |
| `git branch -D <name>` | Force delete a branch even if not merged |
| `git branch -m <old> <new>` | Rename a branch |
| `git show-branch` | Show branches and their commits with ASCII graph |

## 4. Remote Repositories

Working with remotes — GitHub, GitLab, Bitbucket, or your own server. Push, pull, fetch, and manage remote connections.

| Command | Description |
|---|---|
| `git remote -v` | List remote repositories with fetch/push URLs |
| `git remote add origin <url>` | Add a new remote named "origin" |
| `git remote remove <name>` | Remove a remote connection |
| `git remote rename <old> <new>` | Rename a remote |
| `git fetch <remote>` | Download objects and refs from remote without merging |
| `git pull` | Fetch from remote and merge into current branch (shortcut) |
| `git pull --rebase` | Fetch and rebase instead of merge (cleaner history) |
| `git push` | Push commits to the remote tracking branch |
| `git push -u origin <branch>` | Push a new branch and set up tracking (`-u` = `--set-upstream`) |
| `git push --force` | Force push (use with extreme caution — prefer `--force-with-lease`) |
| `git push --force-with-lease` | Safer force push — refuses if remote has new commits you haven't seen |
| `git push -d origin <branch>` | Delete a remote branch |

> ⚠️ **Force Push Safety**
>
> Always use `--force-with-lease` instead of `--force`. It checks that the remote branch is in the state you expect before overwriting. Plain `--force` can silently destroy a collaborator's work.

## 5. Undoing & Amending

Everyone makes mistakes. Here's how to undo them safely at every stage.

| Command | Description |
|---|---|
| `git restore <file>` | Discard unstaged changes in working directory |
| `git restore --staged <file>` | Unstage a file (keep working changes) |
| `git reset HEAD~1` | Undo last commit, keep changes staged |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged (same as above) |
| `git reset --mixed HEAD~1` | Undo last commit, keep changes unstaged (default behavior) |
| `git reset --hard HEAD~1` | Undo last commit and discard all changes completely |
| `git revert <commit>` | Create a new commit that undoes a specific commit (safe for shared history) |
| `git revert HEAD` | Undo the most recent commit with a new inverse commit |
| `git commit --amend -m "new msg"` | Change the message of the last commit |
| `git commit --amend --no-edit` | Add staged changes to last commit without changing message |

> 💡 **Reset vs Revert**
>
> **Reset** rewrites history — use only on local commits that haven't been pushed. **Revert** creates a new commit that undoes the old one — safe for commits already pushed to shared branches.

## 6. Merging

Combine work from different branches. Understand merge vs rebase, and how to resolve conflicts.

| Command | Description |
|---|---|
| `git merge <branch>` | Merge the specified branch into the current branch |
| `git merge --no-ff <branch>` | Merge with a merge commit even if fast-forward is possible |
| `git merge --squash <branch>` | Merge all commits from branch into one single commit (no merge history) |
| `git rebase <branch>` | Reapply current commits on top of another branch (linear history) |
| `git rebase -i HEAD~3` | Interactive rebase: squash, reword, reorder, drop commits |
| `git cherry-pick <commit>` | Apply a specific commit from another branch onto current branch |
| `git mergetool` | Launch the configured merge tool to resolve conflicts |
| `git merge --abort` | Abort current merge and restore pre-merge state |
| `git rebase --abort` | Abort current rebase and restore pre-rebase state |
| `git rebase --continue` | Continue rebase after resolving conflicts |

**Interactive rebase** is one of Git's most powerful features. Use it to clean up commits before merging:

```bash
# Squash last 3 commits into one
git rebase -i HEAD~3

# Available actions in the editor:
# pick   - use commit as-is
# reword - use commit but edit message
# squash - combine with previous commit
# fixup  - like squash but discard message
# drop   - remove commit entirely
# edit   - stop to amend the commit
```

## 7. Stashing

Temporarily save uncommitted work when you need to switch branches or pull in changes. Your changes are saved in a stack and can be reapplied later.

| Command | Description |
|---|---|
| `git stash` | Stash all uncommitted changes (tracked files only) |
| `git stash push -m "message"` | Stash with a descriptive message |
| `git stash -u` | Stash including untracked files (`--include-untracked`) |
| `git stash -a` | Stash all files including ignored ones (`--all`) |
| `git stash list` | List all stashes in the stack |
| `git stash pop` | Apply the most recent stash and remove it from the stack |
| `git stash apply` | Apply the most recent stash but keep it in the stack |
| `git stash apply stash@{2}` | Apply a specific stash by index |
| `git stash drop stash@{n}` | Remove a specific stash without applying it |
| `git stash clear` | Remove all stashes (irreversible) |
| `git stash show -p` | Show the diff of the most recent stash |
| `git stash branch <name>` | Create a new branch from a stash and drop the stash |

## 8. Logs & History

Explore commit history, find changes, track down bugs, and understand who changed what and when.

| Command | Description |
|---|---|
| `git log` | Show commit log with author, date, and message |
| `git log --oneline` | Compact log — one line per commit (hash + message) |
| `git log --graph --oneline --all` | ASCII graph of branch structure with compact log |
| `git log --oneline -n 5` | Show only the last 5 commits |
| `git log --author="name"` | Filter commits by author |
| `git log --grep="pattern"` | Search commit messages for a pattern |
| `git log -p` | Show full diff with each commit (very verbose) |
| `git log --stat` | Show commit metadata plus summary of changed files |
| `git diff` | Show unstaged changes in working tree |
| `git diff --staged` | Show staged changes (what will be committed) |
| `git diff A..B` | Show changes between two commits or branches |
| `git show <commit>` | Show a specific commit with its diff |
| `git blame <file>` | Show who last modified each line of a file and when |
| `git shortlog -sn` | Summary of commits per author, sorted by count |

A useful alias for a beautiful, compact log view:

```bash
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all
```

> 🎯 **Quick Reference Card**
>
> **Setup**
> - `git init`
> - `git clone <url>`
> - `git config --global user.name`
>
> **Daily**
> - `git status`
> - `git add -p`
> - `git commit -m`
> - `git push`
>
> **Branches**
> - `git switch -c <name>`
> - `git merge <branch>`
> - `git rebase -i HEAD~3`
>
> **Fix Mistakes**
> - `git restore <file>`
> - `git commit --amend`
> - `git revert HEAD`
> - `git stash`

## Common Mistakes & How to Avoid Them

These are the mistakes I see most often in pull requests and on incident calls — and the exact commands to recover from them before they cost you an afternoon.

- **Committing secrets to the repository.** A stray `.env` file or API key in a commit is the most expensive mistake in git. Rotate the credential immediately, then scrub history with `git filter-repo --path .env --invert-paths`. Deleting the file and committing again is not enough — the secret stays in history.
- **Trusting `git commit -am` to catch everything.** The `-a` flag only stages changes to already tracked files; brand-new files are silently skipped. That's how "forgot to add file" commits happen. Run `git status` before committing and review hunks with `git add -p`.
- **Force-pushing to shared branches.** A bare `git push --force` rewrites history and can destroy your teammates' commits. Use `git push --force-with-lease` instead — it aborts if the remote contains commits you haven't seen.
- **Amending commits that were already pushed.** `git commit --amend` is a local operation. Amending a pushed commit creates divergent history and a confusing merge on the next pull. If the commit is on the remote, use `git revert <sha>` to add a new commit that undoes it.
- **Deleting both sides of a merge conflict.** Stripping everything between the `<<<<<<<` and `>>>>>>>` markers often discards both versions. Read both sides, decide what to keep, then verify with `git diff --check` that no conflict markers remain before staging.

## Frequently Asked Questions

### How do I undo the last commit but keep my changes?

Run `git reset --soft HEAD~1` to undo the commit while keeping your changes staged, or `git reset HEAD~1` to unstage them. If the commit was already pushed, don't rewrite history — use `git revert HEAD` to add a new commit that undoes it. For a simple message fix, `git commit --amend` is enough.

### How do I resolve merge conflicts?

Run `git status` to list conflicted files. Open each one, remove the `<<<<<<<`, `=======`, and `>>>>>>>` markers, and keep the version(s) you want. Stage with `git add`, then finish with `git commit`. To bail out entirely, run `git merge --abort`. To take one side wholesale: `git checkout --ours <file>` or `git checkout --theirs <file>`.

### What's the difference between git fetch and git pull?

`git fetch` downloads new commits into remote-tracking branches (like `origin/main`) without touching your working tree. `git pull` is fetch followed by a merge — or a rebase with `git pull --rebase`. Fetch when you want to inspect changes first; pull when you're ready to integrate them into your branch.

### How do I recover a deleted branch or lost commits?

Run `git reflog` to see every HEAD movement, find the SHA of the commit you lost, then recreate the branch with `git branch <name> <sha>` or check it out directly. Reflog entries expire after about 90 days (default), so act quickly before garbage collection removes them.

### Why does git keep asking me for my password?

You're using HTTPS without a credential helper. Set one with `git config --global credential.helper store` (or `cache` for temporary caching), or switch to SSH keys generated with `ssh-keygen`. For HTTPS, GitHub and GitLab now require personal access tokens instead of account passwords.

**Related Tools:** [Regex Tester](https://devtoolshub.cloud/tools/regex-tester) · [Base64 Encoder/Decoder](https://devtoolshub.cloud/tools/base64) · [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter)

If you found this cheat sheet useful, bookmark [DevToolsHub](https://devtoolshub.cloud) — it's a free, privacy-first toolkit for developers with no sign-ups and no tracking: regex testing, Base64 and JSON utilities, timestamp conversion, JWT decoding, UUID generation, and more. All tools run entirely in your browser.
