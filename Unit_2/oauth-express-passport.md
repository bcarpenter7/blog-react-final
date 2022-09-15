![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a5bc3e4-1dec-411a-88e9-19d597bf88d7/1_TL54n10lC9xjL-HYwHE6sQ.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a5bc3e4-1dec-411a-88e9-19d597bf88d7/1_TL54n10lC9xjL-HYwHE6sQ.jpeg)

# Intro to Authentication

### Why We Need Authentication

An application’s functionality usually revolves around a particular user.

For example, when we use online banking, or more importantly, save songs to our Spotify playlists, the application has to know who we are - and this is where **authentication** comes in.

## What is Authentication?

Authentication is what enables an application to know the **identity** of the person using it.

In SEI, we’re going to learn three types of **authentication**:

- **Unit 2**: Logging in via a third-party provider - *OAuth*
- **Unit 3**: Token-based username/password login
- **Unit 4**: Session-based username/password login

## Authentication vs. Authorization

*Authentication* and *authorization* are not the same.

**Authentication** verifies a user’s identity.

**Authorization** determines what functionality a given user can access. For example:

- Features a logged in (authenticated) user has vs. an anonymous visitor
- or -
- Features an *admin* user has vs. some other user *role*

# Why OAuth?

Consider applications where we have to sign up and log in using a username and a password.

- ❓ What are the pitfalls of username/password authentication from a user’s perspective?
    - Creating multiple logins requires users to remember and manage all of those login credentials.
    - Users will often use the same credentials across various sites, so if there’s a security breach at one they are a member of, the hackers know that users often use the same credentials across all of their sites.
    - Users typically use weak non-unique passwords so that they can remember all of them.
- ❓ What would be the pitfalls of username/password authentication from a web site business’s perspective?
    - Managing users’ credentials requires carefully crafted security code written by highly-paid devs.
    - Users (customers) are annoyed by having to create dedicated accounts, especially for entertainment or personal interest type websites.
    - Managing credentials makes your business a target for attackers (internal and external), inviting liability.

# Why not OAuth?

- ❓ What are the potential pitfalls of OAuth from a user’s perspective?
    - By using an OAuth provider, a user is subject to an increasing amount of vendor lock-in to that OAuth provider.
    - An OAuth provider gets a significant amount of user data they may otherwise not have access to through the OAuth process.
    - The support process can become more difficult.
