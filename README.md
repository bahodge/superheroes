# Coding Challenge

"Develop a single-page web application that pulls data from an api or public resource and allows a user to perform an informed action based on this data (for example: reschedule an appointment based on the weather, or save a random cat picture locally). Please provide documentation on setup and usage. An exceptional candidate will have tests, incorporated in docker pipeline, and/or is public hosted for immediate viewing."

## Tech Stack

- Create React App `v16.12.0`
- Docker `v19.03.5`
- Flux
- SOME UI THEME

## Dev Diary

### Initial Plan

Create a web application using only create react and node. Don't have a backend for persisted data. Store state in flux or redux depending on what I choose. Use some UI theme for styling (because I'm trash at it). Pull data from the super hero database. Use the pulled data to simulate a battle between 2+ chosen heroes.

Views:

- Home => List of all heroes
- Detailed Hero => Hero stats, bio, details...
- Battle => Search Heroes, add them to teams
- Results => The results of the battle

### Phase 1

I'm starting the project by initializing a docker image to make sure everything is working properly before committing a bunch of effort. I've really never worked directly with docker but following a tutorial. [here](https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f). This first part is to get the application up and running with docker and react.

### Phase 2

Connect application to the api.
