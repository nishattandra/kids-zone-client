import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('blogs')
    return (
        <div>
            <h1 className='text-center my-10 text-4xl font-bold text-orange-400'>Some Information</h1>
            <div className="card max-w-7xl  shadow-xl border-2  border-orange-400 mx-auto  my-5">
                <div className="card-body  rounded-xl">
                    <h2 className="card-title">Ques1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-semibold'>Answer:</span> An access token is a credential that represents the authorization granted to a client to access specific resources on behalf of a user. It is typically issued by an authentication server after the user has successfully authenticated. A refresh token is a long-lived credential that is used to obtain a new access token after the previous one expires. It is usually issued alongside an access token. <br /><span className='font-semibold'>How they work:</span> When a user logs in or authorizes an application, the authentication server generates both an access token and a refresh token. The access token is then used to make authenticated requests to the server's APIs. The server verifies the access token and grants access to the requested resources if it is valid and has sufficient permissions.
                        <br /><span className='font-semibold'>Storage on the client side:</span> Access tokens should be securely stored on the client-side to prevent unauthorized access. They are typically stored in memory or local storage within the client application. However, storing access tokens in local storage may expose them to potential security vulnerabilities, such as cross-site scripting attacks. To mitigate these risks, it is recommended to store access tokens in an HTTP-only secure cookie or a dedicated token storage mechanism provided by the client platform. On the other hand, refresh tokens are considered more sensitive and long-lived, and therefore, they should be stored securely. It is recommended to store refresh tokens in a secure HTTP-only cookie, which can help protect against cross-site scripting attacks and make it less accessible to malicious scripts. </p>
                </div>
            </div>
            <div className="card max-w-7xl shadow-xl border-2 border-orange-400  mx-auto">
                <div className="card-body  rounded-xl my-5">
                    <h2 className="card-title">Ques2: Compare SQL and NoSQL databases?</h2>
                    <p><span className='font-semibold'>Answer:</span>SQL databases use a structured data model based on tables with predefined schemas. They enforce a rigid structure where data is organized into rows and columns, and relationships between tables are defined using foreign keys. NoSQL databases offer a more flexible data model. They can be categorized into various types, such as key-value stores, document databases, columnar databases, and graph databases. Each type provides different ways to structure and store data. NoSQL databases are schema-less, allowing for dynamic and unstructured data.</p>
                </div>
            </div>
            <div className="card max-w-7xl  shadow-xl border-2  border-orange-400 mt-5 mx-auto">
                <div className="card-body  rounded-xl ">
                    <h2 className="card-title">Ques3: What is express js? What is Nest JS?</h2>
                    <p><span className='font-semibold'>Answer:Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and straightforward API for building web applications and APIs. Express.js is known for its lightweight nature, allowing developers to have more control and flexibility over the application's structure and behavior. NestJS is a progressive, extensible, and opinionated framework for building scalable and maintainable server-side applications. It is built with TypeScript and leverages decorators, dependency injection, and module-based architecture inspired by Angular.</span></p>
                </div>
            </div>
            <div className="card max-w-7xl  border-2  border-orange-400  shadow-xl mx-auto mt-5 mb-10">
                <div className="card-body rounded-xl ">
                    <h2 className="card-title">Ques4: What is MongoDB aggregate and how does it work?</h2>
                    <p><span className='font-semibold'>Answer:</span>
                        In MongoDB, the aggregate framework is a powerful feature that allows for data processing and analysis by performing computations on the documents in a collection. It provides a flexible and efficient way to perform complex data transformations, aggregations, and analytics operations. <br />Here some stages used in the MongoDB aggregate framework:
                        <br />1. The $match stage filters the documents in the collection based on specified criteria. It works similar to the find() method and uses query operators to define the matching conditions.
                        <br />2. The $group stage groups documents based on a specific field or set of fields. It allows for aggregating data by performing calculations such as sum, average, count, and more on grouped documents.
                        <br />3. The $project stage shapes the output of the pipeline by selecting or excluding specific fields from the documents. It can also create new fields, apply expressions, rename fields, or format the output.
                        <br />4. The $sort stage sorts the documents in the pipeline based on one or more fields in ascending or descending order.
                        <br />5. The $limit stage restricts the number of documents in the output, while the $skip stage skips a specified number of documents in the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;