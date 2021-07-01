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

## Handle an Action in the Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

### My solution

```

const defaultState =  {
	login:  false
};

const reducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { login:  true  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(reducer);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

```

## Handle an Action in the Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

### My solution

```

const defaultState =  {
	login:  false
};

const reducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { login:  true  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(reducer);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

```

## Use a Switch Statement to Handle Multiple Actions

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

### My solution

```

const defaultState =  {
	authenticated:  false
};

const authReducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { authenticated:  true  };
	case  'LOGOUT':
		return  { authenticated:  false  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(authReducer);

const loginUser =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

const logoutUser =  ()  =>  {
	return  {
		type:  'LOGOUT'
	}
};

```

## Use const for Action Types

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types)

### My solution

```

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

```

## Register a Store Listener

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener)

### My solution

```

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
  case ADD:
    return state + 1;
  default:
    return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

store.subscribe(() => count += 1)

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```

## Combine Multiple Reducers

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers)

### My solution

```

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
  case INCREMENT:
    return state + 1;
  case DECREMENT:
    return state - 1;
  default:
    return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
  case LOGIN:
    return {
       authenticated: true
    }
  case LOGOUT:
     return {
      authenticated: false
    }
  default:
    return state;
  }
};

// Define the root reducer below this line

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
})

// Define the root reducer above this line

const store = Redux.createStore(rootReducer);

```

## Send Action Data to the Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/send-action-data-to-the-store)

### My solution

```

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
  // Change code below this line
  case ADD_NOTE:
    return state = action.text;
  // Change code above this line
  default:
    return state;
  }
};

const addNoteText = (note) => ({
  // Change code below this line

  type: ADD_NOTE,
  text: note,

  // Change code above this line
});

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

```

## Use Middleware to Handle Asynchronous Actions

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-middleware-to-handle-asynchronous-actions)

### My solution

```

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData())

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data))

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
  case REQUESTING_DATA:
    return {
      fetching: true,
      users: []
    }
		case RECEIVED_DATA:
			return {
				fetching: false,
				users: action.users
			}
		default:
			return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

```

## Write a Counter with Redux

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux)

### My solution

```

// Define a constant for increment action types
const INCREMENT = 'INCREMENT_COUNTER';

// Define a constant for decrement action types
const DECREMENT = 'DECREMENT_COUNTER';

// Define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch(action.type) {
  case INCREMENT:
    return state = state + 1;
  case DECREMENT:
    return state = state - 1;
  default:
    return state;
  }
};

// Define an action creator for incrementing
const incAction = () => ({
  type: INCREMENT,
});

// Define an action creator for decrementing
const decAction = () => ({
  type: DECREMENT,
}); 

// Define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer); 

```

## Never Mutate State

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/never-mutate-state)

### My solution

```

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
	case ADD_TO_DO:
		// Don't mutate state here or the tests will fail
		// Change code below this line

		return state = [...state, action.todo]

		// Change code above this line
	default:
		return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

## Use the Spread Operator on Arrays

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-the-spread-operator-on-arrays)

### My solution

```

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
	case 'ADD_TO_DO':
		// Don't mutate state here or the tests will fail
		// Change code below this line

		return state = [...state, action.todo]

		// Change code above this line
	default:
		return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

## Remove an Item from an Array

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/remove-an-item-from-an-array)

### My solution

```

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
	case 'REMOVE_ITEM':
		// Don't mutate state here or the tests will fail
		// Change code below this line

		return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
		// Reference: https://redux.js.org/usage/structuring-reducers/immutable-update-patterns

		// Change code above this line
	default:
		return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

```
