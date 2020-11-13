## Software Requirement Specification for Authentic Chef Version 1.0

## Group Name: Team Green

## Prepared by Alexander Her, Koryale Brooks, Randy Saetern, Megan Tamiyasu, Narendra Mannan

## 1. Introduction:
## 1.1 Purpose
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authentic Chef is a Full-Stack e-commerce application that allows users to market their own products as well as buy products from other users. The purpose of this wiki is to showcase the project requirements for the development of the application.The software requirements are an essential part of the project to clearly identify project milestones and priorities. 

## 1.2 Product Scope
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authentic Chef is a user-centric focused application. Most food e-commerce applications include restaurants but there did not exist an application for users to market their own food. The authenticity in the food should serve to match the application name as the food will be made by a variety of local chefs. With the rise of COVID-19, our application would also aid in the creation of more jobs as people would be able to market their own cooking skills to others to make an income. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Every user will have the option to register as a buyer or seller. As a buyer, the user should be allowed to browse existing food options and chef profiles to determine if they would like to purchase food from them. As a seller, the user will be allowed to upload pictures onto their own chef profile and market their products on the application. To become a seller, the user will need to be approved by a system administrator. <br />

## 1.3 Intended Audience and Document Overview
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The intended audience will be the developers that need to review this document should any questions or issue rise during development and the professor who will be reviewing the quality of the requirements. This document should serve to provide any users a better understanding of the project scope and requirements. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This wiki intends to go in-depth about the project’s scope as well as the requirements that need to be followed. This document will go over the basic application functionality. This should give developers a good idea of how the application should work. Next, the document will over the specific functional requirements that will need to be met to ensure that the application is working according to the standards discussed. 

## 2. Overall Description

## 2.1 Product Overview
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This product will be web based only that can be accessed by a PC. However, it can also be accessed by phone but is not priority. The web page will be connected to a database that consists of users which are buyers and seller, their information, and the food that they input. Admin will be the only individuals can access this database and users which are the buyers and sellers will be the ones to provide information such as food, descriptions of said food, and contact information that will be stored in the database. Admin will operate on a separate server from the users. 

## 2.2 Product Functionality
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users will be able to sign up and login in once registers. They will also be able to search a plethora of chefs and their profiles. A food ordering system will allow the users to purchase meals from the listed chefs.
* Login
* Sign up
* Edit Profile (add meals, change profile picture)
*	Ordering system (cart, card information for purchase)
*	Search meals/chefs
*	Leave reviews for chefs

## 2.3 Design and Implementation Constraints
Possible limitations
* Interfacing with the user's social media accounts
* Security for user's private information (passwords, banking information)
*	Updating software after it is completed

## 3. Specific Requirements

## 3.0 External Interface Requirements
## User Interfaces
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The User Interfaces Include Home Page, Food Listing Page, Food Item Page, Profile Page, Dashboard, Checkout Page, Message System Page, etc.

## Hardware Interfaces
The hardware required for this web application is an IOT device that can connect to WiFi and display html.

An IOT device is a device that can transmit data from one object to another and IOT stands for Internet of Things.

## Software Interfaces
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The web application would interface with the MongoDB database to have users submit requests for foods and to have sellers submit their potential food options. The MongoDB database would store user and seller information to thoroughly process submissions and requests. 

## 3.1 Requirements

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The requirements for the system entail three different types of users interacting with the software with different features for each user.

## User Privileges
## Seller
*	Can edit their availability, purchasing times, and time zone
*	Can post/delete pictures of their food
*	Can edit food prices
*	Can view who leaves reviews on their service
*	Can review buyers
*	Can interact with buyers through chat system
*	Can categorize the type of food being sold
## Buyer
*	Can review chefs and their food
*	Can order food from chefs
*	Can communicate with chefs via a chat system
*	Can cancel their order
*	Can search for foods and active sellers available on the website
*	Can see the reviews of other customers
*	Can select food based on categories (Chinese, healthy, price, etc.)
## Administrator
*	Can approve/deny sellers application
*	Can approve dishes sold by sellers
*	Can ban users
*	Can add/remove locations

## 3.2 User Interface Requirements

