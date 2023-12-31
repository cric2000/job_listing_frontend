# Job Listing Application Frontend

This is the frontend component for a job listing application.

## Overview

[See Demo](https://drive.google.com/file/d/1FmZ4jNzVpxZcAzmMSLluINxm3SCSV5y5/view?usp=sharing)

![1698178300972](https://github.com/cric2000/job_listing_frontend/assets/56411192/115e4ad4-14a7-473d-b264-7dddf3979706)

This project comprises both user and admin dashboards, offering distinct functionalities. In the user dashboard, users can track the number of job applications they've submitted. In the admin dashboard, administrators can manage job listings by adding or deleting them. Additionally, the system supports user registration and login. Users have the ability to filter job listings by category and location, facilitating a targeted job search. They can also utilize a search feature to find specific job listings that match their preferences.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Clone the Project

```sh
git clone https://github.com/cric2000/job_listing_frontend
```

### Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

```sh
npm install
```
### Setting up Proxy URL in `package.json`

To ensure proper communication with the [backend service](https://github.com/cric2000/job_listing_api), you need to specify the proxy URL within your `package.json` file. This URL should point to the location where the backend service is hosted.

Here's how you can do it:

1. Open your `package.json` file in your project's root directory.

2. Locate the `"proxy"` key, and add the URL of the backend service as its value. It should look something like this:

   ```json
   "proxy": "http://your-backend-service-url"


### Start the Application

After installing the dependencies, start the application with the following command:

```sh
npm start
```

The application will be accessible at http://localhost:3000 in your web browser.
