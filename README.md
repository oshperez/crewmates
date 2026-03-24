# Crewmates

# Crewmates

This web app: **allows users to create, update, and delete crew members, each with unique attributes including name, email, role, and status. Users can view a list of all members, inspect detailed information, and manage entries through a unified form interface.**

## Project Features

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added crewmates**
  - The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page
- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
  - The detail page contains extra information about the crewmate not included in the summary page
  - Users can navigate to the edit form from the detail page
- [x] A crewmate can be given a category upon creation which restricts their attribute value options
- [x] Implemented toast notifications for create, update, and delete actions.
- [x] Unified form component for both creating and editing crewmates.
- [x] Instant redirection to the detail page after adding a crewmate.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Loom.com

<div>
    <a href="https://www.loom.com/share/e9565dc929eb41658ed7626bc3076775">
      <p>Crewmates - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/e9565dc929eb41658ed7626bc3076775">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e9565dc929eb41658ed7626bc3076775-cba5dd3f2361532b-full-play.gif">
    </a>
</div>

GIF created with Loom.com

## Notes

**Challenging part:** Implementing a single form component capable of handling create, update, and delete operations in the Supabase database while managing the app state and routing transitions cleanly.
