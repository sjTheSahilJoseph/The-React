

// There are some rules to create a functional component in react.
// 1. We can't return more than 1 parent element (object).
// 2. We can use <></> (React Fragment) to make this a parent.
// 3. We can't use class in JSX because it is a keyword in javaScript.
// 4. We use className instead of class.
// 5. Mostly in JSX we use camelCase.

// When we work with inline styles, we have to pass object and again camel case.
// Make sure that the css property name is object key, and value is string.
// We can also make it a variable and pass as variable object to style.
// By the way, one {} for expression, {} another is for css object.

// WE can pass ... operator stuff.
// Same as javaScript.

// We have to close all tags.
// Self closing tags must be closed.

// We can't use for, we use htmlFor, etc...


// We can use componenet by <name/> or <name></name> both ways.


// To pass data to the component, we can use props.
// Props are a way to pass any data to a component.
// And then the componenet will use it and render the layout with the prop data.
// We have to destructure props object to use the data.
// or we can use props.<name> to use the value.

// Now we have prop object.

// Props are only read-only.
// When we try to change it it will. but Later on with buttons etc.. it won't work.

import './Video.css';

function Video(props) {

    let classA = 'bgA';
    let a = "Hi";
    
    let simpleStyle = {
        fontSize: '20px'
    };

    return (
    
        <>
        <div>
            <img src="https://placehold.co/500x200" />
            <div style={{color: 'white', ...simpleStyle}} className={classA}>{props.title}</div>
        </div>
        </>

    );

}

export default Video;
