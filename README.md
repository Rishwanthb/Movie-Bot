#### Movie Bot

### Terminology
Agent:  Agent are the defined as Natural Language Understanding modules that helps process user input into structured data that can be used to return an appropriate response. Everything is defined inside one or many intents, which defines the mapping of canned response to particular user input(s).

Intent: Intents maps the user input to the response. Many intents can be created under one agent that can have various user utterances.

Entity: While intents allow your agent to understand a particular user-input, entities are used to pick out specific pieces of information that your users mention.

Fulfilment: Fulfillment is code that's deployed as a webhook that lets your Dialogflow agent call business logic on an intent-by-intent basis. During a conversation, fulfillment allows you to use the information extracted by Dialogflow's natural language processing to generate dynamic responses or trigger actions on your back-end.

### Tools used
1.0	Google Dialogflow
Give users new ways to interact with your product by building engaging voice and text-based conversational interfaces, such as voice apps and chatbots, powered by AI. Connect with users on your website, mobile app, the Google Assistant, Amazon Alexa, Facebook Messenger, and other popular platforms and devices.
In Dialogflow, the basic flow of conversation involves these steps:
1.	The user giving input
2.	Your Dialogflow agent parsing that input
3.	Your agent returning a response to the user
1.1	Firebase database Realtime
The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in real-time with every connected client. When you build cross-platform apps with iOS, Android and JavaScript SDKs, all clients share a single Realtime Database instance and can  automatically receive real-time updates.
1.2	Dialogflow Phone Gateway BETA
This is a beta feature and is only available for agents using Dialogflow V2 of the API with beta features enabled. Beta features can be enabled in the General settings tab.
The telephony gateway feature provides a telephone interface to your agent. It is used to build conversational IVR (interactive voice response) solutions that integrate with the rest of your call center network. Currently, you can select a telephone number hosted by Google – this is a US based number +1 xxx-xxxx-xxx.
_____________________________________________________________________________
The movie booking voicebot I created, uses Google Assistant to get the voice input which is processed by Dialogflow and data is persisted on Firebase database. The payment gateway response has been simulated for this prototype. A unique QR code is generated for each booking order, which is required to be presented to get access to the theater.

### Below are the features of the chatbot.
1.	Handsfree experience for booking movie ticket.
2.	Retrieves the movie catalog data from DialogFlow
3.	Allows user to interactively select the city, movie, hall, show timings (date/time) & number of tickets.
4.	Writes the order data (city, hall, movie name, show timing, # of tickets etc.)to the backend database (Google Firebase).
5.	Books the tickets and displays the booking details to the user (QR code).

### References:

1.	https://dialogflow.com/docs
2.	https://firebase.google.com/docs/?authuser=0