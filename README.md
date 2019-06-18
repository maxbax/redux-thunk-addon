# redux-thunk-addon

This library simplify the use of [redux-thunk](https://github.com/reduxjs/redux-thunk) minimizing the boilerplate coding.

## Installation

`npm install --save redux-thunk-addon`

## Usage

You can use this addon into a project with [redux](https://github.com/reduxjs/redux) and [redux-thunk](https://github.com/reduxjs/redux-thunk) configured inside.

In this project you can do the following steps:

1. Create your redux actions using `asyncCallAction` function:

```
    asyncCallAction(
       <action string>,
       <promise function used for api call>,
       <arguments passing to api call>,
    );

```
Inside the actions file export an object with the actions string.

2. Insert new addon reducers into reducers collection:

```
    api: apiReducer(<array of actions string object>),
```

3. Where you have to calll the api, you can use redux to dispatch the actions created before and you can find the status in the corrisponding reducers (`state.api[<action name>]`). 

## Example

In the `Example` folder you can find a small redux example with this library.