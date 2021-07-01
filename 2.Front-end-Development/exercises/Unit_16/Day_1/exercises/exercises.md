# Front-end Development Libraries - Redux - freeCodeCamp

## Define an Action Creator

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator)

### My solution

```

const action =  {
	type:  'LOGIN'
}

// Define an action creator here:

const actionCreator =  (action)  => action;

```

## Dispatch an Action Event

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event)

### My solution

```

const store =  Redux.createStore(
	(state =  {login:  false})  => state
);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

// Dispatch the action here:

store.dispatch(loginAction());

```
