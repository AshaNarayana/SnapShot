# Snap Shot [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See%20this%20react%20example&url=https://yog9.github.io/SnapShot/&hashtags=react,context-api,freecodecamp,developers)

[![Build Status](https://travis-ci.org/Yog9/SnapShot.svg?branch=master)](https://travis-ci.org/Yog9/SnapShot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.com/Yog9/SnapShot.svg)](http://hits.dwyl.com/Yog9/SnapShot)

[Demo of Snap Shot](https://yog9.github.io/SnapShot/)

![](/snapscout.png)

### Summary

Snap Shot is a gallery created using React,React Hooks, React Router and Context API. The Routes were setup for four default pages and a search page. Also the images were displayed using the Flickr API and axios to fetch data.

### ABOUT

This is forked project and following changes have been implemented.

## PROBLEM STATEMENTS
1.   Our customers would like to see friendly URLs instead of hash routes (#)
- Solution :
* Changed hashrouter in App.js to BrowserRouter
* Removed Base URL

2.   The searched text in the search form input remains when a category is selected.
It should be empty. 
- Solution :
* In form.js when user clicks on onSubmit it resets state to empty strings “”
setSearchEntry("");
3.   There are a lot of unnecessary requests to the API. we need to provide a solution to avoid them.
- Solution :
* Added local storage in PhotoContext.js to store JSON response we receive from flickr API.
const storedImage = JSON.parse(localStorage.getItem(query)) || [];


## NEW USE CASE
1. We are only interested in geolocated photos.

- Flickr API supports optional query parameters to obtain geo location of images.
* has_geo : Filters images which has location information
* extras=geo : To obtain latitude and longitude
Hence final API looks like
`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=geo&has_geo=true&format=json&nojsoncallback=1`

- Users would see this information on a map .When you click on a photo, a modal shows with the map and the information of the photo.
Solution :
Added new route./photoDetails
<Route path="/photoDetails" component={ImageInfo} />
When user clicks on image it directs to new path http://localhost:3000/photoDetails
Application uses the package google-map-react to display maps .
* New components are added to display image location , image information and redisplays selected image as shown below


[Image Information](https://github.com/AshaNarayana/SnapShot)

![](/MapsInfo.png)

### Getting Started

Click the demo link or clone/download the repository on your local machine.
Create a config.js file in api folder inside src folders. In config.js file write
`export const apiKey = "YOUR_FLIKR_API_KEY";`

##### Install dependencies

`yarn install`

##### Run Snap Shot from the root directory.

`yarn start`

### Built With

- React js
- React Router
- React Hooks
- Context API
- Flickr API

### Features

**1. Responsive Design.**

**2. Search functionality added to search photos from API.**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
