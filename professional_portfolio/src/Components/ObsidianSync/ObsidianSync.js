import React from "react";
import "./ObsidianSync.css";
import "../Shared/Shared.css";

const ObsidianSync = () => {
  return (
    <header className="App-header">
      <div className="App-header_titleSubpage obsidian-sync-page">
        <h1>Obsidian Sync</h1>

        <div className="obsidian-sync-wrapper">
          <section className="obsidian-sync-card" aria-labelledby="about-title">
            <h2 id="about-title">Personal Manuscript Export</h2>

            <p>
              This is a personal automation for exporting manuscripts written
              in Obsidian as Microsoft Word documents in my Google Drive. It
              is operated by Nicholas Nevins for personal use and is not
              offered as a service to other users.
            </p>

            <h3>How it works</h3>
            <ol>
              <li>
                I push manuscript changes from Obsidian to my private GitHub
                repository.
              </li>
              <li>
                GitHub Actions checks out the repository and uses Pandoc to
                create a Word document for each chapter and a combined
                manuscript.
              </li>
              <li>
                The workflow uses rclone to create or update the Word exports
                in my Google Drive.
              </li>
            </ol>

            <p>
              <a href="#privacy-policy">Read the privacy policy</a>
            </p>
          </section>

          <section
            className="obsidian-sync-card"
            id="privacy-policy"
            aria-labelledby="privacy-title"
          >
            <h2 id="privacy-title">Privacy Policy</h2>
            <p className="obsidian-sync-updated">
              <strong>Last updated:</strong> October 11, 2026
            </p>

            <h3>Google Drive access</h3>
            <p>
              The rclone connection requests Google Drive read and write
              permission. That permission is broad: technically, it can access
              files across my Drive. The workflow is configured to use this
              access to create export folders and check, upload, or replace
              Word files in the manuscript export folders. If I delete a
              chapter from the repository, the workflow may move its matching
              Word export to Google Drive Trash.
            </p>

            <h3>Manuscript processing</h3>
            <p>
              When I push changes, GitHub Actions checks out files from my
              private GitHub repository and processes them on a GitHub-hosted
              runner to generate Word documents. The workflow uses an rclone
              credential stored as a GitHub Actions repository secret to
              upload those documents to my Google Drive.
            </p>
            <p>
              This personal tool does not sell or independently share
              manuscript content. GitHub and Google process repository,
              workflow, and Drive data as part of providing their services,
              under their own terms and privacy policies.
            </p>

            <h3>Credentials and retention</h3>
            <p>
              The rclone credential is stored in my private repository’s
              GitHub Actions secrets. I can revoke its Google Drive access
              through my Google Account’s third-party access settings and
              remove the GitHub Actions secret.
            </p>
            <p>
              The Markdown manuscripts remain in my private GitHub repository.
              Word exports remain in Google Drive until I delete them. The
              workflow does not automatically remove combined exports when a
              manuscript folder is renamed or removed.
            </p>

            <h3>Contact</h3>
            <p>
              Questions about this personal tool:{" "}
              <a href="mailto:nnevauthor@gmail.com">nnevauthor@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </header>
  );
};

export default ObsidianSync;