![](/ga_cog.png)

<!--- Edit for each cohort
    Format: What to edit (line #)

    Class times (20)
    Attendance check times (22)
    Link to related models notes (49)
    Today's date (87)
    Due date and time (106)
    Google Sheets link (108)


-->

# Project #3: Building Your A Django Application

## Attendance

There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (9AM - 5PM Eastern) for any meetings and check-ins with instructors as needed.

There are **daily attendance checks on weekdays at 9:00AM EST and 2:00PM EST**. A thread will be posted in the classroom channel at those times and you must respond to it within 2 hours or you will be marked absent. _Again, failure to make an attendance check will result in an absence_.

## Technical Requirements

For this project, you will be making a full CRUD Django application using the technologies outlined below. When thinking of an app idea, try to frame the project in terms of trying to solve a "problem" and think about the purpose of the app, who would use it, etc. The problem doesn't have to be anything intense and can be something small and simple! For example:

    >**Problem:** I have a huge enamel pin collection and want to organize it all in one place<br>
    >**General App Idea/Purpose:** An app that allows me to catalogue all my pins by category <br>
    >**Who Would Use It:** Pin collectors

### &#x1F534; Mandatory to pass:

#### MVP - Minimum Viable Product

* A working full-stack application, built by you, using **Django and PostgreSQL**
* Adhere to the Django-specific **MVT** file structure: Models, Views, Templates
* At least one model 
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  
* At **least one** GitHub commit per day.
* **Be deployed online** and accessible to the public via **Fly.io**.
* **A ``README.md`` file** with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc.


### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

* Add additional relationships (models can be related in a one-to-many relationship, for example).
* Include **sign up/log in** functionality, with encrypted passwords & an authorization flow.
* Include portfolio-quality styling.
* Inside Your `README.md`:
    * Include User Stories.
    * Include **wireframes** that you designed during the planning process.

## Setting up for deployment

This time, because you'll be creating a full-stack app with a server, we cannot just deploy to github pages. Github pages only hosts _static_ projects (i.e. projects without a server). Thus, we have to learn a new way to deploy to something called Fly.io, which _does_ host full-stack apps like the ones you'll be building.

**This deployment is more complex than the github pages deployment, so please use the one you did this morning for this project.**

- [Fly.io](https://fly.io/docs/languages-and-frameworks/node/)
- [Specific Django Fly.io Notes](https://fly.io/docs/django/getting-started/)
- [Setting Up Postgresql For Fly.io](https://fly.io/docs/postgres/)
 - Please note: You should start working with your local DB and when you deploy your app you will have to set up a database on fly.io which will NOT have the data you've been working with locally.

❗ Please **DEPLOY EARLY**, and **DEPLOY OFTEN!** Your app working locally does _not_ guarantee that it will work when deployed the same exact way, especially on Heroku, so whenever you have something working correctly -- please _deploy deploy deploy_ and double check! **Do not save deployment for the very last day!**.

## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

* **Approximately 5-10 minutes in length**.
* Shows off all features of the app.
* Explains the technical details.
* Explains the technical challenges.
* Explains which improvements you might make in the future.
* Talk about one new thing you learned during this project (can be something technical, or even something more open ended like time management, etc.).

You will be sharing your app and your code. Be prepared to answer questions from the instructors and other students.

## Meetings with instructors
_Your instructor will contact you to setup a meeting time to approve your project._

**Today July 12 - Mandatory**<br>
You will meet with an instructor to get your app idea approved.  Reach out to them to set up a meeting once you have your idea finalized, you must have your project approved by 5pm ET on this day.

_How to prepare for project approval_

- Pick a project idea.
- Write user stories:
    -  What should people be able to do on your website?
- Draw wireframes:
    - At least one wireframe of how your site will look.
    - One wireframe for each view.
- Make a schedule for yourself of what you want to accomplish
    - First day most details.
    - Second day less details broader strokes of what you want to accomplish.
    - Further:  try to pick 'milestones' (check with the project markdown and determine what your project's specific MVPs will look like) and prioritize features by MVPs and stretch goals).
    - This takes practice so be ready to adjust your schedule.
    **Note: You will have to make changes and adjust/adapt as you build**

## How to Submit Your Project
Your project is due on Wednesday July 19th at 9AM EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1Dpz3IJYsrniBo3pDS88ieKn_6phN0JloIP51imaKj2M/edit?usp=sharing).

  - _NOTE:_ This will be the order you present in!

## Where to go for help during project week

1. Seek out help online.
1. Seek out help with your classmates. Make sure you post in the sos channel so the instructors can keep track of who is asking for help!
1. Seek out help with our class TA.
1. After all other avenues have been exhausted, seek help from your assigned instructor. Please refer to [How to Ask a Question](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Calcifer/wiki/How-To-Ask-A-Question) before you reach out.

**TA Hours** (all normal times EST, unless otherwise stated from Anna) 

## Suggested Ways to Get Started

- **Wireframe** Make a drawing of what your app will look like in all of its stages (what does it look like as soon as you log on to the site? What does it look like once data is retrieved?).

- **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

- **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

- **Consult documentation resources** at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**
    Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**
    Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**
    Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?


## Useful Resources

* **[Fly.io](https://fly.io/docs/languages-and-frameworks/node/)**
* **[Writing Good User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
