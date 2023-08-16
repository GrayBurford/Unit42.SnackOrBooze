### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  Client-side routing. User able to change URLs but displays the same page. Easily switch between pages for single-page applications.

- What is a single page application?
  Web application that does not reload the page when a user interacts with links, buttons, etc. React router dynamically updates the UI without refreshing the browser.

- What are some differences between client side and server side routing?
  Server-side routing executes a page refresh on each request, whereas client-side routing (single-page applications) changes the user's front-end experience dynamically without refreshing the page. Client-side routing is more modern, and usually faster since requests don't need to hit the server before being sent back to refresh the entire page -- only a small amount of data is needed in client-side routing for a page change.

- What are two ways of handling redirects with React Router? When would you use each?
  <Redirect> component -- useful for "you shouldn't have gotten here, so go here instead". This doesn't keep the page in history, so the user won't be able to return to it with the back button, or see it in history.
  Calling .push method on the history object using useHistory() -- useful for "you finished this, now go here since you're done"

- What are two different ways to handle page-not-found user experiences using React Router? 
  First: <Route path="*" element={<Navigate to="/" />} /> This will match any route that comes after all other routes in the list, and used to navigate a user back home. Make sure this route is at the end of all other declared routes.
  Second: <Route path="*" element={<NotFound />} /> This also comes after all other routes in the list, but renders a NotFound component for the user instead of redirecting.

- How do you grab URL parameters from within a component using React Router?
  After import { useParams } from "react-router-dom";, we have access to the useParams() hook. This will grab all parameters sent in the request in an object with every parameter name being a key in the useParams() object.

- What is context in React? When would you use it?
  Context can be thought of as using global variables/functions. Universal data across your application; data accessible across all components. Context is very valuable in large or very nested react apps with many components in which state needs to be defined much higher up in the heirarchy, but used many children down the line. Setting up context will allow a dev to avoid prop drilling state/props/functions down many generations. We can share info as props to multiple nested child componenets without prop drilling them all the way down.

- Describe some differences between class-based components and function components in React.
  Functional componenets are a much newer feature in React, which used to not exist and need to be done using class-based components. Functional components handle state by using useState() to define and reset state as it needs to change in an application. Class-based components must instantiate a constructor and use this.state to do the same thing. Class-based components have a constructor, use this. and .bind methods to handle managing state the same way newer functional componenets do with hooks, such as useState and useEffect.

- What are some of the problems that hooks were designed to solve?
  Functional components and hooks in newer React apps solve two major historical issues that were prevelant in class-based componenets: Repeated code and logic in the lifecycle of a component, and sharing logic among other components. Hooks generally are easier to write and take less code to write.