- ❓ What would be the pitfalls of OAuth authentication from a web site business’s perspective?
    - Using OAuth, a business is entering a relatively one-sided agreement with a company that is often many times larger than itself. This agreement locks a business into following guidelines such as [**Google's Sign-In Branding Guidelines**](https://developers.google.com/identity/branding-guidelines).
    - Little to no data validation
    - Trading one headache - building a secure credential authentication and storage system (which the company is still likely to build in the end) - for another - building a complex login system to interact with third-party systems and data structures.

Despite these pitfalls, the bottom line is that many users prefer to use OAuth instead of creating another set of credentials to use your site. OAuth is hot, so let’s use it!

# What is OAuth?

## OAuth Vocabulary

- **[OAuth 2.0](https://oauth.net/2/)**: The current OAuth standard. Version 1.0 is obsolete and should not be used.
- **OAuth provider**: A service company such as *Google* makes its OAuth authentication service available to third-party applications.
- **Client application**: Our web application! Remember, this is from an *OAuth provider’s* perspective.
- **Owner**: An OAuth user. They have an account with the OAuth provider, such as *Facebook*, *Google*, *Dropbox*, etc.
- **Resources**: An *owner’s* information on a service that **may** be exposed to *client applications*; for example, a user of Dropbox may allow access to their files.
- **Access token**: An temporary key that provides access to an *owner’s* *resources*.
- **Scope**: Determines what *resources* and rights (read-only, update, etc.) a particular *token* has.

## What is it?

OAuth is an open standard that provides **client applications** access to **resources** of a service such as Google with the permission of the resources’ **owner**.

There are numerous OAuth Providers, including:

- Facebook
- Google
- GitHub
- Twitter
- Apple
- [**Many more**](https://en.wikipedia.org/wiki/List_of_OAuth_providers)

## OAuth 2’s Flow & Scope

![The OAuth token flow as shown by Dropbox.](https://i.imgur.com/tAVrCLP.png)

The OAuth token flow as shown by Dropbox.

The ultimate goal is for the *client application* (our web app) to obtain an OAuth provider’s access token that allows the app to access the user’s resources from that provider’s APIs.

OAuth is **token-based**. A token is a generated string of characters.

Each token has a **scope** that determines what resources an app can access for that user.

Typically, including in this lesson, we will only be interested in accessing our users’ basic profile info (**name**, **email** & **avatar**).

If your project needs to access more than a user’s basic profile, you will need to modify the **scope**. Check the specific provider’s documentation on how to access additional resources. Beware of accessing scopes that require sensitive or restricted scopes using Google OAuth - doing so may block access to your application until your app goes through a verification process carried out by Google. 

Yes, OAuth is complex. But not to worry, we don’t have to know all of the nitty-gritty details to take advantage of it because we will be using PassportJS middleware that will handle most of the OAuth dance for us.

## Review Questions ❓

1. True or False: If your site allows users to authenticate via OAuth, you should ensure they create a “strong” password.
2. What is the *client application* within the context of an OAuth provider?

# Preview of the App We Will Build Today

Today, we are going to take a starter application and add OAuth authentication & authorization to it.

As SEI Students, the app will allow you to list fun facts about yourself and read facts about fellow students, past and present.

The app will add you as a student to its database when you log in for the first time using Google’s OAuth service.

## The App’s User Stories

The following stories are COMPLETE in the starter code:

### As a Visitor:

- AAV, I want to view fun facts about past and present SEI Students so that I can know more about them.
- AAV, I want to be able to search for students by their name so that I don’t have to scroll through a long list.

We will complete these stories today:

### As an Authenticated Student:

- As an authenticated user, I want to add fun facts about myself so that I can amuse others.
- As an authenticated user, I want to view the Google avatar instead of the placeholder icon.

***Level Up***

- As an authenticated user, I want to be able to delete a fact about myself, in case I embarrass myself.

## Review the Starter Code

- The app was scaffolded using the `e-gen-replacement`.
- The app has only one server-side view **`profiles/index.ejs`**.
- The app uses the **[Bootstrap CSS framework](https://getbootstrap.com/)**.

### .env file for “secrets”

- A `.env` file is being used to provide *environment* variables such as the database’s connection string.
- Environment variables allow for the configuration of an application’s settings without changing the source code.
- `.env` files should not be pushed to GitHub because they often hold sensitive access tokens, database connection info, etc.
- The `key=value` pairs in your `.env` are attached to Node’s `process.env` object on line 1 of **`server.js`**.
- Then, on line 3 of **`config/database.js`**, the database is connecting to the value held by `process.env.DATABASE_URL`.

<aside>
‼️ Most environment variables listed in `**.env**` will need to be set on the server after you deploy the app. You'll learn how to do this as part of deployment.

</aside>

### Hosted MongoDB

- We'll be using a shared [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) database for this project.
- In the **`profiles/index.ejs`** view, the `<form action="/profiles" method="GET">` element submits a *search* to the server.
- Let’s take a look at how the *search* feature is implemented.

### Search Form

- When using `method="GET"` instead of `method="POST"`, an HTML form sends its data by appending it to the URL’s query string.

### The View

- In **`profiles/index.ejs`** we see several Bootstrap classes are being used for layout and styling.
- EJS is being used to render a “card” for each profile.
- EJS is also being used to initialize the values in the search form.

### User Model

- There is a `User` model that is being exported by **`models/user.js`**.
- This model holds all the properties related to our authentication implementation and any information about our user that we don't want to be public on our site.
- This model also holds a 1:1 reference to the Profile model

### Profile Model

- The `Profile` model is exported by **`models/profile.js`**.
- This model holds all the public properties about our user - their name, their avatar, and their facts.
- We use the `factSchema` to define the structure for the *fact* subdocuments being *embedded* within a *profile* document’s `facts` property.
- As you know, Mongoose schemas define the structure of documents, but only Models create collections in the database.
- A profile’s *facts* are a perfect use case for embedding.
- Thanks to the `factSchema`, when we push a new fact into the `facts` array, all we do is provide the `text` field, and an `_id` will automatically be created on the subdocument for us.

### Routing

- We have two separate route files: **`routes/index.js`** & **`routes/profiles.js`**.
- **`routes/index.js`** currently has only the root route defined that redirects to `GET /profiles` - the app’s main `index` view of profiles.
- `**routes/profiles.js**` has three routes defined for the following actions:
    
    [Profiles Routes](https://www.notion.so/a75351f586914f74b1e38863d9f0900c)
    

### `profiles` Controller

- The `index` action in **`controllers/profiles.js`** is querying the `Profile` model and providing the array of profiles to the **`profiles/index.ejs`** view.
- Review the comments and code to see how the `index` action does its job, whether or not a *search* has been submitted.

# Ready for Some OAuth?

### Today’s OAuth Game Plan

- **Step 1:** Register our App with Google’s OAuth Server
- **Step 2:** Discuss PassportJS
- **Step 3:** Install & Configure Session middleware
- **Step 4:** Install PassportJS
- **Step 5:** Create a Passport config module
- **Step 6:** Install a Passport Strategy for OAuth
- **Step 7:** Configure Passport
- **Step 8:** Define routes for authentication
- **Step 9:** Add Login/Logout UI
- **Step 10:** Code the First User Story
- **Step 11:** Add Authorization

## Step 1 - Register our App

Every OAuth provider requires that we register our web app with it.

When we do so, we obtain a *Client ID* and a *Client Secret* that identifies **our application** to the OAuth provider.

For this lesson, we are going to use [**Google’s OAuth provider**](https://developers.google.com/identity/protocols/OAuth2).

Time to register our app!

### Step 1.1 - Google Developers Console

You must be logged into a Google account that is not owned by any organization with an email address that you feel appropriate to be shared on the internet. Once logged in, navigate to the **Google Cloud Platform APIs & Services Dashboard** page located [**here**](https://console.cloud.google.com/apis/dashboard). 

[Google Cloud Platform](https://console.cloud.google.com/apis/dashboard)

You may have to agree to the Google Cloud Platform's Terms of Service first. Here’s what you should see on this page:

![The Google Cloud Platform APIs & Services Dashboard](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfa7a691-c9b3-4446-a8d7-36d0a73bd4b6/Screen_Shot_2021-03-17_at_9.20.53_PM.png)

The Google Cloud Platform APIs & Services Dashboard

### Step 1.2 - Create a Project

While on the APIs & Services dashboard, click **Select a project**.

![The Google Cloud Platform APIs & Services Dashboard with the Select a project button highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0190d78-ddfe-4578-ab23-fe3171340a83/Screen_Shot_2021-03-17_at_9.20.53_PM_(1).png)

The Google Cloud Platform APIs & Services Dashboard with the Select a project button highlighted.

When the Select a project pane has opened, click **NEW PROJECT**.

![The Select a project pane with the NEW PROJECT link highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/559107c2-1f02-48e0-8eda-228d2bf26e83/Screen_Shot_2021-03-17_at_9.41.36_PM.png)

The Select a project pane with the NEW PROJECT link highlighted.

On the **New Project** page, update the **Project name** to something you like. Ensure that the project does not belong to an organization (The text in the **Location** field should read **No organization**) then click the **CREATE** button ****to create the project.

![The New Project page, filled out with a project name, and not assigned to an organization. The CREATE button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a05b715-6da6-4275-b9ef-5d3f7ec2ce9b/Screen_Shot_2021-03-17_at_9.50.02_PM.png)

The New Project page, filled out with a project name, and not assigned to an organization. The CREATE button is highlighted.

After clicking the **CREATE** button, you'll be sent back to the **APIs & Services Dashboard** page. It might take a bit to create the project. You’ll see a notification in the nav bar near your user avatar when it’s been done. When the notification appears, click on it, then in the **Create Project** notification click **SELECT PROJECT** in the project that you just created.

![A new notification, showing us that our project has been created. The new project is highlighted. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8eb215a8-519c-4e1b-af68-8afa86c0d995/Screen_Shot_2021-03-18_at_8.48.59_AM.png)

A new notification, showing us that our project has been created. The new project is highlighted. 

After selecting the project from the **Create Project** notification, the **APIs & Services Dashboard** page should look like this. Note that the name of the project is now displayed next to the **Google Cloud Platform** logo.

![The APIs & Services Dashboard with the name of the project highlighted in the nav bar.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80171c25-af2f-4cc3-a84c-2fad2d5eff97/Screen_Shot_2021-03-18_at_9.00.05_AM.png)

The APIs & Services Dashboard with the name of the project highlighted in the nav bar.

### Step 1.3 - Enable the People API

From the **APIs & Services Dashboard** page, type **People** in the **Search products and resources** search bar located in the nav bar. When it appears, select the **Google People API** result from the search results. 

![The Google People API is shown after entering people as the search string in the search bar located in the nav bar.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bd3ae74-ba6f-41f0-8afd-c99296bdc840/Screen_Shot_2021-03-18_at_9.47.17_AM.png)

The Google People API is shown after entering people as the search string in the search bar located in the nav bar.

Ensure that your project name is displayed next to the **Google Cloud Platform** logo. If it is then click **ENABLE**.

![The Google People API page. The enable button is highlighted](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a7f3bb2-d270-46ba-b861-c270338770de/Screen_Shot_2021-03-18_at_10.24.21_AM.png)

The Google People API page. The enable button is highlighted

You'll be taken to the **People API Overview** page. ****Return to the **APIs & Services Dashboard** by using the **API & Services** link. Do not click the **People API** link.

![The People API Overview page with the APIs & Services link highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be6436ee-34a2-4b3a-9372-fb6a29a3867d/Screen_Shot_2021-03-18_at_10.59.06_AM.png)

The People API Overview page with the APIs & Services link highlighted.

### Step 1.4 - Configure OAuth consent

From the the **APIs & Services Dashboard** page, click the **OAuth consent screen** option in the side menu.

![The APIs & Services Dashboard with the OAuth consent screen option highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b03c374-37be-4241-8051-a7d426d000a9/Screen_Shot_2021-03-17_at_10.00.49_PM.png)

The APIs & Services Dashboard with the OAuth consent screen option highlighted.

On the **Oauth consent screen** click the **External** option and then click **CREATE**.

![The OAuth consent screen with the External option and the CREATE button highlighted](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/193c70c6-1da8-47b7-9b72-248defcce569/Screen_Shot_2021-03-18_at_7.01.15_PM.png)

The OAuth consent screen with the External option and the CREATE button highlighted

You'll arrive on **Step 1 of the Edit app registration** page. Note that the information you enter on this page will be user-facing - make sure you choose an appropriate app. Enter an **App name**, and select a **User support email**. Do not enter anything on any of the other fields or upload an application logo - doing so may trigger Google's OAuth verification process, which will cause your application to not be usable for 3-5 days.  

![The edit app registration page with the App name and User support email fields highlighted](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e698c18-5cdf-41d8-a161-2922de2a1309/Screen_Shot_2021-03-18_at_7.13.12_PM.png)

The edit app registration page with the App name and User support email fields highlighted

Scroll down to the **Developer contact information** section and enter an email that you want Google to be able to contact you about any changes to this project in the **Email addresses** field. Again, leave the other fields blank. Then click the **SAVE AND CONTINUE** button.

![The first step on the Edit app registration page with the Email addresses field beneath the Developer contact information header highlighted, along with the save and continue button.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/995a8d79-2671-4082-a3c0-83d267f1dc71/Screen_Shot_2021-03-18_at_9.14.02_PM.png)

The first step on the Edit app registration page with the Email addresses field beneath the Developer contact information header highlighted, along with the save and continue button.

You'll arrive on **Step 2 of the Edit app registration page**. Click on the **ADD OR REMOVE SCOPES** button. 

![The second step on the Edit app registration page with the add or remove scopes button highlighted](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b35aa7a-1012-4591-ae69-0babdd3c00f0/Screen_Shot_2021-03-18_at_10.07.49_PM.png)

The second step on the Edit app registration page with the add or remove scopes button highlighted

We want to have access to the user's email and profile, so copy the following two scopes and paste them in the **Manually add scopes** section on the **Update selected scopes** pane. Then click the **ADD TO TABLE** button.

```
https://www.googleapis.com/auth/userinfo.email
https://www.googleapis.com/auth/userinfo.profile
```

![The Update selected scopes popout toast with the values provided manually added and the add to table button highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5ec60c4-800b-4b66-a53c-150c3782c694/Screen_Shot_2021-03-18_at_11.11.07_PM.png)

The Update selected scopes popout toast with the values provided manually added and the add to table button highlighted.

The `.../auth/userinfo.email` and `.../auth/userinfo.profile` scopes should be added and have selected checkboxes next to them. After confirming this, click the **UPDATE** button.

![The Update selected scopes pane with the new scopes added. The update button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da67d530-e28d-4109-8189-4cb43355486b/Screen_Shot_2021-03-18_at_11.15.04_PM_(1).png)

The Update selected scopes pane with the new scopes added. The update button is highlighted.

You'll be taken back to **Step 2 of the Edit app registration** page. The two scopes we just added should be shown in the **Your non-sensitive scopes** table. Confirm that they are, and also that no scopes are listed in the **Your sensitive scopes** or **Your restricted scopes** tables. After you have done so click the **SAVE AND CONTINUE** button.

![Step 2 of the Edit app registration page with our new scopes added. The save and continue button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9769648c-db8f-4a40-9b93-33d09df9ecad/Screen_Shot_2021-03-18_at_11.23.20_PM.png)

Step 2 of the Edit app registration page with our new scopes added. The save and continue button is highlighted.

<aside>
🧠 These scopes aren't strictly required to be added - we'll have access to them by just associating the People API with our application - but by adding them if Google makes any modifications to these scopes later, you'll be informed so that you're able to make the necessary changes to your applications at that time.

</aside>

You'll arrive on **Step 3 of the Edit app registration** page. Click the **SAVE AND CONTINUE** button.

![Step 3 of the Edit app registration page. The save and continue button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a343383-3ea1-4c61-bf3e-66ccc616d11c/Screen_Shot_2021-03-18_at_11.31.14_PM.png)

Step 3 of the Edit app registration page. The save and continue button is highlighted.

Finally, you'll arrive at **Step 4 of the Edit app registration** page. Confirm the information on the page matches your intent, then scroll to the bottom and click the **BACK TO DASHBOARD** button.

![Step 4 of the Edit app registration page. The back to dashboard button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1fd299f-3e08-4f4d-9a30-60d364793453/Screen_Shot_2021-03-18_at_11.36.02_PM.png)

Step 4 of the Edit app registration page. The back to dashboard button is highlighted.

You'll be taken back to the **OAuth consent screen dashboard**. Click the **PUBLISH APP** button. 

![The OAuth consent screen dashboard. The publish app button is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/326dd301-e6bf-44e4-9e14-e24ec9bdc9a2/Screen_Shot_2021-03-18_at_11.43.21_PM.png)

The OAuth consent screen dashboard. The publish app button is highlighted.

The **Push to production?** modal will appear. Ensure that you receive a message stating that you do not need to submit your app for verification. Click the **CONFIRM** link.

![The Push to production modal, showing that this app does not need to be submitted for verification, with the confirm button highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/44a4a5ef-cd77-4d51-b4a8-8ff81915814b/Screen_Shot_2021-03-18_at_11.46.12_PM.png)

The Push to production modal, showing that this app does not need to be submitted for verification, with the confirm button highlighted.

### Step 1.5 - Create credentials

The **OAuth consent screen dashboard** will re-appear, and display a message that **Verification is not required** under the **Verification Status** header, and a message that the **Publishing status** is **In production**. Confirm both of these statuses display these messages, then click the **Credentials** option in the side menu.

![The OAuth consent screen dashboard, stating that verification of our project is not required and that we are in production. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cf180a0-078a-4744-a680-1e97f56dd192/Screen_Shot_2021-03-18_at_11.52.55_PM.png)

The OAuth consent screen dashboard, stating that verification of our project is not required and that we are in production. 

On the **APIs & Services Credentials** page, click the **+ CREATE CREDENTIALS** link and select **OAuth client ID** from the dropdown. 

![The APIs & Services Credentials page with the + create credentials link on the page and OAuth client ID in the + create credentials dropdown highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5000433-3301-4d3b-ab5f-4d01628c06a3/Screen_Shot_2021-03-19_at_12.02.35_AM.png)

The APIs & Services Credentials page with the + create credentials link on the page and OAuth client ID in the + create credentials dropdown highlighted.

On the **Create OAuth client ID** page click the **Application type** dropdown and select **Web application**.

![The Create OAuth client ID ****page with the Application type dropdown highlighted. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb3e147e-a42c-421e-8e18-8b89f9d118be/Screen_Shot_2021-03-19_at_9.07.04_AM.png)

The Create OAuth client ID ****page with the Application type dropdown highlighted. 

![The Application type dropdown expanded on the Create OAuth client ID page. The Web application option is highlighted.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/287a5277-f94d-422c-8799-b976f3ca734e/Screen_Shot_2021-03-19_at_9.10.23_AM.png)

The Application type dropdown expanded on the Create OAuth client ID page. The Web application option is highlighted.

After you select **Web application** as the **Application type** there will be additional elements added to the page. Enter a sensible value in the **Name** field, then click the **+ ADD URI** button under the **Authorized redirect URIs** header. ***NOT*** the **Authorized JavaScript origins** header. 

![The Create OAuth client ID page with the Name field and the + add URI button under the Authorized redirect URIs header highlighted. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2fff51f-cd62-4838-939b-3b0e7c1320d0/Screen_Shot_2021-03-19_at_9.21.33_AM.png)

The Create OAuth client ID page with the Name field and the + add URI button under the Authorized redirect URIs header highlighted. 

A field will appear prompting you to enter a redirect URI. Type in the following text (you could even copy this text from here, so you don’t make any mistakes!) then press `**Enter**`. This will be the value of `GOOGLE_CALLBACK` in your `.env` file. 

```
http://localhost:3000/auth/google/oauth2callback
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62ed76f5-f7ae-450e-85fa-0a61217004ad/Untitled.png)

<aside>
⚠️ You will have to add an entry in the Authorized redirect URIs once you have deployed your application to Heroku - something like:
`https://<your-app-name>.herokuapp.com/auth/google/oauth2callback`.

</aside>

Add this key=value pair to your `.env` file:

```
GOOGLE_CALLBACK=http://localhost:3000/auth/google/oauth2callback
```

### Step 1.6 - Add the Client ID, Client Secret, and Callback URI to `.env`

A pop up modal will now be presented informing you that the client was created with your app’s **Client ID** and **Client Secret** credentials:

![The OAuth client created modal containing the Client ID and Client Secret for this application.](https://i.imgur.com/gSUFsJe.png)

The OAuth client created modal containing the Client ID and Client Secret for this application.

Let’s add the credentials, along with that callback URI we provided, to the `**.env**` file so that it looks something like this (***do not copy this exactly, it will not work***):

```
DATABASE_URL=YOUR-INSTRUCTOR-WILL-GIVE-YOU-THIS
GOOGLE_CALLBACK=http://localhost:3000/auth/google/oauth2callback
GOOGLE_CLIENT_ID=PASTE-YOUR-CLIENT-ID-HERE
GOOGLE_SECRET=PASTE-YOUR-SECRET-HERE
```

### Congrats on Registering your App!

With registering our app now completed, just remember that each provider will have a unique process. Set this browser tab aside incase you need to debug anything in Google later.

## Step 2 - Passport Discussion

Implementing OAuth is complex. Redirects are going on everywhere, you have to deal with access tokens that only last for a short time, refresh tokens have to be used to obtain a fresh access token, etc.

As usual, we will stand on the shoulders of giants that have done much of the heavy lifting for us - enter **[PassportJS](https://www.passportjs.org/)**.

[Passport.js](https://www.passportjs.org/)

Passport is by far the most popular authentication framework for Express apps.

**Passport’s website** states that it provides *Simple, unobtrusive authentication for Node.js*.

This means that it handles much of the mundane tasks related to authentication for us, but leaves the details up to us, for example, not forcing us to configure our user model a certain way.

There are numerous types of authentication; if Passport itself were designed to do them all, it would be gigantic!

Instead, Passport uses **Strategies** designed to handle a given type of authentication. Think of them as plug-ins for Passport.

Each Express app with Passport can use one or more of these strategies.

**Passport’s site** currently shows over 500 strategies available.

OAuth2, although a standard, allows for certain implementation details to be customized by OAuth providers such as Facebook and Google.

As such, there are strategies available for each flavor of OAuth provider.

For this lesson, we will be using the **[passport-google-oauth2](https://github.com/jaredhanson/passport-google-oauth2)** strategy.

**Passport is just middleware designed to authenticate requests**.

- When a request is sent from an authenticated user, Passport’s middleware will automatically add a `user` property to the `req` object.
- `req.user` will be the logged-in user’s Mongoose document! ***This is super important!***
- You will then be able to access the `req.user` document in all of the controller actions!

## Step 3 - Session Middleware

Before we install Passport and a strategy, we need to install the `[**express-session**](https://github.com/expressjs/session?_ga=1.40272994.1784656250.1446759094)` middleware.

Sessions are a server-side way of remembering a user’s browser session.

Sessions remember the browser session by setting a cookie that contains a *session id*. No other data is stored in the cookie, just the *id* of the session.

On the server-side, your application can store data about the user’s session.

Passport will use the session, which is an in-memory data-store by default, to store a nugget of information that will allow us to look up the user in the database.

<aside>
⚠️ Because sessions are maintained in memory, session data will be lost if the server restarts. You will see this happen when nodemon restarts the server, and you are no longer logged in.

</aside>

<aside>
‼️ In a large-scale production application you would want to store sessions in a database store, like one listed [**here**](https://www.npmjs.com/package/express-session#compatible-session-stores). There are even MongoDB options!

</aside>

### Step 3.1 - Installing Session Middleware

Let’s install the module:

```bash
npm i express-session
```

Next, import it it below the `create-error` import line. 

```jsx
import createError from 'http-errors'
import session from 'express-session'
```

### Step 3.2 - Configure and Mount Session Middleware

Now, we can configure and mount the session middleware below. 

```jsx
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax',
    }
  })
)
```

The `secret` is used to digitally sign the session cookie, making it very secure. You can set it to anything you want in your `.env` file, but the documentation says that: “The secret […] should be not easily parsed by a human and would best be a random set of characters.”  `resave` set to `false` keeps the session from being saved back to the session store on every user request. Learn more [**here**](https://www.npmjs.com/package/express-session#resave). `saveUninitialized` set to `false` prevents visitors that have not logged in from creating sessions which reduces our storage usage. Learn more [**here**](https://www.npmjs.com/package/express-session#saveuninitialized). The `cookie.sameSite` option set to `"lax"` controls the conditions under which the cookie will be sent. This is necessary to prevent browser errors, see [**here**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#fixing_common_warnings) for more.

Be sure to add the `SESSION_SECRET` to your `.env` file:

```
SESSION_SECRET=&MAdfn9nuu\mkwr?k-+d6w!^vZc/9G%jNi(vcPe&N@J7.>UA4pe7_)
```

### Review Questions ❓

1. Passport uses ___ designed to handle specific types of authentication.
2. If there is an authenticated user, the request (`req`) object will have what attached to it by Passport?

## Step 4 - Install Passport

The Passport middleware is easy to install, but challenging to set up correctly.

First the easy part:

```bash
npm i passport
```

Import it as usual below `method-overrride`:

```jsx
import methodOverride from 'method-override'
// new code below
import passport from 'passport'
```

### Step 4.1 - Mount Passport

With Passport imported, we need to mount it. Be sure to mount it **after** the session middleware and always **before** any routes that would need access to the current user:

```jsx
// app.use(session({... code above
app.use(passport.initialize())
app.use(passport.session())
```

The way `passport` middleware is being mounted is straight from the docs.

## Step 5 - Create a Passport Config Module

Because it takes a significant amount of code to configure Passport, we will create a separate module so that we don’t pollute **`server.js`**.

Let’s create the file:

```bash
touch config/passport.js
```

In case you’re wondering, although the module is named the same as the `passport` module we’ve already imported, it won’t cause a problem because a module’s full path uniquely identifies it to Node.

### Step 5.1 - Passport Module’s Exports Code

Our `**config/passport.js**` module is not middleware.

Its code will configure Passport, and we will be done with it. We’re not going to export anything either.

Import it below our database in **`server.js`**:

```jsx
import('./config/database.js')
// new code below
// configure passport
import './config/passport.js'
```

### Step 5.2 - Import Passport

In the `config/passport.js` module, we will need access to the `passport` module:

```jsx
import passport from 'passport'
```

Now on to the *strategy*.

## Step 6 - Install the OAuth Strategy

Time to install the strategy that will implement Google’s flavor of OAuth:

```bash
npm i passport-google-oauth20
```

This module only implements Google’s OAuth 2.0 API.

Note that *OAuth 1.0* still exists and can be implemented, but it’s obsolete and you shouldn’t use it.

### Step 6.1 - Import the OAuth Strategy

Now let’s import the `passport-google-oauth20` module below that of `passport` in `**config/passport.js**`:

```jsx
import passport  from 'passport'
// new code below
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
```

<aside>
❓ Note that the variable is named using upper-camel-case. 
**What does that typically hint at?**

</aside>

Let’s make sure there are no errors before moving on to the fun stuff!

## Step 7 - Configuring Passport

To configure Passport, we will:

1. Call the `passport.use` method to plug-in an instance of the OAuth strategy and provide a `verify` callback function called whenever a user has logged in using OAuth.
2. Define a `serializeUser` method that Passport will call after the `verify` callback to let Passport know what data we want to store in the session to identify our user.
3. Define a `deserializeUser` method that Passport will call on each request when a user is logged in. What we return will be assigned to the `req.user` object.

### Step 7.1 `passport.use`

Now it’s time to call the `passport.use` method to plug-in an instance of the OAuth strategy and provide a `verify` callback function that will be called whenever a user logs in with OAuth.

```jsx
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

// new code below
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      // a user has logged in with OAuth...
    }
  )
)
```

Note the settings from the `.env` file being passed to the `GoogleStrategy` constructor function.

Next, we have to code the `verify` callback function.

### Step 7.2 - The `Verify` Callback

The `verify` callback will be called by Passport when a user has logged in with OAuth.

It’s called a `verify` callback because, with most other strategies, we would have to verify the credentials, but with OAuth, well, there are no credentials!

In this callback we must:

- Fetch the user from the database and provide them back to Passport by calling the `done` callback method, or…
- If the user does not exist, we have a new user! We will add them to the database and pass along this new user in the `done` callback method.

But wait, how can we tell what user to lookup?

Looking at the callback’s signature:

```jsx
function(accessToken, refreshToken, profile, done) {
```

We can see that we are being provided the user’s `profile` - this object will contain the user’s *Google Id*. However, to find a user in our database by their *Google Id*, we’re going to need to add a field to our `User` model’s schema to hold it.

### Step 7.3 - Modify the `User` Model

Let’s add a property for `googleId` to our `userSchema` inside `models/user.js` file:

```jsx
const userSchema = new Schema({
  email: String,
  googleId: String,
  studentProfile: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})
```

Cool, now when we get a new user via OAuth, we can use the Google `profile` object’s info to create our new user!

### Step 7.4 - Callback Code

Now we need to code the callback!

We’re going to need access to our `User` model and our `Profile` model:

```jsx
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// new code below
import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
```

Cool, here comes the code for the entire `passport.use` method. We’ll review it once you have it in place.

```jsx
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id })
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          const newProfile = new Profile({
            name: profile.displayName,
            avatar: profile.photos[0].value,
          })
          const newUser = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            studentProfile: newProfile._id,
          })
          newProfile.save()
          .then(()=> {
            newUser.save()
            .then(() => {
              return done(null, newUser) 
            })
            .catch(err => {
              if (err) {
                // Something went wrong while making a user - delete the profile
                // we just created to prevent orphan profiles.
                Profile.findByIdAndDelete(newProfile._id)
                return done(err)
              } 
            })
          })
          .catch(err => {
            if (err) return done(err)
          })
        }
      })
      .catch(err => {
        if (err) return done(err)
      })
    }
  )
)
```

<aside>
⁉️ `done` is a common name for parameters that accept a callback function. You’ll see this again soon!

</aside>

### Step 7.5 `serializeUser` & `deserializeUser` Methods

With the `passport.use` method done, we now need to code two more methods inside of the `**config/passport**` module.

First, the callback method we just created is called when a user logs in, then the `passport.serializeUser` method is called to set up the session.

The `passport.deserializeUser` method is called every time a request comes in from an existing logged-in user - it is this method where we return what we want Passport to assign to the `req.user` object.

### Step 7.5.1 `serializeUser` Method

First up is the `passport.serializeUser` method that’s used to give Passport the nugget of data to put into the *session* for this authenticated user. Put this below the `passport.use` method:

```jsx
passport.serializeUser(function (user, done) {
  done(null, user.id)
})
```

Passport gives us a full user object when the user logs in, and we give back just the `user.id` to attach to the session.

To oversimplify a bit - `serializeUser` is getting the user logged in.

### Step 7.5.2 `deserializeUser` Method

The `passport.deserializeUser` method is used to provide Passport with the user from the db we want assigned to the `req.user` object. Put it below the `passport.serializeUser` method:

```jsx
passport.deserializeUser(function (id, done) {
  User.findById(id)
  .populate('studentProfile', 'name avatar')
  .then(user => {
    done(null, user)
  })
  .catch(err => {
    done(err, null)
  })
})
```

Passport gave us the `id` from the session, and we use it to fetch the user to assign to `req.user`.

To oversimply a bit again, `deserializeUser` is keeping the user logged in as they navigate around our site.

## Step 8 - Define Routes for Authentication

We’re going to need three auth related routes:

1. A route to handle the request sent when the user clicks Login with Google
2. The `auth/google/oauth2callback` route that we told Google to call after the user confirms or denies the OAuth login.
3. Lastly, we will need a route for the user to logout.

### Step 8.1 Create `routes/auth.js`

We’re going to code these three new auth related routes in a new `routes/auth.js` module which we need to create:

```bash
touch routes/auth.js
```

### Step 8.1 Update `server.js`

Add this new code for the new **auth** route, and import the file we just created.

```jsx
import { router as profilesRouter } from './routes/profiles.js'
// A new route appears!
import { router as authRouter } from './routes/auth.js'
```

and then use that new route:

```jsx
app.use('/profiles', profilesRouter)
// Using the new route!
app.use('/auth', authRouter)
```

### Step 8.2 Coding the Routes and Controllers

These new routes will need to access the express router module, and passport. Let's import them in **`routes/auth.js`**:

```jsx
import { Router } from 'express'
import passport from 'passport'

const router = Router()
```

Don't forget to export the router!

```jsx
export {
  router
}
```

### Step 8.3 Login Route

In **`routes/auth.js`**, let’s add the login route and point it to `authCtrl.googleOAuth`:

```jsx
// Google OAuth login route
router.get(
  '/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
```

The `passport.authenticate` function will return a middleware function that does the coordinating with Google’s OAuth server.

The user will be presented with the consent screen if they have not previously consented.

Note that we are specifying that we want Passport to use the `google` strategy. Remember, we could have more than one strategy in use.

We are also specifying the *scope* that we want access to, in this case, `['profile', 'email']`.

### Step 8.4 Google Callback Route

Below our login route we just added, let’s add the callback route that Google will call after the user confirms their login with Google:

```jsx
// Google OAuth callback route
router.get(
  '/google/oauth2callback', 
  passport.authenticate('google', {
    successRedirect: '/profiles',
    failureRedirect: '/profiles',
  })
)
```

Note that we can specify the redirects for a successful and unsuccessful login. For this app, we will redirect to our main `/profiles` route in both cases.

### Step 8.5 Logout Route

The last route to add is the route that will logout our user:

```jsx
// OAuth logout route
router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err)}
    res.redirect('/profiles')
  })
})
```

Note that the `logout()` method was automatically added to the `req` object by Passport!

## Step 9 - Add Login/Logout UI

We want the nav bar in **`profiles/index.ejs`** to update dynamically depending upon whether there’s an authenticated user or not:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40163267-f16d-401f-8c57-2ecc74e0db24/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40163267-f16d-401f-8c57-2ecc74e0db24/Untitled.png)

**vs**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae13e1e5-58bb-4afc-938f-6f54c7a4fafd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae13e1e5-58bb-4afc-938f-6f54c7a4fafd/Untitled.png)

### Step 9.1 Pass `req.user` to the View

Let’s update the `index` action in **`controllers/profiles.js`** to pass in `req.user` :

```jsx
function index(req, res) {
  ...
    res.render('profiles/index', {
      profiles, // same as profiles: profiles
      name: req.query.name,
      user: req.user
    })
  ...
  })
}
```

Now the logged-in student is in a `user` variable that’s available inside of **`profiles/index.ejs`**.

If nobody is logged in, `user` will be `undefined`.

### Step 9.2 Add the Login / Logout UI Logic

We’re going to need a link for the user to click to login/out. Let’s modify **`profiles/index.ejs`** as follows:

```html
					<div class="text-end d-flex align-items-center">
          <% // TODO: Add login logic here %> 
          <% if (user) { %>
            <a href="/auth/logout">
              <button type="submit" class="btn btn-warning">Logout</button>
            </a>
          <% } else { %>
            <a href="/auth/google">
              <button type="submit" class="siwg">
                <img id="siwg-image" src="" alt="Sign in with Google" />
              </button>
            </a>
          <% } %>
          </div>
```

### Step 9.3 Try Logging In!

We’ve finally got to the point where you can test out our app’s authentication!

### Step 9.4 - Verifying Session Middleware

Remember earlier we installed the Session middleware? Now that we've logged in we can finally verify that it worked!

Make sure your server is running with `nodemon`.

Browse to the app at `[http://localhost:3000](https://localhost:3000)`.

In *Chrome* - Open your DevTools and click the Application tab, then expand Cookies in the menu on the left and click `[http://localhost:3000](https://localhost:3000)`.

In *Firefox* - Open your DevTools and click the Storage tab, then expand Cookies in the menu on the left and click `[http://localhost:3000](https://localhost:3000)`.

A cookie named `connect.sid` confirms that the session middleware is doing its job.

## Step 10 - Code the First User Story

Our first user story reads:
*AAU: I want to add fun facts about myself so that I can amuse others.*

We’re going to need a `<form>` with an `<input>` for the fact’s text and a submit `<button>`.

However, we **only** want this UI to show within the logged-in student’s card.

### Step 10.1 Add Dynamic UI

Let’s add some dynamic UI to add a fact. Ensure it’s added in the correct location!

```html
							<% profile.facts.forEach(function(fact) { %>
                  <li class="card-text"><%= fact.text %></li>
                <% }) %>
              </ul>
              <% // Add dynamic UI form below this line %> 
              <% if (profile._id.equals(user?.studentProfile._id)) { %>
                <div class="card-footer">
                  <form
                    action="/profiles/facts"
                    method="POST"
                    class="input-group"
                  >
                    <input
                      type="text"
                      name="text"
                      class="form-control form-control-dark"
                      placeholder="Add a fact..."
                      autocomplete="off"
											required
                    />
                    <button type="submit" class="btn btn-primary">
                      Add Fact
                    </button>
                  </form>
                </div>
              <% } %>
```

Note how the `equals` method is being used to compare the `_id`s - this is necessary because they are objects.

Also, the `(user?._id)` prevents an error when there’s no `user` logged in using the **[optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)**.

[https://twitter.com/wesbos/status/1345080914276208643?s=20](https://twitter.com/wesbos/status/1345080914276208643?s=20)

### Step 10.2 Controller Code

Lastly, let’s code the `createFact` and  action in the **`controllers/profiles.js`** controller:

```jsx
function createFact(req, res) {
  // find the profile 
  Profile.findById(req.user.studentProfile._id)
  .then(profile => {
    // push the req.body form data into the facts array
    profile.facts.push(req.body)
    // save
    profile.save()
    .then(() => {
      // redirect
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}
```

<aside>
🧠 Remember: `req.user` is the logged-in user’s Mongoose document!

</aside>

### Step 10.3 Test the First User Story

That should take care of our first user story - try it out!

Yes, the UX is not that great because of the full-page refresh, but we’ll address that when we develop single-page apps with React.

Cool, just one step left!

## Step 11 - Authorization

<aside>
❓ **What is *authorization*?**

</aside>

We will need to ensure that certain routes/functionality can only be accessed if there’s a logged in user.

Passport adds a nice method to the `req` object, `req.isAuthenticated()` that returns `true` or `false` depending upon whether there’s a logged-in user or not.

We’re going to write our own little middleware function to take advantage of `req.isAuthenticated()` to perform some authorization.

### Step 11.1 Authorization Middleware

As we know by now, Express’s middleware and routing are extremely flexible and powerful.

We can add multiple middleware functions before a route’s final middleware function!

Let’s modify `**routes/profiles.js**` to see this in action:

```jsx
router.post('/facts', isLoggedIn, profilesCtrl.createFact)
```

Note the inserted `isLoggedIn` middleware function!

If the `isLoggedIn` middleware calls `next()`, then the next middleware, `profilesCtrl.createFact` will be called.

### Step 11.2 Authorization Middleware

Our custom `isLoggedIn` middleware function, like all middleware, will either call `next()`, or respond to the request.

Let’s put our new middleware at the very bottom of `**routes/profiles.js**` - just above the `module.exports`:

```jsx
// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}
```

That’s all there is to it!

## Congrats on implementing OAuth authentication and authorization!

# Level Up 🚀

Now you’re ready to start your project by implementing OAuth authentication!

For some challenging practice, complete this remaining *user story*:

- I want to be able to delete facts.

# References 📖

- [**Google OAuth2**](https://developers.google.com/identity/protocols/OAuth2)
    
    [Using OAuth 2.0 to Access Google APIs | Google Identity](https://developers.google.com/identity/protocols/oauth2)
    
- [**Mongoose**](http://mongoosejs.com/)
    
    [Mongoose](https://mongoosejs.com/)
    
- Bootstrap:
    
    [Bootstrap](https://getbootstrap.com/)