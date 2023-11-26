# ByteACookie :cookie:

A cooking recipe application that enables users to browse and share recipes ! Users can access a wide variety of recipes, view detailed instructions, ingredients, and cooking methods. They also have the ability to share their favorite recipes with others within the platform, fostering a community around culinary experiences and gastronomy.

## Table of Contents

- [Introduction](#introduction)
- [Current Features and Future Updates](#current-features-and-future-updates)
- [Technologies and Architecture](#technologies-and-architecture)
- [How to Use It](#how-to-use-it)
- [License](#license)

## Introduction

This project is part of the curriculum at EPF, within the module titled "Java." It's a Java-based project utilizing technologies such as PostgreSQL, Spring, Hibernate and Angular.

At its core, this project aims to create a recipe management application. The initial envisioned functionalities include:

* Displaying a **preview** of recipes on a homepage, showcasing their **difficulty level, preparation time, and assigned rating**.
* Enabling users to click on a recipe to view its detailed information, including necessary **ingredients** and step-by-step **instructions** for preparation.
* Allowing users to **register**, **log in**, and **add their own recipes**, as well as leave **reviews** and **ratings** under their name.
* A dedicated section **"My Recipes"** for users to view their added recipes.
* **Modifying** or **deleting** one's own recipes.
* **Searching** for recipes by entering the recipe name or ingredients in the search bar.

The project seeks to create an interactive platform where users can discover, contribute, and engage with various recipes, fostering a community around culinary experiences and user-generated content.

## Current Features and Future Updates

The primary functionalities of the application have been released in version 1.0.0. However, some features are planned for future updates:

**Available in Version 1.0.0:**

User Registration and Login: These features are planned but not yet available in the current version. For the initial release (v1.0.0), the application has been configured with a **default user** "Takima."

**Planned for Future Updates:**
* User Account Creation and Login: Future updates will include the ability for users to **create their accounts** and **log in** using their credentials.
* **Adding Images** to Recipes: Users will be able to include images with their recipes to provide a visual representation.
* Implementation of **Advanced Search Filters**: The introduction of more sophisticated search filters beyond recipe names, such as ingredient-based search filters.

These features are part of our roadmap for upcoming releases and will enhance the user experience by providing additional functionality and usability to the application.

## Technologies and Architecture

This back-end is written in Java. It exposes a REST API for the front-end(s) to communicate with it.

The technology stack is:

* Spring (for the general framework)
* Hibernate (for the ORM)
* PostgreSQL (for the database)
* Angular (for the front-end)

The app manages four types of objects: the users, the recipes, the ingredients and the comments.


## How to use it

Run `npm install`


#### Development server:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


:sparkles:_Et voilà !_:sparkles:

## License

The project is currently unlicensed.

