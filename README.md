# Frontend Development Build Optimization

This is a proof of concept that reduces the time taken to launch a frontend development build, Hot Module Replacement (HMR) and bundle size by approximately 10 times by only including the routes that the developer is working on.

## Problem

Developers often need to make frequent changes to their project and see the results in order to iterate and make it work properly. However, slow frontend development builds can hinder this process and make it challenging to iterate quickly.
Frontend projects can become big and complex quickly.
When a frontend project is large and complex, it can take a considerable amount of time to start a development build, and the development bundle size can become enormous.
When the frontend development bundle size is enormous, it takes a significant amount of time to load from the local development server into the browser.
Lastly, the amount of memory consumed by Node.js and Chrome can be substantial when a development build is running, especially if the developer is actively using the development build in the browser, which can affect the overall computer's performance.

## Solution

The solution to these problems is to only include the routes that the developer is currently working on. This approach can help us achieve several benefits, including reducing the time it takes to launch a development build, enabling faster hot module replacement, and minimizing the size of the development bundle.



