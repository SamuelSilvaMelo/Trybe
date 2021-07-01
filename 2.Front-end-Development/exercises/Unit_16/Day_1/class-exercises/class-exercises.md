# Front-end Development Libraries - Redux - freeCodeCamp

## Create a Redux Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store)

### My solution

```
const reducer =  (state =  5)  =>  {
	return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store =  Redux.createStore(reducer);

```

## Get State from the Redux Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store)

### My solution

```
const store =  Redux.createStore(
	(state =  5)  => state
);

// Change code below this line

const currentState = store.getState();

```

## Define a Redux Action

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action)

### My solution

```
// Define an action here:

const action =  {
	type:  'LOGIN'
}

```