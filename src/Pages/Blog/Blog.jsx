import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="my-container">
      <div className="text-right mb-3">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn btn-info">
              Download PDF
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div className="mb-6 space-y-4 bg-green-200 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-medium">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            Uncontrolled components refer to form elements, such as input fields
            or checkboxes, whose values are managed by the browser, rather than
            the React component itself. With uncontrolled components, the state
            of the form element is not stored within the component's state, and
            changes to the element value are not necessarily reflected in the
            component's state. This can make it more difficult to track and
            manage form data, especially when working with more complex forms or
            when submitting form data to a server.
          </p>
          <p>
            On the other hand, controlled components are form elements whose
            values are managed by the React component's state. The state of the
            form element is stored within the component's state, and changes to
            the element value are reflected in the component's state. Controlled
            components provide more control and flexibility over form data, and
            make it easier to track and manage changes to form data. Controlled
            components are generally recommended for more complex forms and for
            forms that will be submitted to a server.
          </p>
        </div>
        <div className="my-6 space-y-4 bg-green-200 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-medium">
            How to validate React props using PropTypes?
          </h2>
          <p>
            In React, PropTypes is a built-in feature that can be used to
            validate the props passed to a component. PropTypes allows you to
            define the type and shape of the props that your component expects
            to receive, and it can help you catch bugs and issues early in the
            development process.
          </p>
        </div>
        <div className="my-6 space-y-4 bg-green-200 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-medium">
            Tell us the difference between nodejs and express js.
          </h2>
          <p>
            Node.js is a JavaScript runtime built on top of the Chrome V8
            engine. It allows developers to use JavaScript to build server-side
            applications, which can be used for a wide range of purposes,
            including building web servers, APIs, command-line tools, and more.
            Node.js provides a set of core modules and APIs that allow
            developers to interact with the file system, network, and other
            low-level system resources.
          </p>
          <p>
            On the other hand, Express.js is a web application framework built
            on top of Node.js. It provides a set of features and tools for
            building web applications and APIs in a more streamlined and
            organized way. Express.js provides middleware for handling HTTP
            requests, routing, template rendering, and other common web
            development tasks.
          </p>
        </div>
        <div className="my-6 space-y-4 bg-green-200 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-medium">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            In React, a custom hook is a reusable function that contains
            stateful logic and can be shared across different components. Custom
            hooks enable developers to extract and reuse logic that is common
            across different components, making it easier to write and maintain
            reusable code.
          </p>
          <p>
            A custom hook is created by using the 'use' prefix in the function
            name and leveraging existing hooks or creating new ones to
            encapsulate the logic. A custom hook can return anything that a
            regular function can return, but it typically returns an array or
            object containing state values and functions to manipulate that
            state. That's why I will create a custom hook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
