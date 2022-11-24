import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto shadow-2xl p-10 text-white">
      <div className=" mt-8 ">
        <p className="text-3xl">
          1. What are the different ways to manage a state in a React
          application?
        </p>
        <p>=</p>
        <p className="text-md">
          Local state is perhaps the easiest kind of state to manage in React,
          considering there are so many tools built into the core React library
          for managing it. useState is the first tool you should reach for to
          manage state in your components. It can take accept any valid data
          value, including primitive and object values. Additionally, its setter
          function can be passed down to other components as a callback function
          (without needing optimizations like useCallback).useReducer is another
          option that can be used for either local or global state. It is
          similar in many ways to useState under the hood, although instead of
          just an initial state it accepts a reducer. The benefit of useReducer
          is that it provides a built-in way to perform a number of different
          state operations with the help of the reducer function, which makes it
          more dynamic overall than useState. You can see the benefit of
          useReducer versus useState in this vote tracking example. All we have
          to do to update state is pass the callback function dispatch a string
          (which is then passed to the reducer) instead of the new state itself.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-3xl">2. How does prototypical inheritance work?</p>
        <p>=</p>
        <p className="text-md">
          Simply put, prototypical inheritance refers to the ability to access
          object properties from another object. We use a JavaScript prototype
          to add new properties and methods to an existing object constructor.
          We can then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-3xl">
          3. What is a unit test? Why should we write unit tests?
        </p>
        <p>=</p>
        <p className="text-md">
          What is meant by unit testing? A unit test is a way of testing a unit
          - the smallest piece of code that can be logically isolated in a
          system. In most programming languages, that is a function, a
          subroutine, a method or property. The isolated part of the definition
          is important. <br />
          They enable you to catch bugs early in the development process.
          Automated unit tests help a great deal with regression testing. They
          detect code smells in your codebase. For example, if you're having a
          hard time writing unit tests for a piece of code, it might be a sign
          that your function is too complex.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-3xl">4. React vs. Angular vs. Vue?</p>
        <p>=</p>
        <p className="text-md">
          <span className="text-2xl">React</span> <br />
          React can be used as a UI library to render elements, without
          enforcing a specific project structure, and that’s why it’s not
          strictly a framework. React Elements are the smallest building blocks
          of React apps. They are more powerful than DOM elements because the
          React DOM makes sure to update them efficiently whenever something
          changes. Components are larger building blocks that define independent
          and reusable pieces to be used throughout the application. They accept
          inputs called props and produce elements that are then displayed to
          the user. React is based on JavaScript, but it’s mostly combined with
          JSX (JavaScript XML), a syntax extension that allows you to create
          elements that contain HTML and JavaScript at the same time. Anything
          you create with JSX could also be created with the React JavaScript
          API, but most developers prefer JSX because it’s more intuitive.{" "}
          <br />
          <span className="text-2xl">Vue</span> <br />
          The Vue.js core library focuses on the View layer only. It’s called a
          progressive framework because you can extend its functionality with
          official and third-party packages, such as Vue Router or Vuex, to turn
          it into an actual framework. Although Vue is not strictly associated
          with the MVVM (Model-View-ViewModel) pattern, its design was partly
          inspired by it. With Vue, you’ll be working mostly on the ViewModel
          layer, to make sure that the application data is processed in a way
          that allows the framework to render an up-to-date View. Vue’s
          templating syntax lets you create View components, and it combines
          familiar HTML with special directives and features. This templating
          syntax is preferred, even though raw JavaScript and JSX are also
          supported. Components in Vue are small, self-contained, and can be
          reused throughout the application. Single File Components (SFCs) with
          the .vue extension contain HTML, CSS, and JavaScript so that all
          relevant code resides in one file. SFCs are the recommended way to
          organize code in Vue.js projects, especially larger ones. Tools such
          as Webpack or Browserify are required to transpile SFCs into working
          JavaScript code. <br />
          <span className="text-2xl">Angular</span> <br />
          Projects in Angular are structured into Modules, Components, and
          Services. Each Angular application has at least one root component and
          one root module. Each component in Angular contains a Template, a
          Class that defines the application logic, and MetaData (Decorators).
          The metadata for a component tells Angular where to find the building
          blocks that it needs to create and present its view. Angular templates
          are written in HTML but can also include Angular template syntax with
          special directives to output reactive data and render multiple
          elements, among other things. Services in Angular are used by
          Components to delegate business-logic tasks such as fetching data or
          validating input. They are a distinct part of Angular applications.
          While Angular doesn’t enforce their use, it’s highly suggested to
          structure apps as a set of distinct services that can be reused.
          Angular is built in TypeScript, so its use is recommended to get the
          most seamless experience, but plain JavaScript is also supported.
        </p>
      </div>
    </div>
  );
};

export default Blog;