3.1.1 ID: UIR1: <br />
Home Page (All listings) <br />
Rationale: The user/seller/admin needs to access the home page <br />
Dependency: N/A <br />

3.1.2 ID: UIR2: <br />
Seller or Buyer Registration <br />
Description: When a guest enters the website, he can register as a seller or buyer. <br />
Rationale: In order for the seller/buyer to register and create an account on the website. <br />
Dependency: UR1 <br />

3.1.3 ID: UIR3: <br />
Seller or Buyer or Admin Login <br />
Description: Once the seller or buyer has registered, they can login to their account through a login interface. This login interface lists a username and password input field for the user to input. A button to submit the required fields should also be displayed below the input fields. <br /> 
Rationale: In order for the seller or buyer login to use the website <br / >
Dependency: UR2 <br />

3.1.4 ID: UIR4: <br />
Seller Profile <br />
Description: Once the seller profile is registered, the seller should be able to view his or her profile. The seller’s profile view consists of data fields and registered data. A button would be displayed for the seller to edit their profile, and another button would be displayed to allow seller to submit their changes. <br />
Rationale: In order for the seller to view their profile dashboard. <br />
Dependency: UR3 <br />

3.1.5 ID: UIR5: <br />
Buyer Profile <br />
Description: Once the buyer profile is registered, the buyer should be able to view his or her profile. This profile would include details such as credit card information, name, address, email address, contact info, and user settings.  <br />
Rationale: In order for the buyer to view their profile dashboard. <br />
Dependency: UR3 <br />

3.1.6 ID UIR6: <br />
Admin Dashboard <br />
Description: The administrator of the site should be able to access a dashboard that has full admin privileges for modifying site data. These data include seller profile and buyer profiles.  <br />
Rationale: In order for the admin to access his site data editing privileges. <br />
Dependency: UIR3 <br />

3.1.7 ID: UIR7:  <br />
Seller Dashboard  <br />
Description: The seller account has a dashboard that allows access to key features such as adding dishes, processing orders, and modifying previous dishes.  <br />
Rationale: In order for the seller to view and modify their dish listings.  <br />
Dependency: UIR 3  <br />

3.1.8 ID: UIR8:  <br />
Food Search and Listing <br />
Description: A viewer of the website should be able search and look around for food listings available. The viewer would be able to see the food image, the chef profile, and the food name listed.  <br />
Rationale: In order to allow viewers of the website to view what the site offers in terms of foods available.  <br />
Dependency: UR1 <br />

3.1.9 ID: UIR9: <br />
Food Item Details <br />
Description: A seller, buyer, or admin can view the food item posted. Depending on the logged in user, different functions are available for the viewing user. A seller or an admin would have the option to modify the food details, while a buyer or viewer would only be able to put the item in their cart.  <br /> 
Rationale: In order to allow users access to functions pertaining the food.  <br />
Dependency: UIR1 <br />

## 3.3 Functional Requirements:

3.2.1 ID: FR1:  <br />
Home Page (All listings) <br />
Rationale: The user/seller/admin needs to access the home page<br />
Dependency: N/A <br />

3.2.2 ID: FR2: <br />
Seller or Buyer Registration <br />
Description: When a guest enters the website, he can register as a seller or buyer. <br />
Rationale: In order for the seller/buyer to register and create an account in the website. <br />
Dependency: FR1 <br />

3.2.3 ID: FR3: <br />
Seller or Buyer or Admin Login <br />
Description: Once the seller or buyer has registered, their credentials such as username and password are stored in the MongoDB database so they can login to the website subsequently with their registered credentials. <br />
Rationale: In order for the seller or buyer login to use the website <br />
Dependency: FR2 <br />

3.2.4: ID: FR4: <br />
Forgot password <br />
Description: In case the seller or buyer has lost access to their account and want to reset their login password in the database. <br />
Rationale: In order for the seller or buyer to reset their password to access their account. <br />
Dependency: FR3 <br />

3.2.5: ID:  FR5:  <br />
Admin Panel <br />
Description: When an administrator is setup and users are created, the Admin Panel will allow the user to approve and deny dishes, approve or deny sellers applying to be on the website, can ban buyers and sellers, and can add or remove geo locations on the website. <br />
Rationale: In order to maintain the website and have sense of order. <br />
Dependency: FR1 <br />

