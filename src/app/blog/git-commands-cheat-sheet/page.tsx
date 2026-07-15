import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Commands Cheat Sheet — DevToolsHub",
  description:
    "Essential Git commands reference for daily development. From git init to interactive rebase — commands, options, and practical examples.",
  openGraph: {
    title: "Git Commands Cheat Sheet: Essential Git Reference for Developers",
    description:
      "Every Git command you need for daily work. Setup, staging, branching, remotes, undoing changes, merging, stashing, and logs — with practical examples.",
    type: "article",
  },
};

export default function GitCommandsCheatSheet() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Git Commands Cheat Sheet
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>10 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          Git is the backbone of modern software development, but its command surface is vast.
          Even experienced developers reach for documentation daily. This cheat sheet covers
          the essential Git commands you&apos;ll use every day — from initializing a repository
          to interactive rebase and everything in between.
        </p>
        <p>
          Each section groups related commands with common options, flags, and practical examples.
          Bookmark this page and come back whenever you need to remember the exact syntax for
          a tricky operation.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">⚡ Quick Tip</p>
          <p className="text-sm">
            Use <code className="text-xs">git status</code> constantly. It&apos;s the safest command
            in Git — it tells you exactly what&apos;s going on without changing anything.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          1. Setup &amp; Configuration
        </h2>
        <p>
          Configure your Git identity and preferences. These are the first commands you run
          on a new machine.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git init</td>
                <td className="p-3 border border-[#334155]">Create a new Git repository in the current directory</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git clone &lt;url&gt;</td>
                <td className="p-3 border border-[#334155]">Clone an existing repository from a remote URL</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --global user.name &quot;Name&quot;</td>
                <td className="p-3 border border-[#334155]">Set your global Git username for all commits</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --global user.email &quot;email@example.com&quot;</td>
                <td className="p-3 border border-[#334155]">Set your global Git email for all commits</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --global core.editor &quot;code --wait&quot;</td>
                <td className="p-3 border border-[#334155]">Set VS Code as your Git editor</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --global init.defaultBranch main</td>
                <td className="p-3 border border-[#334155]">Set default branch name to &quot;main&quot; instead of &quot;master&quot;</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --list</td>
                <td className="p-3 border border-[#334155]">Show all configured Git settings</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git config --global alias.st status</td>
                <td className="p-3 border border-[#334155]">Create an alias: <code className="text-xs">git st</code> = <code className="text-xs">git status</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Pro tip:</strong> Set up aliases early. Common ones include{" "}
          <code className="text-xs">co</code> for <code className="text-xs">checkout</code>,{" "}
          <code className="text-xs">br</code> for <code className="text-xs">branch</code>,{" "}
          <code className="text-xs">ci</code> for <code className="text-xs">commit</code>, and{" "}
          <code className="text-xs">lg</code> for a custom pretty log.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all --decorate"`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          2. Staging &amp; Committing
        </h2>
        <p>
          The core workflow: make changes, stage them, commit them. Master these commands
          to keep your history clean and meaningful.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git status</td>
                <td className="p-3 border border-[#334155]">Show working tree status — modified, staged, and untracked files</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git add &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Stage a specific file for commit</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git add .</td>
                <td className="p-3 border border-[#334155]">Stage all changes in current directory (new, modified, deleted)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git add -p</td>
                <td className="p-3 border border-[#334155]">Stage changes interactively — choose which hunks to stage (patches)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git commit -m &quot;message&quot;</td>
                <td className="p-3 border border-[#334155]">Commit staged changes with an inline message</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git commit -am &quot;message&quot;</td>
                <td className="p-3 border border-[#334155]">Stage all tracked files and commit in one step (skips <code className="text-xs">git add</code>)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git commit --amend</td>
                <td className="p-3 border border-[#334155]">Amend the last commit with new changes or a new message</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git restore &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Discard uncommitted changes in a working file (modern alternative to checkout)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git restore --staged &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Unstage a file but keep the changes in working directory</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git rm &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Remove a file from both working tree and staging area</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git mv &lt;old&gt; &lt;new&gt;</td>
                <td className="p-3 border border-[#334155]">Rename or move a file and stage the change</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">💡 Interactive Staging</p>
          <p className="text-sm text-[#cbd5e1]">
            <code className="text-xs">git add -p</code> lets you stage parts of a file. This is
            invaluable for separating refactoring from feature work in a single file. Press{" "}
            <strong>y</strong> to stage a hunk, <strong>n</strong> to skip,{" "}
            <strong>s</strong> to split, <strong>e</strong> to manually edit.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          3. Branching
        </h2>
        <p>
          Branches are Git&apos;s superpower. Create, switch, list, and manage branches
          efficiently.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch</td>
                <td className="p-3 border border-[#334155]">List local branches. Current branch highlighted with *</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch -a</td>
                <td className="p-3 border border-[#334155]">List all branches — local and remote tracking</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Create a new branch at current HEAD (does not switch to it)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git checkout &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Switch to an existing branch</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git checkout -b &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Create and switch to a new branch in one step</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git switch &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Modern alternative to checkout — switch branches cleanly</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git switch -c &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Create and switch to a new branch (modern <code className="text-xs">-b</code> equivalent)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch -d &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Delete a branch (only if fully merged)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch -D &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Force delete a branch even if not merged</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git branch -m &lt;old&gt; &lt;new&gt;</td>
                <td className="p-3 border border-[#334155]">Rename a branch</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git show-branch</td>
                <td className="p-3 border border-[#334155]">Show branches and their commits with ASCII graph</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          4. Remote Repositories
        </h2>
        <p>
          Working with remotes — GitHub, GitLab, Bitbucket, or your own server. Push, pull,
          fetch, and manage remote connections.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git remote -v</td>
                <td className="p-3 border border-[#334155]">List remote repositories with fetch/push URLs</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git remote add origin &lt;url&gt;</td>
                <td className="p-3 border border-[#334155]">Add a new remote named &quot;origin&quot;</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git remote remove &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Remove a remote connection</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git remote rename &lt;old&gt; &lt;new&gt;</td>
                <td className="p-3 border border-[#334155]">Rename a remote</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git fetch &lt;remote&gt;</td>
                <td className="p-3 border border-[#334155]">Download objects and refs from remote without merging</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git pull</td>
                <td className="p-3 border border-[#334155]">Fetch from remote and merge into current branch (shortcut)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git pull --rebase</td>
                <td className="p-3 border border-[#334155]">Fetch and rebase instead of merge (cleaner history)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git push</td>
                <td className="p-3 border border-[#334155]">Push commits to the remote tracking branch</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git push -u origin &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Push a new branch and set up tracking (<code className="text-xs">-u</code> = <code className="text-xs">--set-upstream</code>)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git push --force</td>
                <td className="p-3 border border-[#334155]">Force push (use with extreme caution — prefer <code className="text-xs">--force-with-lease</code>)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git push --force-with-lease</td>
                <td className="p-3 border border-[#334155]">Safer force push — refuses if remote has new commits you haven&apos;t seen</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git push -d origin &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Delete a remote branch</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ Force Push Safety</p>
          <p className="text-sm text-[#cbd5e1]">
            Always use <code className="text-xs">--force-with-lease</code> instead of{" "}
            <code className="text-xs">--force</code>. It checks that the remote branch is in the
            state you expect before overwriting. Plain <code className="text-xs">--force</code> can
            silently destroy a collaborator&apos;s work.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          5. Undoing &amp; Amending
        </h2>
        <p>
          Everyone makes mistakes. Here&apos;s how to undo them safely at every stage.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git restore &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Discard unstaged changes in working directory</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git restore --staged &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Unstage a file (keep working changes)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git reset HEAD~1</td>
                <td className="p-3 border border-[#334155]">Undo last commit, keep changes staged</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git reset --soft HEAD~1</td>
                <td className="p-3 border border-[#334155]">Undo last commit, keep changes staged (same as above)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git reset --mixed HEAD~1</td>
                <td className="p-3 border border-[#334155]">Undo last commit, keep changes unstaged (default behavior)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git reset --hard HEAD~1</td>
                <td className="p-3 border border-[#334155]">Undo last commit and discard all changes completely</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git revert &lt;commit&gt;</td>
                <td className="p-3 border border-[#334155]">Create a new commit that undoes a specific commit (safe for shared history)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git revert HEAD</td>
                <td className="p-3 border border-[#334155]">Undo the most recent commit with a new inverse commit</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git commit --amend -m &quot;new msg&quot;</td>
                <td className="p-3 border border-[#334155]">Change the message of the last commit</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git commit --amend --no-edit</td>
                <td className="p-3 border border-[#334155]">Add staged changes to last commit without changing message</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">💡 Reset vs Revert</p>
          <p className="text-sm text-[#cbd5e1]">
            <strong>Reset</strong> rewrites history — use only on local commits that haven&apos;t
            been pushed. <strong>Revert</strong> creates a new commit that undoes the old one —
            safe for commits already pushed to shared branches.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          6. Merging
        </h2>
        <p>
          Combine work from different branches. Understand merge vs rebase, and how to
          resolve conflicts.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git merge &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Merge the specified branch into the current branch</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git merge --no-ff &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Merge with a merge commit even if fast-forward is possible</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git merge --squash &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Merge all commits from branch into one single commit (no merge history)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git rebase &lt;branch&gt;</td>
                <td className="p-3 border border-[#334155]">Reapply current commits on top of another branch (linear history)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git rebase -i HEAD~3</td>
                <td className="p-3 border border-[#334155]">Interactive rebase: squash, reword, reorder, drop commits</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git cherry-pick &lt;commit&gt;</td>
                <td className="p-3 border border-[#334155]">Apply a specific commit from another branch onto current branch</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git mergetool</td>
                <td className="p-3 border border-[#334155]">Launch the configured merge tool to resolve conflicts</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git merge --abort</td>
                <td className="p-3 border border-[#334155]">Abort current merge and restore pre-merge state</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git rebase --abort</td>
                <td className="p-3 border border-[#334155]">Abort current rebase and restore pre-rebase state</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git rebase --continue</td>
                <td className="p-3 border border-[#334155]">Continue rebase after resolving conflicts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Interactive rebase</strong> is one of Git&apos;s most powerful features. Use it
          to clean up commits before merging:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`# Squash last 3 commits into one
git rebase -i HEAD~3

# Available actions in the editor:
# pick   - use commit as-is
# reword - use commit but edit message
# squash - combine with previous commit
# fixup  - like squash but discard message
# drop   - remove commit entirely
# edit   - stop to amend the commit`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          7. Stashing
        </h2>
        <p>
          Temporarily save uncommitted work when you need to switch branches or pull in
          changes. Your changes are saved in a stack and can be reapplied later.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash</td>
                <td className="p-3 border border-[#334155]">Stash all uncommitted changes (tracked files only)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash push -m &quot;message&quot;</td>
                <td className="p-3 border border-[#334155]">Stash with a descriptive message</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash -u</td>
                <td className="p-3 border border-[#334155]">Stash including untracked files (<code className="text-xs">--include-untracked</code>)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash -a</td>
                <td className="p-3 border border-[#334155]">Stash all files including ignored ones (<code className="text-xs">--all</code>)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash list</td>
                <td className="p-3 border border-[#334155]">List all stashes in the stack</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash pop</td>
                <td className="p-3 border border-[#334155]">Apply the most recent stash and remove it from the stack</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash apply</td>
                <td className="p-3 border border-[#334155]">Apply the most recent stash but keep it in the stack</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash apply stash@{2}</td>
                <td className="p-3 border border-[#334155]">Apply a specific stash by index</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash drop {'stash@{n}'}</td>
                <td className="p-3 border border-[#334155]">Remove a specific stash without applying it</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash clear</td>
                <td className="p-3 border border-[#334155]">Remove all stashes (irreversible)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash show -p</td>
                <td className="p-3 border border-[#334155]">Show the diff of the most recent stash</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git stash branch &lt;name&gt;</td>
                <td className="p-3 border border-[#334155]">Create a new branch from a stash and drop the stash</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          8. Logs &amp; History
        </h2>
        <p>
          Explore commit history, find changes, track down bugs, and understand who changed
          what and when.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git log</td>
                <td className="p-3 border border-[#334155]">Show commit log with author, date, and message</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --oneline</td>
                <td className="p-3 border border-[#334155]">Compact log — one line per commit (hash + message)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --graph --oneline --all</td>
                <td className="p-3 border border-[#334155]">ASCII graph of branch structure with compact log</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --oneline -n 5</td>
                <td className="p-3 border border-[#334155]">Show only the last 5 commits</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --author=&quot;name&quot;</td>
                <td className="p-3 border border-[#334155]">Filter commits by author</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --grep=&quot;pattern&quot;</td>
                <td className="p-3 border border-[#334155]">Search commit messages for a pattern</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git log -p</td>
                <td className="p-3 border border-[#334155]">Show full diff with each commit (very verbose)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git log --stat</td>
                <td className="p-3 border border-[#334155]">Show commit metadata plus summary of changed files</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git diff</td>
                <td className="p-3 border border-[#334155]">Show unstaged changes in working tree</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git diff --staged</td>
                <td className="p-3 border border-[#334155]">Show staged changes (what will be committed)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git diff A..B</td>
                <td className="p-3 border border-[#334155]">Show changes between two commits or branches</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git show &lt;commit&gt;</td>
                <td className="p-3 border border-[#334155]">Show a specific commit with its diff</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">git blame &lt;file&gt;</td>
                <td className="p-3 border border-[#334155]">Show who last modified each line of a file and when</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">git shortlog -sn</td>
                <td className="p-3 border border-[#334155]">Summary of commits per author, sorted by count</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A useful alias for a beautiful, compact log view:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all`}</code></pre>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Quick Reference Card</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">Setup</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><code className="text-xs">git init</code></li>
                <li><code className="text-xs">git clone &lt;url&gt;</code></li>
                <li><code className="text-xs">git config --global user.name</code></li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">Daily</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><code className="text-xs">git status</code></li>
                <li><code className="text-xs">git add -p</code></li>
                <li><code className="text-xs">git commit -m</code></li>
                <li><code className="text-xs">git push</code></li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">Branches</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><code className="text-xs">git switch -c &lt;name&gt;</code></li>
                <li><code className="text-xs">git merge &lt;branch&gt;</code></li>
                <li><code className="text-xs">git rebase -i HEAD~3</code></li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">Fix Mistakes</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><code className="text-xs">git restore &lt;file&gt;</code></li>
                <li><code className="text-xs">git commit --amend</code></li>
                <li><code className="text-xs">git revert HEAD</code></li>
                <li><code className="text-xs">git stash</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/regex-tester" className="text-[#3b82f6] hover:text-blue-300">Regex Tester</a>
            {" · "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
            {" · "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">JSON Formatter</a>
          </p>
        </div>
      </div>
    </article>
  );
}