3.2.6: ID: FR6: <br />
Food Search <br />
Description: A viewer of the website should be able search and look around for food listings available.  <br />
Rationale: In order to allow viewers of the website to view what the site offers in terms of foods available.  <br />
Dependency: FR1 <br />

3.2.7: ID:FR7: <br />
Order Food <br />
Description: A user who is already registered and signed in should be able to order food.  <br />
Rationale: In order to allow buyers to request food. <br />
Dependency: FR3 <br />

3.2.8: ID: FR8: <br />
Adding Dishes <br />
Description: Allows a seller to add dishes to their profile, by mentioning the dish name, uploading a picture, price and location. <br />
Rationale: In order for a seller to list their dishes on the website <br />
Dependency: FR3 <br />

3.2.10: ID: FR11:  <br />
Image Upload <br />
Description: The seller has to upload images of the dishes so the buyers can view the food items before purchasing on our website. <br />
Rationale: In order for the user to sell their dishes, they should be able upload images of their dishes. <br />
Dependency: FR8 <br />

3.2.9: ID:FR9: <br />
Chat System <br />
Description: Allows the user and seller to interact with each other. <br />
Rationale: To discuss any specific requests regarding orders (e.g., allergies, etc.). <br />
Dependency: FR3 <br />

3.2.12: ID: FR12: <br />
 Food Review <br />
Description: Allows the buyer to write up a review on specific food from a seller. <br />
Rationale: To increase user engagement to the website and improve business. <br />
Dependency: FR7 <br />

## 4. Other Non-Functional Requirements

## 4.1 Performance Requirements

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a web application, so the requirement is a browser, preferably Google Chrome, because you all testing and front-end development was done on that. However, this is a responsive web-design so it can be used on mobile or desktop environments. The IDE we used is Visual Studio Code version (). Software requirements are:
* MongoDB (v 5.10.9)
* Express (v 4.17.1)
* Node js (v 12.18) 
* React (v 16.13.1)
* AdminBro (v 3.2.5)
* Bootstrap (v 4.5.2)
* Visual Studio Code (v 1.50.1) <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We want to make the user experience as smooth as possible and that’s why we are compressing our images to .webp in order to make sure the website loads the highest quality images with less time. We are also using the feature of React Router so that saves time of fetching additional files from the server side and instead just loads the component in that page directly. This will not only make the access faster but will also make it look like you’re using an app rather than a website. The idea here is to make the user experience as smooth as possible.

## 4.2 Safety and Security Requirements

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since ours is a food app, the sellers must have a business license in order to sell their food and also follow the food safety and quality protocols set by the government and Food and Drug Administration (FDA). <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are planning to integrate login with Google or social media accounts to add an extra layer of security to the user and only that have been verified by these services can sign up/in to our application. 

## 5. Prioritization

## Week 1-2
Front-End Goal: Logo, Color Theme <br />
Back-End Goal: Set a price to sellers food

## Week 2-3
Front-End Goal: Buyer login page, Seller login page <br />
Back-End Goal: Buyer account, personal info, food order system, search engine for food and other users

## Week 4-5
Front-End Goal: Homepage (Nav bar + Image Carousel), footer (private policy, small description, etc.) <br />
Back-End Goal: Admin account,implement a way to see all users

## Week 6-7
Front-End Goal:How it works page, filter <br />
Back-End Goal: Admin account, approve dishes, ban users**, add/ remove locations, approve applications (login requests)

## Week 8-9
Front-End Goal: Meals page (product displays cards with price), Buyer profile page <br />
Back-End Goal: Query Data to display.

## Week 10-11
Front-End Goal: Admin Panel (dashboard that shows how many sellers/users, approval pending, etc.), review page <br />
Back-End Goal: Implement CRUD Features for admin profile, implement a new data type for the database to handle (Review)

## Week 12-13
Front-End Goal: Contact us page (Form with fields for name, contact info, etc.), not found page <br />
Back-End Goal: Login authentication, image upload

## Week 14-15
Front-End Goal: Host page (shows cards to different sellers with the name, dishes, and info about user, pictures, etc.), privacy policy page. <br />
Back-End Goal: Review system, chat system, payment system.
